import PencilSimple from "../../../assets/PencilSimple.svg?react";

export type UserMessageInputProps = {
    messageHtml: string;
    onEditClick: () => void    
}

const UserMessageInput = ({
    messageHtml,
    onEditClick
}: UserMessageInputProps) => {
    return <div className="relative bg-blue-50 text-blue-800 rounded-[20px] rounded-tr-none p-[8px] text-left w-[70%] animate-fadeIn">
    <div className="mb-[8px] font-normal italic text-[11px] leading-[140%] tracking-normal">
      <div dangerouslySetInnerHTML={{ __html: messageHtml }} />
    </div>
    <div className="static bottom-[15px] left-[20px] w-6 h-6 text-blue-800">
      <PencilSimple
        onClick={() => onEditClick()}
        className="w-full h-full cursor-pointer"
        aria-hidden="true"
      />
    </div>
  </div>  
  

}

export default UserMessageInput;