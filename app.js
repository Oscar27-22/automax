const http = require("http");
const fs = require("fs");

let port = 8888;

const srv = http.createServer((request, response) => {
  const file = request.url == "/" ? "./WWW/index.html" : `./WWW${request.url}`;
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
        case "js":
          response.writeHead(200, { "Content-type": "text/javascript" });
          break;
        case "ico":
          response.writeHead(200, { "Content-type": "image/x-icon" });
          break;
        default:
          response.writeHead(200, { "Content-type": "text/plain" });
      }
      response.write(data);
      response.end();
    }
  });
});

srv.on("error", (err) => {
  console.error("Something unexpected happened:\n", err);
  process.exit(1);
});

console.log(`Server running on port ${port}`);
srv.listen(port);
