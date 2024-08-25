const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
app.use(cors());
const { db } = require("./firebase");

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});
app.get("/get-data", (req, res) => {
  const boardsRef = db.collection("boards"); // Reference to the "boards" collection

  boardsRef
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        console.log("No boards found.");
        return res.status(404).send("No boards found.");
      }

      const boards = [];
      snapshot.forEach((doc) => {
        boards.push({ id: doc.id, ...doc.data() }); // Push each board's data into the array
      });

      console.log("Boards retrieved:", boards);
      res.status(200).json(boards); // Send the boards data as JSON
    })
    .catch((error) => {
      console.error("Error retrieving boards:", error);
      res.status(500).send("Error retrieving data: " + error.message);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
