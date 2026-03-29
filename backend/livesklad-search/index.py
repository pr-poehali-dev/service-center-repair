import os
import json
import time
import requests

SHOP_ID = "689a3d8a07da4b648b117a6d"

def handler(event: dict, context) -> dict:
    """Поиск товара по коду в LiveSklad. Авторизуется и возвращает остаток."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    params = event.get('queryStringParameters') or {}
    code = params.get('code', '').strip()

    if not code:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Не передан параметр code'}, ensure_ascii=False)
        }

    login = os.environ['LIVESKLAD_LOGIN']
    password = os.environ['LIVESKLAD_PASSWORD']

    # Авторизация
    auth_resp = requests.post(
        'https://api.livesklad.com/auth',
        json={
            'email': login,
            'password': password,
            'date': int(time.time() * 1000),
            'version': '7.5.4'
        },
        headers={'Content-Type': 'application/json'}
    )

    if auth_resp.status_code != 200:
        return {
            'statusCode': 502,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'error': 'Ошибка авторизации в LiveSklad',
                'status': auth_resp.status_code,
                'body': auth_resp.text[:500]
            }, ensure_ascii=False)
        }

    token = auth_resp.json().get('token') or auth_resp.json().get('data', {}).get('token', '')

    # Поиск товара по коду
    search_resp = requests.get(
        'https://api.livesklad.com/nomenclature-groups',
        params={
            'countFilter': 1,
            'shopId': SHOP_ID,
            'isProduct': 'true',
            'isWork': 'false',
            'isCount': 'true',
            'filter': code,
            'page': 1,
            'pageSize': 30,
            'version': '7.5.4'
        },
        headers={
            'authorization': token,
            'Content-Type': 'application/json'
        }
    )

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({
            'auth_status': auth_resp.status_code,
            'token_preview': token[:20] + '...' if token else None,
            'search_status': search_resp.status_code,
            'search_body': search_resp.text[:3000]
        }, ensure_ascii=False)
    }
