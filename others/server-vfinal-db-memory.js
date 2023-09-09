import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

// Criando nosso BD
const database = new DatabaseMemory();

server.post("/videos", (request, reply) => {
  // const body = request.body;
  const { title, description, duration } = request.body; // desestruturação

  database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send(); // algo foi criado!
});

server.get("/videos", (request) => {
  const search = request.query.search;

  const videos = database.list(search);

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

server.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id;

  database.delete(videoId);
  return reply.status(204).send();
});

server.listen({
  port: 3333,
});
