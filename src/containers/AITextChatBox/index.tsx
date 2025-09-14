// components/AIChatBox.tsx
"use client";
import "highlight.js/styles/github-dark.css";
import { useState } from "react";

import AttachButton from "./components/AttachButton";
import MessageList from "./components/MessageList";
import SendButton from "./components/SendButton";
import StopButton from "./components/StopButton";
import WyswigTextEditor from "./components/WyswigTextEditor";
import { useAIConversation } from "./hooks/useAIConversation";

const EMPTY_MESSAGE = "Ask anything about blockchain, cryptocurrency";


export default function AIChatBox() {
  const { messages, sendUserHtml, streaming, stop, error, loading } = useAIConversation();
  const [text, setText] = useState<string>("");

  const onSubmit = async () => {
    if (!text.trim()) return;
    setText("");
    await sendUserHtml(text);
  };

  return (
    <div className=" flex flex-col flex-1 min-h-0 p-1 rounded-lg">
      <div className="flex-1 min-h-0 overflow-y-auto mb-[4px] bg-[rgba(255,255,255,0.1)] backdrop-blur-md p-5 rounded-[20px] text-white md:bg-white md:text-gray-800">
        <MessageList
          messages={messages}
          emptyMessage={EMPTY_MESSAGE}
          onEditUserMessage={(html: string) => setText(html)}
          loading={loading}
        />
      </div>
      <div className="shrink-0 flex flex-col bg-white h-[192px]">
        <div className="flex-1">
          <WyswigTextEditor
            text={text}
            onTextChange={setText}
            placeholder="Ask me anything..."
          />
        </div>
        <div className="pt-0 pr-3 pb-3 pl-3 flex items-center justify-between">
          <AttachButton />
          <div className="flex items-center gap-2">
            {streaming ? (
              <StopButton onClick={stop} />
            ) : (
              <SendButton text={text} onSubmit={onSubmit} />
            )}
          </div>
          {error && <span className="text-red-500">{error.message}</span>}
        </div>
      </div>
    </div>
  );
}
