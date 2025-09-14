// hooks/useConversation.ts
import { useCallback, useState } from "react";
import type { ChatMessage, Conversation } from "../../../types/conversationTypes";

const uid = () => Math.random().toString(36).slice(2);

export function useConversation(initial: Conversation = []) {
  const [messages, setMessages] = useState<Conversation>(initial);

  const add = useCallback((m: Omit<ChatMessage, "id" | "createdAt">) => {
    const msg: ChatMessage = { ...m, id: uid(), createdAt: Date.now() };
    setMessages((prev) => [...prev, msg]);
    return msg;
  }, []);

  const appendTo = useCallback((id: string, more: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, content: m.content + more } : m))
    );
  }, []);

  return { messages, add, appendTo }
}
