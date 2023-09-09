import { createServer } from "node:http";

const server = createServer((request, response) => {
  // console.log("Oi");
  response.write("Oi");

  response.end();
});

server.listen(3333);

// localhost:3333
// localhost:3332
// POST localhost:3333/videos
// DELETE localhost:3333/videos/1
