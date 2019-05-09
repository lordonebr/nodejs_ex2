# nodejs_ex2
POS graduação

Curso: Desenvolvimento Web Full Stack

Disciplina: Programação web com Node.js

Professor: Samuel Martins

## Exercício 2

- COMANDO para SUBIR o serviço:
  ```
  npm start
### - Exercício 2.1
  - URL para acesso do projeto no browser:  
    http://localhost:3000/form 
   
 
### - Exercício 2.2
  - GET para listar produtos  
    http://localhost:3000/api/products/list

  - POST para add produtos:  
    http://localhost:3000/api/products
      
    usar JSON padrão como abaixo:
    ```json
    {
      "id":1, 
      "name":"andre", 
      "description":"new"
    }

  - DELETE para remover produtos:  
    http://localhost:3000/api/products/3  
    onde o numero final é o id do produto

  - PUT para atualizar produtos:  
    http://localhost:3000/api/products/2  
    onde o numero final é o id do produto

    usar JSON padrão como abaixo:
    ```json
    {
      "id":1, 
      "name":"André", 
      "description":"update"
    }
