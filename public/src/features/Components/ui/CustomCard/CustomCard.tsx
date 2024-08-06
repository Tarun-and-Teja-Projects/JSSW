import { Card } from "@mantine/core"
import { ReactNode } from "react";
interface Props{
    children: ReactNode;
    mt?:number
}
const CustomCard:React.FC<Props>=({children,mt=0})=>{
    return(
        <Card shadow="sm" radius={'md'}  mt={mt}>
            {children}
        </Card>
    )
}
export default CustomCard