import os
import json
import time
import requests

SHOP_ID = "689a3d8a07da4b648b117a6d"

def handler(event: dict, context) -> dict:
    """Поиск остатка товара по коду в LiveSklad."""

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

    session = requests.Session()
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Content-Type': 'application/json',
        'Origin': 'https://my.livesklad.com',
        'Referer': 'https://my.livesklad.com/'
    })

    # Авторизация — isRetry=true позволяет войти без recaptcha
    auth_resp = session.post(
        'https://api.livesklad.com/auth',
        json={
            'email': login,
            'password': password,
            'date': int(time.time() * 1000),
            'recaptchaToken': '',
            'isRetry': True,
            'version': '7.5.4'
        }
    )

    if auth_resp.status_code != 200:
        return {
            'statusCode': 502,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'error': 'Ошибка авторизации',
                'status': auth_resp.status_code,
                'body': auth_resp.text[:500]
            }, ensure_ascii=False)
        }

    auth_data = auth_resp.json()
    token = auth_data.get('token') or auth_data.get('data', {}).get('token', '')

    if not token:
        return {
            'statusCode': 502,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'error': 'Токен не получен',
                'auth_body': auth_resp.text[:500]
            }, ensure_ascii=False)
        }

    # Поиск товара по коду
    search_resp = session.get(
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
        headers={'authorization': token}
    )

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({
            'code': code,
            'search_status': search_resp.status_code,
            'result': search_resp.json() if search_resp.ok else search_resp.text[:1000]
        }, ensure_ascii=False)
    }
