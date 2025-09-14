import classNames from "classnames";
import type { MouseEventHandler } from "react";
import SendIcon from "../../../assets/Button.svg?react";

type SendButtonProps = {
    text: string;
    onSubmit: MouseEventHandler<HTMLButtonElement>
}
const SendButton = ({ text, onSubmit }: SendButtonProps) => {
    return <span className={classNames({
        "text-blue-400": !text.trim(),
        "text-blue-600": !!text.trim(),
    }, "w-[44px] h-[38px] mb-[-10px] flex items-center justify-center cursor-pointer")}>
        <SendIcon onClick={(e: any) => onSubmit(e)}/>
    </span>
}
export default SendButton;