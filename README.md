# local-ai-desktop
Aplicação desktop de IA construída com Electron, Node.js e FastAPI utilizando GPT4All para rodar localmente

<img width="1317" height="811" alt="Captura de tela 2026-02-20 211123" src="https://github.com/user-attachments/assets/22dfdf9d-7bd7-4ddd-9b87-5aac5e435328" />


# Local AI Desktop

Aplicação desktop de Inteligência Artificial com processamento totalmente local, utilizando Electron no frontend, Node.js como ponte e FastAPI com GPT4All no backend.

## Funcionalidades

- Execução 100% local
- Interface desktop moderna
- Integração com GPT4All
- Arquitetura modular
- Comunicação via API REST

## Arquitetura

Electron (Interface Desktop)  
→ Node.js (Servidor intermediário)  
→ FastAPI (API em Python)  
→ GPT4All (Modelo LLM local)

## Requisitos

- Node.js 18+
- Python 3.10 ou 3.11 recomendado
- Modelo GPT4All (.gguf)

## Estrutura do Projeto

ia/
├── electron
├── node-backend
└── python-ai

- Verifique se o modelo GPT4All está configurado corretamente no arquivo `ai_server.py`.
- Utilize Python 3.11 para maior compatibilidade com bibliotecas de IA.

- Sinta-se livre para modificar o projeto.
