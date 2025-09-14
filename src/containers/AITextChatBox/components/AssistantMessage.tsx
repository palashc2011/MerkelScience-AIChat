import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { ReactNode } from "react";

type AiMessageProps = {
    text: string | ReactNode;
};


export default function AssistantMessage({ text }: AiMessageProps) {
    return (
        <div className="flex items-start gap-3 mb-4 justify-start">

            <div className="flex-shrink-0 w-[20px] h-[20px] rounded-[100px] bg-gradient-to-r from-[#1D4ED8] to-[#7C3AED] flex items-center justify-center text-white text-[10px] font-semibold border border-[rgba(255,255,255,1)]">
                T
            </div>
            <div className="pt-[10px] text-left max-w-full overflow-x-hidden break-words whitespace-pre-wrap assistant-messages [&_p]:animate-fadeIn">
                {(typeof text == "string") ? (<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                    {text}
                </ReactMarkdown>) : <div className="text-[14px] mt-[-10px]">{text}</div>}
            </div>
        </div>
    );
}
