from fastapi import FastAPI
from pydantic import BaseModel
from gpt4all import GPT4All

app = FastAPI()

model = GPT4All(
model_name = "mistral-7b-instruct-v0.2.Q4_K_M.gguf", #escolha o seu modelo e coloque aqui o nome
model_path = "C:/Users/caminho do modelo" #mude pelo caminho onde o se está

)

class Message(BaseModel):
    message:str

@app.post("/chat")
async def chat(msg: Message):
    response = model.generate(msg.message)
    return {"response": response}
