import mongoose from "mongoose";

const schema = new mongoose.Schema({
  quiz: String,
  index: Number,
  question: String,
  answers: [String],
  correctAnswer: Number,
});

const QuizQuestion = mongoose.model("QuizQuestion", schema);

export default QuizQuestion;
