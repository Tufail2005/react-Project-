const mongoose = require("mongoose");

/* 
Todos {
     title: sting;
     description : string;
     completed: boolean
}
*/

mongoose.connect(
  "mongodb+srv://tufail:Tufail%40786@tufail.kxptnkh.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo: todo,
};
