import { IOrderType } from "../../../types";

interface EmailReturnType{
    html: string,
    text: string,
    subject: string
}

export function OrderReceivedEmail(order: IOrderType ,amount: number, email: string, name: string): EmailReturnType {
    const formattedHtml = <>
        
    </>

    const html = '"'+formattedHtml+'"'

    const text = ""

    const subject = "Order Received!!"

    return {
        html,
        text,
        subject
    }
}