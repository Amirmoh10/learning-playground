const http = require("http");

const server = http.createServer((req, resp) => {
  resp.writeHead(200, { body: "hello" }).end("done");
});

server.listen(() => {
  console.log("server listening");
});
