import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  text: {type: String, required: true},
  done: { type: Boolean, default: false },
  isEditing: { type: Boolean, default: false },
  author: {type: Schema.Types.ObjectId, ref: "User"} 
}, {
  timestamps: true
})

const TaskModel = model("Task", TaskSchema);

export default TaskModel;
