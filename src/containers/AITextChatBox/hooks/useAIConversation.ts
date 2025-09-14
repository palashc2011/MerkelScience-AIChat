// hooks/useAIConversation.ts
import { useRef, useState, useCallback } from "react";
import { useConversation } from "./useConversation";
import type { Conversation, ChatMessage } from "../../../types/conversationTypes";
import { streamChatCompletion } from "../../../api/openAIChatCompletion";

export function useAIConversation() {
  const { messages, add, appendTo } = useConversation([]);
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const stop = useCallback(() => controllerRef.current?.abort(), []);

  const sendUserHtml = useCallback(
    async (userHtml: string) => {
      setLoading(true)
      setError(null);
      const user = add({ role: "user", content: userHtml });

      let assistant: ChatMessage;

      const toOpenAI = (c: Conversation) =>
        c.map((m: ChatMessage) => ({
          role: m.role,
          content: m.content,
        }));

      const controller = new AbortController();
      controllerRef.current = controller;

      setStreaming(true);
      try {        
        await streamChatCompletion(toOpenAI(messages.concat([user])), (delta) => {
          if (delta) {
            setLoading(false);
            if(!assistant) {
              assistant = add({ role: "assistant", content: "" });
            }
            appendTo(assistant.id, delta);
          }
        });
      } catch (e: any) {
        if (e?.name !== "AbortError") {
          setError(e instanceof Error ? e : new Error(String(e)));
        }
      } finally {
        setStreaming(false);
        controllerRef.current = null;
      }
    },
    [add, appendTo, messages]
  );

  return { messages, sendUserHtml, streaming, stop, error, loading };
}
