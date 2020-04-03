const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const data = require("../mail-data.json");
// Dist file directory
const DIST_DIR = path.join(__dirname, "../dist");

// Bundle File
const HTML_FILE = path.join(DIST_DIR, "index.html");
const mockResponse = {
  foo: "bar",
  bar: "foo"
};

app.use(express.static(DIST_DIR));

app.get("/api", (req, res) => {
  res.status(200).json({ data: data });
});
app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});
app.listen(port, function() {
  console.log("App listening on port: " + port);
});
