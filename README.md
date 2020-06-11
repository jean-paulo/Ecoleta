# Ecoleta ♻🚀
Aplicação desenvolvida durante o NLW (Next Level Week) da Rocketseat.

### Tecnologias utilizadas:
- Typescript
- Node → Back-end (API REST).
- React → Front-end (SPA - Single Page Application).
- React Native → Mobile.
- Expo → Mobile.

## Passo-a-passo para testar a aplicação:

1. De um git clone nesse repositório para uma pasta de seu interesse.
2. No terminal navegue até a pasta do projeto. 
3. Digite o comando npm install dentro de cada uma das pastas (Web, Server, Mobile-ecoleta), para instalar as dependencias.
4. No terminal dentro da pasta server, digite: npm run knex:migrate e npm run knex:seed- Para a criação do banco de dados.
5. Dentro da pasta Server execute o seguinte comando: npm run dev, esse comando vai colocar para rodar o nosso servidor do backend.
6. Dentro da pasta Web, digite: npm start. (Ativa a página do front-end para o ambiente de desenvolvimento).
7. Dentro da Pasta mobile-ecoleta: npm start ou expo start. (Ativa a parte do mobile no ambiente de desenvolvimento).
8. É Necessário fazer alterações nas urls das requisições para que funcione corretamente (Por exemplo: utilize o ip da sua máquina no ambiente de desenvolvimento).

## Pacotes utilizados:

Pacotes instalados utilizando o gerenciador de pacotes npm.

- Express- Microframework de Rotas
- Knex, Sqlite3 - Banco de dados
- CORS - Segurança
- React-icons - Icones
- Leaflet - Mapa
- Axios - Requisições a api
- Expo - Mobile
- Expo Google Fonts - Fontes personalizadas no mobile
- @react-navigation - Navegação
- react-native-maps - Mapa do mobile.
- react-native-svg - Da suporte ao formato svg no React Native
- @react-navigation/stack - Navegação em formato de pilha.
- Path - dependência nativa do node para lidar com caminhos.
- React drop zone - Para criação de dropzone
- Celebrate - Para validação no Back-end.
