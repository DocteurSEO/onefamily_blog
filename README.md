# Introduction

A simple blog API built using NodeJS + Express + Postgres.

## Installation

```bash
$ npm install
```

### Rename _.env.sample_ to .env and set database connection

```
DB_URL=postgres://user:password@host:port/database
```

## Run

```bash
$ npm run dev
```

Visit http://localhost:4002/api/v1

### Available endpoints

`/api/v1/authors`

| method | route              | description          |
| ------ | ------------------ | -------------------- |
| POST   | /authors           | Create author        |

`/api/v1/posts`

| method | route      | description          |
| ------ | ---------- | -------------------- |
| GET    | /posts     | Get posts            |
| POST   | /posts     | Create post          |
| GET    | /posts/:id | Get posts by ID      |
| PUT    | /posts/:id | Update posts         |
| DELETE | /posts/:id | Delete/remove posts  |
