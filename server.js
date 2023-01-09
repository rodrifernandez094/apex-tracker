const express = require("express");
const dotenv = require("dotenv").config({
  path: `${__dirname}/config/config.env`,
});
const routes = require("./routes/routes");
const path = require("path");

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/dist")));
}

app.use("/api/profile", routes);

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "./client/dist/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port ${port}`));
