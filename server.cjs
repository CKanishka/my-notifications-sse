const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/events") {
    res.writeHead(200, {
      "access-control-allow-origin": "*",
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });

    setInterval(() => {
      const eventData = JSON.stringify({
        title: `New email from User-${Math.floor(Math.random() * 100)}`,
        info: `Received on ${new Date().toLocaleTimeString()}`,
      });
      res.write(`data: ${eventData}\n\n`);
    }, 60000);
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
