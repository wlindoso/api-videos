import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";
import { request } from "http";

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
  // const body = request.body;
  const { title, description, duration } = request.body; // desestruturação

  database.create({ title, description, duration });
  /*   database.create({
    title: title,
    description: description,
    duration: duration,
  }); */

  return response.status(201).send(); // algo foi criado!
});

server.get("/videos", () => {
  const videos = database.list();
  console.log(videos);

  return videos;
});

server.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body; // desestruturação

  const video = database.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

server.delete("/videos/:id", () => {
  return "Hello Node.js";
});

server.listen({
  port: 3333,
});
