import json
import requests
import time

def obter_dados_api():
    url = 'https://api.sportsanalytics.com.br/api/v1/fixtures-svc/markets/{fixture_id}'
    response = requests.get(url)
    return json.loads(response.text)

def verificar_dados(dados):
    # ...
    pass

while True:
    try:
        dados = obter_dados_api()
        verificar_dados(dados)
        time.sleep(300) # espera 5 minutos
    except:
        print('Erro ao obter dados da API. Tentando novamente em 30 segundos...')
        time.sleep(30)