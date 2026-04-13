# ToDo List - Rails + React

Uma aplicação full-stack para gerenciamento de tarefas (ToDo List) construída com Rails no backend e React no frontend.

## Descrição do Projeto

Este projeto é uma aplicação de duas partes que demonstra integração entre uma API REST robusta e uma interface moderna:

- **Backend**: API REST construída com Rails 8.1.3 que fornece as operações CRUD para gerenciar tarefas
- **Frontend**: Interface interativa construída com React 19.2.4 e Vite que consome a API

## Tecnologias Utilizadas

### Backend
- **Ruby on Rails**: 8.1.3
- **Banco de Dados**: PostgreSQL
- **CORS**: rack-cors ~> 3.0 (para comunicação com o frontend)
- **API Format**: JSON (com jbuilder)
- **Servidor**: Puma

### Frontend
- **React**: 19.2.4
- **Build Tool**: Vite 8.0.1
- **Roteamento**: React Router DOM 7.14.0
- **Variáveis de Ambiente**: dotenv 17.4.0
- **Linter**: ESLint

## Estrutura do Projeto

```
to_do_list_rails_react/
├── app/                 # Código Rails (modelos, controladores, views)
│   ├── models/
│   │   └── todo.rb      # Model de tarefas
│   ├── controllers/
│   │   └── todos_controller.rb  # CRUD API
│   └── views/
│       └── todos/
├── config/              # Configurações Rails
│   ├── routes.rb        # Rotas da API
│   ├── database.yml     # Configuração DB
│   └── initializers/    # Inicializadores
├── db/                  # Migrations e schema
├── frontend/            # Aplicação React
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── features/    # Features da aplicação
│   │   ├── services/    # Serviços e API calls
│   │   └── App.jsx      # Componente raiz
│   ├── vite.config.js
│   └── package.json
├── public/              # Arquivos estáticos
└── Dockerfile           # Configuração containerização
```

## Como Executar

### Pré-requisitos
- Ruby 3.x
- Node.js 18.x+
- PostgreSQL 12+
- Git

### Backend (Rails)

1. **Instalar dependências Ruby**:
   ```bash
   bundle install
   ```

2. **Configurar banco de dados**:
   ```bash
   rails db:create
   rails db:migrate
   ```

3. **Iniciar servidor Rails**:
   ```bash
   rails server
   # Disponível em http://localhost:3000
   ```

### Frontend (React)

1. **Navegar para o diretório frontend**:
   ```bash
   cd frontend
   ```

2. **Instalar dependências Node**:
   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente**:
   Criar arquivo `.env` na raiz do `frontend/`:
   ```
   VITE_API_URL=http://localhost:3000
   ```

4. **Iniciar servidor de desenvolvimento**:
   ```bash
   npm run dev
   # Disponível em http://localhost:5173
   ```

5. **Build para produção**:
   ```bash
   npm run build
   ```

## Funcionalidades

### CRUD de Tarefas

O sistema oferece as seguintes operações sobre tarefas:

- **GET /todos** - Listar todas as tarefas (ordenadas por criação)
- **GET /todos/:id** - Obter detalhes de uma tarefa específica
- **POST /todos** - Criar nova tarefa
- **PATCH /todos/:id** - Atualizar tarefa
- **PATCH /todos/:id/update_completed** - Marcar tarefa como concluída/não concluída
- **DELETE /todos/:id** - Deletar tarefa

### Resposta JSON
O backend retorna tarefas no seguinte formato:
```json
{
  "id": 1,
  "name": "Minha tarefa",
  "completed": false,
  "created_at": "2026-04-13T10:00:00Z",
  "updated_at": "2026-04-13T10:00:00Z"
}
```

## Integração CORS

A API está configurada com **rack-cors** para aceitar requisições do frontend (cross-origin). Isso permite que a aplicação React em um domínio diferente (ou porta diferente em desenvolvimento) comunique com a API Rails.

## Variáveis de Ambiente

### Backend (.env ou credentials.yml.enc)
- `DATABASE_URL` - String de conexão PostgreSQL
- `RAILS_ENV` - Ambiente (development, test, production)

### Frontend (frontend/.env)
- `VITE_API_URL` - URL base da API Rails

## Docker

O projeto inclui um `Dockerfile` para containerização:

```bash
# Build da imagem
docker build -t todo-list-app .

# Executar container
docker run -p 3000:3000 todo-list-app
```
**Últimas Atualizações:**
- ✅ Rails: 8.1.3
- ✅ React: 19.2.4
- ✅ Vite: 8.0.1
- ✅ Node.js: ^18.0.0
