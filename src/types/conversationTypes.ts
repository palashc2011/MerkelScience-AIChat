// types/chat.ts
export type Role = "user" | "assistant" ;

export type ChatMessage = {
  id: string;
  role: Role;
  content: string;
  createdAt: number;
};

export type Conversation = ChatMessage[];
