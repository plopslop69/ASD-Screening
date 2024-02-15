import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/cvision", (req, res) => {
  res.render("cvision");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/result", (req, res) => {
  res.render("result");
});

// router.get("/visualize", (req, res) => {
//   res.render("visualize");
// });

export default router;
