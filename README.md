### HTTP Methods

- Get
- Post
- Delete
- Put
- Patch

### Route Params

- Exemple: localhost:3333/users/5 -> /users = resource -> /5 -> params
- Insert Params: localhost:3333/users/:id -> /users = resource -> /:id = 5 = params

### Query Params

- Exemple: localhost:3333/users?name=patrick&lastName=silva

### Diferences:

- Route params: Required parameters
- Query params: Optional parameters

### Get

- Used by default in browsers
- Return data
- Req: req.body, req.params, req.query
- Res: res.send, res.render, res.status, res.json

### Post

- Body params
  - Send data
  - Formats
    - JSON (Recommended/Default)
    - XML
    - YAML
    - EDN
    - Plain
    - ...

### Routes

- Controller routes of all types (GET, POST, PUT...)

### Controller

- Business rules
- Request controls
- Methods (Max 5 for each controllers)
  - Index (GET)
  - Show (GET)
  - Create (POST)
  - Update (PUT)
  - Delete (DELETE)

### Database

- Database keep all data structures
- SQL : Structure Query Language
  - Commands
    - DDL : Data Definition Language
      - CREATE
        - TABLE
      - ALTER
        - ADD
        - RENAME
        - DROP
    - DML : Data Manipulation Language
      - CRUD
        - Create : INSERT
        - Read : SELECT
        - Update : UPDATE
        - Delete : DELETE
