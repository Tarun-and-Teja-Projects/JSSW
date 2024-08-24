import { Flex } from "@mantine/core";
import { useGetSocialEventsQuery } from "../../api/socialApiHandler";
import CustomButton from "../Components/ui/CustomButton/CustomButton";
import { useDisclosure } from "@mantine/hooks";
import CustomModal from "../Components/ui/CustomModal/CustomModal";

const Events =()=>{
    const organizationId=sessionStorage.getItem('organizationId');

    const{data:socialEvents}=useGetSocialEventsQuery({
        id:organizationId
    });
    console.log(socialEvents)
    const[opened,{open,close}]=useDisclosure(false);
    const AddEvents=()=>{
        open();
    }
    return(
        <>
          <Flex justify={'right'}>
                <CustomButton variant={"add"} onClick={AddEvents}/>
            </Flex>

            <CustomModal opened={opened} close={close} title={""} children={undefined}/>
           
        </>
    )
}
export default Events;