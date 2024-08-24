import { Flex, Table } from "@mantine/core";
import { useGetSocialEventsQuery } from "../../api/socialApiHandler";
import CustomButton from "../Components/ui/CustomButton/CustomButton";
import { useDisclosure } from "@mantine/hooks";
import CustomModal from "../Components/ui/CustomModal/CustomModal";
import CustomTitle from "../Components/ui/CustomTitle/CustomTitle";
import CustomContainer from "../Components/ui/CustomContainer/CustomContainer";
import CustomLoader from "../Components/CustomLoader";
import ImageViewer from "../Components/ImageViewer";
import CustomIcon from "../Components/ui/CustomIcons/CustomIcon";
import NoDataFound from "../Components/NoDataFound";
import AddSocialEvents from "./addEvents";


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
         
            <CustomTitle title={"Social Events"}/>
        <CustomContainer>
           
           {!socialEvents?.data ? (
<>
<CustomLoader/>
</>
           ):(
            <>
            <Flex justify={'right'}>
                <CustomButton variant={"add"} onClick={AddEvents}/>
            </Flex>
           {socialEvents?.data?.result.length>0 ? (
            <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>#</Table.Th>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Designation</Table.Th>
                            <Table.Th>Image</Table.Th>
                            <Table.Th>Action</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {socialEvents?.data?.result?.map((x:any,index:number)=>{
                            return(
                                <Table.Tr key={index}>
                                    <Table.Td>{index+1}</Table.Td>
                                    <Table.Td>{x.name}</Table.Td>
                                    <Table.Td>{x.description}</Table.Td>
                                    <Table.Td><ImageViewer ImageLink={x.image}/></Table.Td>
                                    <Table.Td>
                                        <CustomIcon label={"Edit"} type={"edit"} />&nbsp;&nbsp;
                                        <CustomIcon label="Delete" type="delete" />
                                    </Table.Td>
                                </Table.Tr>
                            )
                        })}
                    </Table.Tbody>
                </Table>
           ):(
           <NoDataFound title={"Social Events"}/>
           )}
            
            </>
           )} 
           
        </CustomContainer>
            <CustomModal opened={opened} close={close} title={""} children={<AddSocialEvents/>}/>

           
        </>
    )
}
export default Events;