const server = require("./src/app.js");

const port = 8000;

server.listen(port, () => {
  console.log(`Listen port ${port}`);
});