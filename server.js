// Declaring Variables
cors = require("cors");
express = require("express");
app = express();
fs = require('fs')
global.__basedir = __dirname;

// In Case Of Use Of CORS
var corsOptions = {
  origin: "http://localhost:" + process.env.PORT
};

app.use(cors(corsOptions));

// App Routes
const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running Beatshape API At: localhost:${port}`);
});
