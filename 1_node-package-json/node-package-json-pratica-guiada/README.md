# Node.js e package.json - Template de Prática

## Instruções 

1. Crie o arq index.js 
```jsx
touch index.js
```
2. Criar o package.json
```jsx
npm init -y 
```
3. Adicionar ("type": "module",) no  package.json para permitir import e export. 

4. Como rodar função manualmente
```jsx
node index.js
```
5. Como rodar com script
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ./index.js"
  },
```jsx
npm run start ou npm start
```
    - fora o start, todos precisam de run.
    
