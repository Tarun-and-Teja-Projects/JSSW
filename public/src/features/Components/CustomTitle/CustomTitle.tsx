import { Title } from "@mantine/core"
interface props{
    title:string;

}
const CustomTitle:React.FC<props>=({title})=>{
    return(
        <Title order={4}>{title}</Title>
    )
}
export default CustomTitle