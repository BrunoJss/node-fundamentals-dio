# 📌 QR Code & Password Generator (Node.js)

Projeto desenvolvido em **Node.js** com foco em prática de interação no terminal.  
Ele permite:  
- 📲 **Gerar QR Codes** diretamente no console (usando `qrcode-terminal`)  
- 🔐 **Gerar senhas seguras** baseadas em padrões definidos em variáveis de ambiente  
- ⌨️ **Interagir pelo terminal** com o usuário (via `prompt`)  
- 🎨 **Mensagens estilizadas** para melhor experiência visual (via `chalk`)
  
---

## 🚀 Tecnologias utilizadas
- [Node.js](https://nodejs.org/)  
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)  
- [prompt](https://www.npmjs.com/package/prompt)  
- [chalk](https://www.npmjs.com/package/chalk)  

---

## 📂 Estrutura do projeto
📦 projeto-qrcode
┣ 📂 src
┃ ┣ 📂 prompts
┃ ┃ ┣ 📜 prompt-main.js
┃ ┃ ┗ 📜 prompt-qrcode.js
┃ ┣ 📂 services
┃ ┃ ┣ 📂 password
┃ ┃ ┃ ┣ 📂 utils
┃ ┃ ┃ ┃ ┗ 📜 permitted-characters.js
┃ ┃ ┃ ┣ 📜 create.js
┃ ┃ ┃ ┗ 📜 handle.js
┃ ┃ ┣ 📂 qr-code
┃ ┃ ┃ ┣ 📜 create.js
┃ ┃ ┃ ┗ 📜 handle.js
┃ ┗ 📜 index.js
┣ 📜 .env.example
┣ 📜 package.json
┗ 📜 README.md

- **.env.example** → Guarda as variáveis de ambiente, como padrões de senha. Renomeie para ".env", apenas.  
- **index.js** → Arquivo principal do projeto  
- **package.json** → Dependências e scripts

## 🎓 Aprendizado

Este projeto foi desenvolvido com a tutela do Felipe, da [DIO](https://www.dio.me/), durante minha jornada de estudos em Node.js.

O foco foi praticar:

- Utilização de pacotes do NPM;
- Leitura de variáveis de ambiente;
- Interatividade no terminal; 
