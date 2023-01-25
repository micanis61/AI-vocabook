import io
import os
import deepl

# Imports the Google Cloud client library
from google.cloud import vision

# Instantiates a client
client = vision.ImageAnnotatorClient()

# The name of the image file to annotate
file_name = ('resources/wagahai.jpg')

# Loads the image into memory
with io.open(file_name, 'rb') as image_file:
    content = image_file.read()

image = vision.Image(content=content)

response = client.text_detection(image=image)
texts = response.text_annotations

text = ""


for t in texts:
        #print('\n"{}"'.format(text.description))
        
        vertices = (['({},{})'.format(vertex.x, vertex.y)
                    for vertex in t.bounding_poly.vertices])

        #print('bounds: {}'.format(','.join(vertices)))
        
        text = text + t.description



print(text)


if response.error.message:
        raise Exception(
            '{}\nFor more info on error messages, check: '
            'https://cloud.google.com/apis/design/errors'.format(
                response.error.message))


###########################################################################
API_KEY = '2905e011-e25a-9832-fc1b-7f65f1be1d8a:fx' # 自身の API キーを指定

#text = 'Riemann Zeta function is a very important function in number theory.'
source_lang = 'JA'
target_lang = 'EN-US'

# イニシャライズ
translator = deepl.Translator(API_KEY)


# 翻訳を実行

result = translator.translate_text(text, source_lang=source_lang, target_lang=target_lang)

# print すると翻訳後の文章が出力される
#print(result)



print(result)