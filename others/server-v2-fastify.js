import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

// Criando nosso BD
const database = new DatabaseMemory();

// GET, POST, PUT, DELETE, PATCH(alterar algo específico ao invés de todos os dados)

// POST http://localhost:3333/videos
// GET http://localhost:3333/
// POST http://localhost:3333/videos/3
// DELETE http://localhost:3333/videos/3

// Request Body

server.post("/videos", (request, response) => {
  database.create({
    title: "Video 01",
    description: "Esse é o video 01",
    duration: 180,
  });
  // console.log(database.list());

  return response.status(201).send(); // algo foi criado!
});

server.get("/videos", () => {
  return "Hello Rocketseat";
});

server.put("/videos/:id", () => {
  return "Hello Node.js";
});

server.delete("/videos/:id", () => {
  return "Hello Node.js";
});

server.listen({
  port: 3333,
});
