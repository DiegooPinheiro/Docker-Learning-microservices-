# Microservices Demo com Docker

Aplicação de demonstração de arquitetura de microserviços usando Node.js, Express e Docker Compose.

## 🏗️ Arquitetura

A aplicação é composta por 3 serviços independentes:

- **API Gateway** (porta 8080): Ponto de entrada único que roteia requisições para os microserviços
- **Users Service** (porta 3001): Gerenciamento de usuários
- **Products Service** (porta 3002): Gerenciamento de produtos

```
┌─────────────────┐
│   API Gateway   │ :8080
│  (Entry Point)  │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼──────┐ ┌▼──────────┐
│  Users   │ │ Products  │
│ Service  │ │  Service  │
│  :3001   │ │   :3002   │
└──────────┘ └───────────┘
```

## 🚀 Tecnologias

- **Node.js** 18 (Alpine)
- **Express** 5.x
- **Docker** & **Docker Compose**
- **http-proxy-middleware** (para API Gateway)
- **UUID** v9 (geração de IDs únicos)
- **CORS** habilitado

## 📋 Pré-requisitos

- Docker
- Docker Compose

## 🔧 Instalação e Execução

1. Clone o repositório:
```bash
git clone git@github.com:clodomilson-silva/Docker-Learning.git
cd microservices-demo
```

2. Inicie os containers:
```bash
docker compose up -d
```

3. Verifique se os serviços estão rodando:
```bash
docker compose ps
```

4. Acesse a aplicação:
- API Gateway: http://localhost:8080
- Users Service (direto): http://localhost:3001
- Products Service (direto): http://localhost:3002

## 📡 Endpoints

### Via API Gateway (http://localhost:8080)

#### Usuários

- **GET** `/users` - Lista todos os usuários
- **POST** `/users` - Cria um novo usuário
  ```json
  {
    "name": "João Silva",
    "email": "joao@example.com"
  }
  ```
- **GET** `/users/:id` - Busca usuário por ID
- **DELETE** `/users/:id` - Remove usuário

#### Produtos

- **GET** `/products` - Lista todos os produtos
- **POST** `/products` - Cria um novo produto
  ```json
  {
    "name": "Notebook Dell",
    "price": 3500.00
  }
  ```
- **GET** `/products/:id` - Busca produto por ID
- **DELETE** `/products/:id` - Remove produto

## 🧪 Exemplos de Uso

### Criar um usuário
```bash
curl -X POST http://localhost:8080/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Maria Silva", "email": "maria@example.com"}'
```

### Listar usuários
```bash
curl http://localhost:8080/users
```

### Criar um produto
```bash
curl -X POST http://localhost:8080/products \
  -H "Content-Type: application/json" \
  -d '{"name": "Mouse Gamer", "price": 150.00}'
```

### Listar produtos
```bash
curl http://localhost:8080/products
```

## 🐳 Comandos Docker Úteis

```bash
# Iniciar serviços
docker compose up -d

# Parar serviços
docker compose down

# Ver logs
docker compose logs

# Ver logs de um serviço específico
docker compose logs gateway
docker compose logs users-service
docker compose logs products-service

# Reconstruir imagens
docker compose build

# Reconstruir e reiniciar
docker compose up -d --build
```

## 📁 Estrutura do Projeto

```
microservices-demo/
├── docker-compose.yml
├── gateway/
│   ├── Dockerfile
│   ├── package.json
│   ├── .dockerignore
│   └── src/
│       └── index.js
├── users-service/
│   ├── Dockerfile
│   ├── package.json
│   ├── .dockerignore
│   └── src/
│       ├── index.js
│       ├── routes.js
│       └── controllers/
│           └── usersController.js
└── products-service/
    ├── Dockerfile
    ├── package.json
    ├── .dockerignore
    └── src/
        ├── index.js
        ├── routes.js
        └── controllers/
            └── productsController.js
```

## 🔒 Características

- ✅ Arquitetura de microserviços
- ✅ API Gateway como ponto de entrada único
- ✅ Comunicação entre containers via rede Docker
- ✅ CORS habilitado
- ✅ IDs únicos com UUID v4
- ✅ Logs estruturados
- ✅ Containers Alpine Linux (menor tamanho)
- ✅ Armazenamento em memória (não persistente)

## ⚠️ Notas Importantes

- Os dados são armazenados em **memória** e serão perdidos quando os containers forem reiniciados
- Para produção, considere adicionar um banco de dados (MongoDB, PostgreSQL, etc.)
- Esta é uma aplicação de **demonstração/aprendizado**

## 🛠️ Desenvolvimento

Para desenvolvimento local com hot-reload:

1. Instale as dependências em cada serviço:
```bash
cd gateway && npm install
cd ../users-service && npm install
cd ../products-service && npm install
```

2. Execute cada serviço individualmente:
```bash
# Terminal 1
cd gateway && npm start

# Terminal 2
cd users-service && npm start

# Terminal 3
cd products-service && npm start
```

## 📝 Licença

Este projeto é para fins educacionais.

## 👨‍💻 Autor

Clodomilson Silva
