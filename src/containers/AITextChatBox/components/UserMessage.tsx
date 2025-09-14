import type { UserMessageInputProps } from "./UserMessageInput";
import UserMessageInput from "./UserMessageInput";

type UserMessageProps = UserMessageInputProps & {
    initial: string;
}

export function UserMessage({ messageHtml, onEditClick, initial }: UserMessageProps) {
  return (
    <div className="flex items-start gap-2 mb-4 justify-end">
        <UserMessageInput messageHtml={messageHtml} onEditClick={onEditClick} />
        <div className="flex-shrink-0 w-[20px] h-[20px] rounded-[100px] bg-gradient-to-r
              shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
            from-[#1D4ED8] to-[#7C3AED] flex items-center justify-center text-white text-[10px] font-semibold border border-[rgba(255,255,255,0.5)]">
        {initial}
      </div>
    </div>
  );
}
