import classNames from "classnames";
import type { ReactNode } from "react";

type WhiteButtonWrapperProps = {
    children: ReactNode,
    className?: string;
}
const WhiteButtonWrapper : React.FC<WhiteButtonWrapperProps> = ({children, className}) => {
    return <div className={classNames("w-12 h-12 radius-[8px] border border-gray-200 shadow-[0_1px_2px_0_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.06)] rounded-lg flex items-center justify-center bg-white", className)}>
            {children}
        </div>
}
export default WhiteButtonWrapper;