import classNames from "classnames";
import React from "react";
import StopButtonSvg from "../../../assets/StopButton.svg?react";

type StopButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>
};

export default function StopButton({  }: StopButtonProps) {
  return (<span className={classNames("text-blue-600 w-[44px] h-[38px] mb-[-10px] flex items-center justify-center cursor-pointer")}>
          <StopButtonSvg />
    </span>

  );
}
