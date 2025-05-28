const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    const file =
      request.url == "/" ? "./WWW/index.html" : `./WWW${request.url}`;
    fs.readFile(file, (err, data) => {
      if (err) {
        response.writeHead(404, { "Content-type": "text/plain" });
        response.write("content not found");
        response.end();
      } else {
        const ext = request.url == "/" ? "html" : request.url.split(".").pop();
        switch (ext) {
          case "html":
            response.writeHead(200, { "Content-type": "text/html" });
            break;
          case "css":
            response.writeHead(200, { "Content-type": "text/css" });
            break;
          default:
            response.writeHead(200, { "Content-type": "text/plain" });
        }
        response.write(data);
        response.end();
      }
    });
  })
  .listen(8888);

