import { Tooltip } from "@mantine/core"
import { ReactNode } from "react";
interface props{
    label:string;
    children: ReactNode;
}
const CustomTooltip:React.FC<props>=({label,children})=>{
    return(
        <Tooltip label={label} arrowOffset={10} arrowSize={4} withArrow>
            {children}
        </Tooltip>
    )
}
export default CustomTooltip