// const express = require("express");
// require("./DB/config/config");
// const app = express();
// const cors = require("cors");
// const students = require("./DB/Users/students/students");

// app.use(express.json());
// app.use(cors());

// app.post("/register", async (req, res) => {
//   let student = new students(req.body);
//   let result = await student.save();
//   res.send(result);
// });

// app.listen(5000);
const express = require("express");
require("./DB/config/config");
const app = express();
const cors = require("cors");
const studentRoutes = require("./DB/routes/student.routes");

app.use(express.json());
app.use(cors());

// Mount the student routes
app.use("/api/students", studentRoutes);

app.listen(5000);
