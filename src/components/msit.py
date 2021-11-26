import requests
from bs4 import BeautifulSoup
import json
r = requests.get('https://msit.in/')

soup = BeautifulSoup(r.text, "html.parser")

jsn={}
#task1. all the href links of the webpage:
for item in soup.find_all('li',class_='als-item'):
    anchor=item.find('a')
    link='https://msit.in/'+anchor['href']
    text=anchor.text
    jsn[text]=link


with open("msit.json", "w") as outfile:
    json.dump(jsn, outfile)
# print(json)


