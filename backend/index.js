const express = require("express");
const authRoute = require("./routes/auth");
const notesRoute = require("./routes/notes");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/iNotebook", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

// Available Routes
app.use("/api/auth", authRoute);
app.use("/api/notes", notesRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
