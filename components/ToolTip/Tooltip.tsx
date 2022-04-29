import React, { FC } from "react";

interface IToolTipProps {
    tip: string;
    direction?: string,
    cname?: string,
    children: any,
}

export const ToolTip: FC<IToolTipProps> = ({ children, tip, direction, cname }) => {
    switch (direction) {
        case "bottom"||"right"||"left":
            break;
        default:
            direction = undefined
    }
        
    

    let tooltipSide = (direction ? `tooltip-${direction}` : "")
  
    return (
    <div className={`tooltip ${cname} `+tooltipSide} data-tip={tip}>
        {children}
    </div>
  );
};
