import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  return res.json([{ msg: "acesou sds" }, { msg: "acesou sds" }]);
});

app.listen(3333);
