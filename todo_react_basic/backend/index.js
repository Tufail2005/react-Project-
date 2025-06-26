const express = require("express");
const app = express();
const zod = require("zod");
const { todo } = require("./db.js");
const { createTodo, updateTodo } = require("./type.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you send the wrong inputs",
    });
    return;
  }

  //put in mongo db
  const todoCreated = await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  if (todoCreated) {
    res.json({
      msg: "todo created",
    });
  }
});

app.get("/todo", async (req, res) => {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

app.put("/todo/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you send the wrong inputs",
    });
    return;
  }

  const todoupdated = await todo.updateOne(
    { _id: req.body.id },
    { completed: true }
  );
  if (todoupdated) {
    res.json({
      msg: "todo is completed",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
