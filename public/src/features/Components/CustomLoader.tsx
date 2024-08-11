import { Flex, Loader } from "@mantine/core";

const CustomLoader=()=>{
    return(
        <Flex justify={'center'}>
<Loader type="bars"/>
        </Flex>
    )
}
export default CustomLoader;