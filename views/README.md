# VIEWS

GET - '/' - home

---

GET - '/login' - Login form

POST - '/api/users/login' - Authenticate existing user

---

GET - '/signup' - Registration form

POST - 'api/users' - Create User

---

GET - '/dashboard' - User dashboard

---

GET - '/dashboard/new' - Create post view

POST - '/api/posts' - Create post API

---

GET - '/dashboard/edit/:postId' - Edit Post View

PUT - '/api/posts/:postId'- Edit Post API

DELETE - 'api/posts/:postId' Delete post API

---

GET - '/post/:postId' - View a single post

POST - 'api/comments' - Create comment for a post


