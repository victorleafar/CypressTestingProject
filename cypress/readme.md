Como instalar cypress na maquina

É bem simples, não precisamos instalar nada globalmente na nossa máquina, isso para simplificar o processo de execucao, vou deixar uns passinhos aqui

Certifique-se de ter o Node.js e o npm instalados em sua máquina.
Navegue até o diretório do seu projeto no terminal.
Execute o seguinte comando para instalar o Cypress localmente em seu projeto:
npm install cypress --save-dev
Apos completar o processo de instalação usar o seguinte comando
npx cypress open
Apos fazer isso, ele vai abrir uma janela de inicialização ao cypress
Na sequencia clicar:
Continue > E2E Testing >

Dar play
npx cypress run --record --key 0b4b7cfa-153f-4de1-adbd-3fbcf09a0dcf

Site teste:
https://demo.testfire.net/login.jsp
https://www.saucedemo.com/
https://the-internet.herokuapp.com/
https://demo.automationtesting.in/Register.html