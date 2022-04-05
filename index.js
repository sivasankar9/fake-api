const express = require("express");
const app = express();
const PORT = process.env.PORT || 7000;
const path = require("path");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(express.static("static"));
app.use("*", cors(corsOptions));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("pages/index.html"));
});

app.get("/faqs", (req, res) => {
  const docs = [
    {
      title:
        "What is Lorem Ipsum?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title:
        "Where does it come from?",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    },
    {
      title:
        "Why do we use it?",
      desc: "The Tax Simple Interest Calculator asks you to fill the compounding frequency from the daily, weekly, monthly, quarterly and other options. Quarterly compounding means interest is calculated and paid every three months. The Tax Simple Interest Calculator wants to know how often interest is added to your loans each year.",
    },
    {
      title:
        "Where can I get some?",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    },
  ];
  res.send(docs);
});

app.get("/faq", (req, res) => {
  res.status(400).send({
    message: "some thing went wrong",
    code: 1258,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
