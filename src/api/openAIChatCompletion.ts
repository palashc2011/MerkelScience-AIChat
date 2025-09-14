import OpenAI from "openai";

let openai: OpenAI;

export function initOpenAI() {
  let input = prompt("Please enter OPEN AI api key");
  openai = new OpenAI({
    apiKey: input || "",
    dangerouslyAllowBrowser: true
  });
} 
type OpenConversationMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

const firstMessage: OpenAI.Chat.Completions.ChatCompletionSystemMessageParam = {
  role: "system",
  content:
    "You are a helpful assistant. Always respond in a structured way, using clear sections or steps when relevant. Separate each paragraph with a horizontal rule (`---`) instead of blank lines. Keep paragraphs concise and logically grouped. the headings should be bold"
};


export async function streamChatCompletion(previousMessages: OpenConversationMessage[], onIncomingStream: (chunk: string) => void) {
  try {
    if(previousMessages.length === 0) {
      throw new Error("No previous messages provided");
    }
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [firstMessage, ...previousMessages],
      stream: true,
    });

    console.log("Streaming response:");
    for await (const chunk of stream) {
        onIncomingStream(chunk.choices[0]?.delta?.content || "");
    }
    console.log("\nStream finished.");
  } catch (error) {
    console.error("Error during streaming chat completion:", error);
  }
}

// streamChatCompletion();
