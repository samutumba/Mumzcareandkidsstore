import React from "react";


interface IModalProps {
    width?: string,
    close? : Boolean,
    children: JSX.Element,
    name: string
}

export const Modal: React.FC<IModalProps> = ({width,children, close, name}) => {
    
    const modalName = `modal-${name}`

    if(width==undefined){
        var cname = "modal-box";
    }else{
        var cname = `modal-box ${width} `;
    }

    return ( <React.Fragment>
        <input type="checkbox" id={modalName} className="modal-toggle"/>
        <div className="modal">
            <div className={cname}> 
                {children} 
            </div>
        </div>
    </React.Fragment>
    );
};