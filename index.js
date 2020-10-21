const express = require("express");
const app = express();
const port = 4000;

function handlelistening() {
  console.log(`listening on: http://localhost:${port}`);
}

app.listen(port, handlelistening);

/*
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

*/
