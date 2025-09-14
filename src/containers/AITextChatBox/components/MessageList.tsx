import WavyText from "../../../components/WavyText";
import AssistantMessage from "./AssistantMessage";
import { UserMessage } from "./UserMessage";

type ChatMessage = { role: "user" | "assistant"; content: string };

const getSearchingText = (lastUserMessage: string) => {
    console.log(lastUserMessage);
    return `Thinking`
    // showing user input always might not be suitable for all cases
    // return `Searching for ${lastUserMessage}` 
}

type MessageListProps = {
  messages: ChatMessage[];
  emptyMessage: string;
  onEditUserMessage: (html: string) => void;
  loading?: boolean;
};

export default function MessageList({
  messages,
  emptyMessage,
  onEditUserMessage,
  loading = false,
}: MessageListProps) {
  if (messages.length === 0) {
    return (
      <div className="flex h-full items-center justify-center font-[Inter] font-normal text-[14px] leading-[140%] tracking-normal text-center">
        {emptyMessage}
      </div>
    );
  }
  const lastUserMessage = messages.find(m => m.role == "user")
  return (
    <>
      {messages.map((m, i) =>
        m.role === "user" ? (
          <UserMessage
            key={i}
            messageHtml={m.content}
            onEditClick={() => onEditUserMessage(m.content)}
            initial="P"
          />
        ) : (
          <AssistantMessage key={i} text={m.content} />
        )
      )}

      {loading && lastUserMessage && (
        <AssistantMessage text={<WavyText text={getSearchingText(lastUserMessage.content)} />} />
      )}
    </>
  );
}
