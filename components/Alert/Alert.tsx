import React , { FC } from "react"
import { BsExclamationCircle, BsInfoCircle, BsCheckCircle, BsExclamationDiamond, BsExclamationLg} from "react-icons/bs" 

export enum AlertType {
    Default = "",
    Info = "info",
    Success = "success",
    Warning = "warning",
    Error = "error"
}

interface IAlertProps {
   children: any,
   type: AlertType 
}

export const Alert: FC<IAlertProps> = ({children, type }) => {

    let Icon:JSX.Element;
    let classname:string = "alert shadow-lg";

    switch (type) {
      case AlertType.Info:
        Icon = <BsInfoCircle />;
        classname += "alert-info"
        break;
      case AlertType.Error:
        Icon = <BsExclamationDiamond />
        classname += "alert-error"
        break;
      case AlertType.Success:
        Icon = <BsCheckCircle />;
        classname += "alert-success"
        break;
      case AlertType.Warning:
        Icon = <BsExclamationLg />;
        classname += "alert-warning"
        break;
    default:
        Icon=<BsExclamationCircle />;
    }

    return (
      <>
        <div className="alert shadow-lg">
          <div>
            { Icon }
            { children }
          </div>
        </div>
      </>
    );
}