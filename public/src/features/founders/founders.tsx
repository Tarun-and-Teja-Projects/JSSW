import {  Flex,  rem,  Table } from "@mantine/core"
import CustomTitle from "../Components/ui/CustomTitle/CustomTitle"
import CustomContainer from "../Components/ui/CustomContainer/CustomContainer"
import CustomButton from "../Components/ui/CustomButton/CustomButton"
import CustomModal from "../Components/ui/CustomModal/CustomModal"
import { useDisclosure } from "@mantine/hooks"

import MissionForm from "./addFounders"
import { notifications } from "@mantine/notifications"
import { useAddFoundersMutation, useGetFounderByOrgIdQuery, useUpdateFoundersMutation } from "../../api/organizationApiHandle"
import { IconCheck } from "@tabler/icons-react"
import ImageViewer from "../Components/ImageViewer"
import CustomIcon from "../Components/ui/CustomIcons/CustomIcon"
import CustomLoader from "../Components/CustomLoader"
import { useState } from "react"
import NoDataFound from "../Components/NoDataFound"

const Founders=()=>{
    const[opened,{open:OpenModal,close:CloseModal}]=useDisclosure(false);
    const[updateData,setUpdateData]=useState<any>(null)

    const AddFounder=()=>{
        OpenModal();
        setUpdateData(null)
    }
    const CloseFounder=()=>{
        CloseModal();
        setUpdateData(null);
    }
    const organizationId=sessionStorage.getItem('organizationId');
    const {data:FoundersData,refetch}=useGetFounderByOrgIdQuery({
        id:organizationId
    })
    const[addOrganization]=useAddFoundersMutation();
    const [updateFounder]=useUpdateFoundersMutation();
    const handleSubmit=async(formData:any)=>{
        if(updateData?.id){
            const id = notifications.show({
                loading: true,
                title: 'Update Founders',
                message: 'Please wait, while we update the founders details',
                autoClose: false,
                withCloseButton: false,
              })
              const obj={
                "id":updateData?.id,
                "name":formData.name,
                "designation":formData.designation,
              }
              const Organizations=await updateFounder(obj).unwrap();
              if(Organizations){
                refetch();
                CloseFounder();
                notifications.update({
                    id,
                    color: 'teal',
                    title: 'Update Founders',
                    message: 'Founders details updated Successfully.',
                    icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
                    loading: false,
                    autoClose: 4000,
                  });
              }
        }else{
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
       
    }
    const handleeditclick=(data:any)=>{
        console.log(data)
        setUpdateData(data);
        OpenModal();
      
    }
    
    return(
        <>
        <CustomTitle title={"Founders"}/>
        <CustomContainer>
           
           {!FoundersData?.data ? (
<>
<CustomLoader/>
</>
           ):(
            <>
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
                                        <CustomIcon label={"Edit"} type={"edit"} onClick={()=>handleeditclick(x)}/>&nbsp;&nbsp;
                                        <CustomIcon label="Delete" type="delete"/>
                                    </Table.Td>
                                </Table.Tr>
                            )
                        })}
                    </Table.Tbody>
                </Table>
           ):(
           <NoDataFound/>
           )}
            
            </>
           )} 
           
        </CustomContainer>
        <CustomModal opened={opened} close={CloseFounder} title={"Add Founders"} >
           <MissionForm OnSubmit={(formData: any) => {
                    handleSubmit(formData)
                } } CloseFounder={CloseFounder} UpdateFounder={updateData}/>
        </CustomModal>
        </>
    )
}
export default Founders