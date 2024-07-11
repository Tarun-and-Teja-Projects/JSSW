import { Card } from "@mantine/core"
import { ReactNode } from "react";
interface Props{
    children: ReactNode;
}
const CustomCard:React.FC<Props>=({children})=>{
    return(
        <Card>
            {children}
        </Card>
    )
}
export default CustomCard