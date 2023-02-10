import base64

from typing import Dict

from fastapi import FastAPI, Response

app = FastAPI()

# 画像ファイルを開いてbase64に変換
with open("iphone.png", "br") as f1:
    b64_img = base64.b64encode(f1.read())
    print(str(b64_img))  # iVBORw0KGgoAAAANSUhEU・・・

# base64をテキスト形式で保存
with open("iphone.txt", "w") as f2:
    f2.write(b64_img.decode())

# base64のテキストを開く
with open("iphone.txt", "r") as f3:
    data = f3.read()
    print(data)

# base64のテキストをbase64のbytes型に変換後、通常のbytes型に変換して保存
img = base64.b64decode(data.encode())
with open("iphone2.png", "bw") as f4:
    f4.write(img)


@app.get("/")
def index() -> Dict[str, str]:
    return Response(img)


@app.post("/items/")
def create_item() -> Dict[str, str]:
    return Response(img)
