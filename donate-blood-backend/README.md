# Como executar o projeto



  - É necessário ter o docker instalado 
    - apt-get update
    - apt-get install docker.io

  - Baixe a imagem docker do PostgreSQL no repositório online.
    - docker pull postgres

  - Liste as imagens Docker instaladas em seu sistema.
    - docker images
  
  - Inicie o container PostgreSQL do nosso projeto usando esta imagem Docker.
    - docker run --name DOEdb -e POSTGRES_PASSWORD=DOEdb -p 5432:5432 -d postgres

  - Use *docker start/stop DOEdb*

  - Para entrar no conatiner criado
    - docker exec -it DOEdb bash

  - Para setar alguns argumentos para execução
    - psql -h localhost -p 5432 -U postgres

  - Crie a Base de Dados usada no projeto
    - CREATE DATABASE DOEDB;

  - Se tudo deu certo abra um terminal na raiz do projeto instale todas as dependencias e execute *yarn dev*



