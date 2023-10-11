const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello world! welcome to node js");
});

const port = process.env.port || 3000;

server.listen(port, () => console.log("server is running on port 3000"));