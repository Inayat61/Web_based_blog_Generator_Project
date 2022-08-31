const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.post("/topic", (req, res) => {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  console.log("Connected to React");
  // const c = req.body.topic;
  // console.log(c);
  let heading = "";
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    heading = JSON.parse(data).topic;
    console.log(heading);

    (async () => {
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `Generate blog topics on:\n \n${heading}`,
        temperature: 0.7,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log(response.data["choices"]);
      res.send(response.data["choices"][0]["text"]);

      // res.send(response);
    })();
  });
  // res.send("no value");
  // res.redirect("http://localhost:3000/");
});

////////////////// Title Generation///////////////////////////

app.post("/title", (req, res) => {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  console.log("Connected to React");
  // const c = req.body.topic;
  // console.log(c);
  let heading = "";
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    heading = JSON.parse(data).topic;
    console.log(heading);

    (async () => {
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `Expand the blog title in to high level blog sections:\n\n- Introduction: ${heading}`,
        temperature: 0.6,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log(response.data["choices"]);
      res.send(response.data["choices"][0]["text"]);
    })();
  });
});

////////////////// BLog Generation///////////////////////////

app.post("/blog", (req, res) => {
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  console.log("Connected to React");
  // const c = req.body.topic;
  // console.log(c);
  let heading = "";
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    heading = JSON.parse(data).topic;
    console.log(heading);

    (async () => {
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `Expand the blog section in to a detailed professional , witty and clever explanation.\n\n ${heading}`,
        temperature: 0.7,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log(response.data["choices"]);
      res.send(response.data["choices"][0]["text"]);
    })();
  });
});

const PORT = 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
