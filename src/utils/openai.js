// Kind of like authorization

import OpenAI from "openai";
import { GPT_SECRET_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: GPT_SECRET_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
