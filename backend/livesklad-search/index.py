import os
import json
import requests

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
            'body': json.dumps({'error': 'Не передан параметр code'})
        }

    login = os.environ['LIVESKLAD_LOGIN']
    password = os.environ['LIVESKLAD_PASSWORD']

    session = requests.Session()

    # Авторизация
    auth_resp = session.post(
        'https://my.livesklad.com/api/user/login',
        json={'login': login, 'password': password},
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
            })
        }

    # Поиск товара по коду
    search_resp = session.get(
        'https://my.livesklad.com/api/spare',
        params={'search': code, 'limit': 10},
        headers={'Content-Type': 'application/json'}
    )

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({
            'auth_status': auth_resp.status_code,
            'auth_body': auth_resp.json() if auth_resp.text else None,
            'search_status': search_resp.status_code,
            'search_body': search_resp.text[:2000]
        }, ensure_ascii=False)
    }
