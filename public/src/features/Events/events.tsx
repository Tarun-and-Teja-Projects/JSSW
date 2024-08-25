import { Flex, rem, Table } from "@mantine/core";
import { useAddSocialEventsMutation, useGetSocialEventsQuery } from "../../api/socialApiHandler";
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
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import CustomPagination from "../Components/ui/CustomPagination";
import { useState } from "react";


const Events =()=>{
    const organizationId=sessionStorage.getItem('organizationId');
    const[currentPage,setCurrentPage]=useState(1);
    const handleChange=(page:number)=>{
        setCurrentPage(page)
    }
    const{data:socialEvents,refetch}=useGetSocialEventsQuery({
        id:organizationId,
        pageNumber:currentPage,
        pageSize:5
    });
    console.log(socialEvents)
    const[opened,{open,close}]=useDisclosure(false);
    const AddEvents=()=>{
        open();
    }
const[addSocial]=useAddSocialEventsMutation();
    const handleSubmit=async(formData:any)=>{
        const id = notifications.show({
            loading: true,
            title: 'Add Social Events',
            message: 'Please wait, while we save the social events details',
            autoClose: false,
            withCloseButton: false,
          })
        const obj={
            ...formData,
            orgId:organizationId
        }
        const Social=await addSocial(obj).unwrap();
        if(Social){
            await refetch();
            await close();
            notifications.update({
                id,
                color: 'teal',
                title: 'Add Social Events',
                message: 'Social Events details saved Successfully.',
                icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
                loading: false,
                autoClose: 4000,
              });
        }
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
            <><Table>
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
                                        {socialEvents?.data?.result?.map((x: any, index: number) => {
                                            return (
                                                <Table.Tr key={index}>
                                                    <Table.Td>{index + 1}</Table.Td>
                                                    <Table.Td>{x.name}</Table.Td>
                                                    <Table.Td>{x.description}</Table.Td>
                                                    <Table.Td><ImageViewer ImageLink={x.image} /></Table.Td>
                                                    <Table.Td>
                                                        <CustomIcon label={"Edit"} type={"edit"} />&nbsp;&nbsp;
                                                        <CustomIcon label="Delete" type="delete" />
                                                    </Table.Td>
                                                </Table.Tr>
                                            );
                                        })}
                                    </Table.Tbody>
                                </Table>
                                <CustomPagination totalPages={socialEvents?.data?.totalPages} currentPage={currentPage} onChange={(value: number) => {
                                    handleChange(value);
                                } } /></>

           ):(
           <NoDataFound title={"Social Events"}/>
           )}
            
            </>
           )} 
           
        </CustomContainer>
            <CustomModal opened={opened} close={close} title={""} children={<AddSocialEvents onSubmit={(formData: any)=>{
               handleSubmit(formData)
            } }/>}/>

           
        </>
    )
}
export default Events;