cors = require("cors");
express = require("express");
app = express();
fs = require('fs')
global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:" + process.env.PORT
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running atyfg localhost:${port}`);
});
