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
app.use(express.static(path.join(__dirname, "/assets/images")));
app.use("*", cors(corsOptions));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve("pages/index.html"));
});

app.get("/faqs", (req, res) => {
  const docs = [
    {
      title: "What is Lorem Ipsum?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Where does it come from?",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    },
    {
      title: "Why do we use it?",
      desc: "The Tax Simple Interest Calculator asks you to fill the compounding frequency from the daily, weekly, monthly, quarterly and other options. Quarterly compounding means interest is calculated and paid every three months. The Tax Simple Interest Calculator wants to know how often interest is added to your loans each year.",
    },
    {
      title: "Where can I get some?",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    },
  ];
  res.send(docs);
});

app.get("/tableofcontents", (req, res) => {
  return [
    "Prerequisites",
    "Overview",
    "Declare app dependencies",
    "Specify the version of node",
    "Specifying a start script",
    "Build your app and run it locally",
    "How to keep build artifacts out of git",
    "Deploy your application to Heroku",
    "Advanced HTTP features",
    "Provision a database",
    "Next steps",
  ];
});

app.post("/apply-coupon", (req, res) => {
  const code = req.body.coupon;

  const couponValidation = (a) => {
    switch (a) {
      case "ps19":
      case "ps21":
        return {
          message: 'Sorry! This coupon code is no longer active."',
          status: "error",
        };
      case "act20":
        return {
          message: 'Yay! Coupon applied successfully.',
          status: "sucess",
        };

      default:
        return { message: "no longer exists", status: "error" };
    }
  };
  const couponObj = couponValidation(code);
  return res.send(couponObj);
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
