import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["pending", "completed", "in-progress"],
    default: "pending",
    required: true,
  },
  dueDate: { type: Date, default: Date.now },
   priority: {
    type: String,
    enum: ["high", "medium", "low"],
    default: "low",
  },
});

export default mongoose.model("Task", taskSchema);
