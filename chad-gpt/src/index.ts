import { json } from "body-parser";
import express from "express";
import OpenAI from "openai";

const app = express();
const port = 3000;

app.use(json());

const openai = new OpenAI({});

app.post("/", async (req, res) => {
  const prompt = req.body.prompt;
  console.log(prompt);
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  };
  const completion: OpenAI.Chat.ChatCompletion =
    await openai.chat.completions.create(params);

  for (const choice of completion.choices) {
    console.log("[ODOD] ", choice.message.content);
  }

  res.send(completion.choices[0].message.content);
});

app.listen(port, async () => {
  console.log(`Express is listening at http://localhost:${port}`);

  const startupContext = process.env.STARTUP_CONTEXT 
  if (!startupContext) {
    return
  }

  // learn context
  console.log("Startup Context:\n\n", startupContext)
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: "user", content:  startupContext }],
    model: "gpt-3.5-turbo",
  };
  const completion: OpenAI.Chat.ChatCompletion =
    await openai.chat.completions.create(params);

  for (const choice of completion.choices) {
    console.log("Startup Context Response", choice.message.content);
  }

});
