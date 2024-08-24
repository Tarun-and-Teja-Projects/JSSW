import { Flex,Text } from "@mantine/core"
interface Props{
    title:string
}
const NoDataFound:React.FC<Props>=({title})=>{
    return(
        
        <Flex justify={'center'}>
            <Text c={'red'}>No {title} Data Found</Text>
        </Flex>
    )
}
export default NoDataFound