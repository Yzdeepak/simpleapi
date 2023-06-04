const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/userapi") {
    fs.readFile(`${__dirname}/userapi.json`, "utf-8", (err, data) => {
      console.log(data);
      res.end(data);
    });
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listen");
});
