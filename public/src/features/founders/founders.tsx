import {  Flex,  rem,  Table,Text } from "@mantine/core"
import CustomTitle from "../Components/ui/CustomTitle/CustomTitle"
import CustomContainer from "../Components/ui/CustomContainer/CustomContainer"
import CustomButton from "../Components/ui/CustomButton/CustomButton"
import CustomModal from "../Components/ui/CustomModal/CustomModal"
import { useDisclosure } from "@mantine/hooks"

import MissionForm from "./addFounders"
import { notifications } from "@mantine/notifications"
import { useAddFoundersMutation, useGetFounderByOrgIdQuery } from "../../api/organizationApiHandle"
import { IconCheck } from "@tabler/icons-react"
import ImageViewer from "../Components/ImageViewer"
import CustomIcon from "../Components/ui/CustomIcons/CustomIcon"

const Founders=()=>{
    const[opened,{open:OpenModal,close:CloseModal}]=useDisclosure(false);
    const AddFounder=()=>{
        OpenModal();
    }
    const CloseFounder=()=>{
        CloseModal();
    }
    const organizationId=sessionStorage.getItem('organizationId');
    const {data:FoundersData,refetch}=useGetFounderByOrgIdQuery({
        id:organizationId
    })
    console.log(FoundersData)
    const[addOrganization]=useAddFoundersMutation();
    const handleSubmit=async(formData:any)=>{
        console.log(formData)
        const id = notifications.show({
            loading: true,
            title: 'Add Founders',
            message: 'Please wait, while we save the founders details',
            autoClose: false,
            withCloseButton: false,
          })
          const obj={
            "name":formData.name,
            "designation":formData.designation,
            "image":formData.image,
            "orgId":organizationId
          }
          const Organizations=await addOrganization(obj).unwrap();
          if(Organizations){
            refetch();
            CloseFounder();
            notifications.update({
                id,
                color: 'teal',
                title: 'Add Founders',
                message: 'Founders details saved Successfully.',
                icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
                loading: false,
                autoClose: 4000,
              });
          }
    }
    
    return(
        <>
        <CustomTitle title={"Founders"}/>
        <CustomContainer>
            <Flex justify={'right'}>
                <CustomButton variant={"add"} onClick={AddFounder}/>
            </Flex>
           {FoundersData?.data?.result.length>0 ? (
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
                        {FoundersData?.data?.result?.map((x:any,index:number)=>{
                            return(
                                <Table.Tr key={index}>
                                    <Table.Td>{index+1}</Table.Td>
                                    <Table.Td>{x.name}</Table.Td>
                                    <Table.Td>{x.Designation}</Table.Td>
                                    <Table.Td><ImageViewer ImageLink={x.Image}/></Table.Td>
                                    <Table.Td>
                                        <CustomIcon label={"Edit"} type={"edit"}/>&nbsp;&nbsp;
                                        <CustomIcon label="Delete" type="delete"/>
                                    </Table.Td>
                                </Table.Tr>
                            )
                        })}
                    </Table.Tbody>
                </Table>
           ):(
            <Flex justify={'center'}>
                <Text c={'red'}>No Data Found</Text>
            </Flex>
           )}
            
        </CustomContainer>
        <CustomModal opened={opened} close={CloseFounder} title={"Add Founders"} >
           <MissionForm OnSubmit={(formData: any)=>{
                    handleSubmit(formData)
                } } CloseFounder={CloseFounder}/>
        </CustomModal>
        </>
    )
}
export default Founders