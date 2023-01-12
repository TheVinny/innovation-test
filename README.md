## Dependencies

Depencencias utilizadas:

- Node.js;
- Express;
- Typescript;
- ESLint;
- Prettier;
- Celebrate;
- Multer;
- TypeORM;
- Docker;

Para rodar o projeto, execute o script docker-compose up para subir os containers:

```
 docker-compose up
```

## Endpoints

- Create Product | POST - `/products`:

```
{
  "name": "Examples" - required & string ,
  "quantity": 20  - required & Number,
  "status": "Inactive" - required & enum('Inactive' && 'Active'),
  "category": "Eletronics - required & String"
}
```

- Update Product | PUT - `/products/:id - required | uuid`:

```
{
  "name": "Examples" - Opcional & string ,
  "quantity": 20  -  Opcional & Number,
  "status": "Inactive" - Opcional & enum('Inactive' && 'Active'),
  "category": "Eletronics - Opcional & String"
}

```

- Get Products | GET - `/products`:

```
{
  No Body
}
```

- Get Products | GET - `/products/id - required | uuid`:

```
{
  No Body
}
```

- Delete Products | Delete - `/products/id - required | uuid`:

```
{
  No Body
}
```

- Delete Ibge | GET - `/ibge - required | uuid`:

```
{
  No Body
}
```