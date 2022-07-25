const express = require("express");
const app = express();

app.use("/logs", express.static("logs"));

app.listen(9000, () => console.log(`Server listening on PORT:9000`));
