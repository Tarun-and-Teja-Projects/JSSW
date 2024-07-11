import { Modal } from "@mantine/core"
import { ReactNode } from "react";
interface Props{
    opened:boolean;
    close:()=>void;
    title:string;
    children:ReactNode
}
const CustomModal:React.FC<Props>=({opened,close,title,children})=>{
    return(
        <Modal opened={opened} onClose={close} title={title} centered size={'xl'}>
            {children}
            </Modal>
    )
}
export default CustomModal