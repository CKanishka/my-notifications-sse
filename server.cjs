const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/events") {
    res.writeHead(200, {
      "access-control-allow-origin": "*",
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });

    const sendEvent = (data) => {
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    const intervalId = setInterval(() => {
      sendEvent({
        id: Date.now(),
        title: `New email from User-${Math.floor(Math.random() * 100)}`,
        info: `Received on ${new Date().toLocaleTimeString()}`,
      });
    }, 60000);

    // When the client closes the connection, stop sending events
    req.on("close", () => {
      clearInterval(intervalId);
    });
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
