import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка коммерческого предложения на почту 89220573961@mail.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))

    full_name = body.get('fullName', '')
    phone = body.get('phone', '')
    organization = body.get('organization', '')
    inn = body.get('inn', '')
    activity = body.get('activity', '')
    equipment = body.get('equipment', [])
    comment = body.get('comment', '')

    equipment_str = ', '.join(equipment) if equipment else '—'

    html = f"""
    <h2>Новый запрос на коммерческое предложение</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">ФИО</td><td style="padding:8px;border:1px solid #ddd">{full_name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Контактный номер</td><td style="padding:8px;border:1px solid #ddd">{phone or '—'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Организация</td><td style="padding:8px;border:1px solid #ddd">{organization}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">ИНН</td><td style="padding:8px;border:1px solid #ddd">{inn}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Вид деятельности</td><td style="padding:8px;border:1px solid #ddd">{activity}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Техника для обслуживания</td><td style="padding:8px;border:1px solid #ddd">{equipment_str}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Комментарий</td><td style="padding:8px;border:1px solid #ddd">{comment or '—'}</td></tr>
    </table>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'КП запрос: {organization or full_name}'
    msg['From'] = '89220573961@mail.ru'
    msg['To'] = '89220573961@mail.ru'
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    smtp_password = os.environ.get('SMTP_PASSWORD', '')

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login('89220573961@mail.ru', smtp_password)
        server.sendmail('89220573961@mail.ru', '89220573961@mail.ru', msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }