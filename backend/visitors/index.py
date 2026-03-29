import os
import json
import hashlib
import psycopg2
import psycopg2.extras

SCHEMA = "t_p94662151_service_center_repai"
VALID_BRANCHES = {"moscow", "irkutsk"}


def get_conn():
    return psycopg2.connect(os.environ["DATABASE_URL"], sslmode="disable")


def handler(event: dict, context) -> dict:
    """Счётчик уникальных посещений сайта по регионам."""
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, X-User-Id, X-Forwarded-For",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    method = event.get("httpMethod", "GET")

    if method == "POST":
        body = json.loads(event.get("body") or "{}")
        branch_id = body.get("branch_id", "")
        if branch_id not in VALID_BRANCHES:
            return {"statusCode": 400, "headers": headers, "body": json.dumps({"error": "invalid branch_id"})}

        ip = (event.get("headers") or {}).get("x-forwarded-for", "unknown").split(",")[0].strip()
        visitor_hash = hashlib.sha256(f"{ip}:{branch_id}".encode()).hexdigest()

        conn = get_conn()
        cur = conn.cursor()

        cur.execute(
            f"SELECT 1 FROM {SCHEMA}.visitor_hashes WHERE hash = %s",
            (visitor_hash,)
        )
        already_counted = cur.fetchone() is not None

        if not already_counted:
            cur.execute(
                f"INSERT INTO {SCHEMA}.visitor_hashes (hash, branch_id) VALUES (%s, %s) ON CONFLICT DO NOTHING",
                (visitor_hash, branch_id)
            )
            cur.execute(
                f"UPDATE {SCHEMA}.visitor_counts SET count = count + 1, updated_at = NOW() WHERE branch_id = %s",
                (branch_id,)
            )
            conn.commit()

        cur.close()
        conn.close()
        return {"statusCode": 200, "headers": headers, "body": json.dumps({"counted": not already_counted})}

    # GET — возвращаем счётчики
    conn = get_conn()
    cur = conn.cursor()
    cur.execute(f"SELECT branch_id, count FROM {SCHEMA}.visitor_counts")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    counts = {row[0]: row[1] for row in rows}
    return {"statusCode": 200, "headers": headers, "body": json.dumps({"counts": counts})}
