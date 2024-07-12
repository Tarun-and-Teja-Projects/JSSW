import {  Flex, rem, Table } from "@mantine/core";
import CustomContainer from "../Components/ui/CustomContainer/CustomContainer";
import CustomCard from "../Components/ui/CustomCard/CustomCard";
import ImageViewer from "../Components/ImageViewer";
import CustomIcon from "../Components/ui/CustomIcons/CustomIcon";
import CustomButton from "../Components/ui/CustomButton/CustomButton";
import CustomModal from "../Components/ui/CustomModal/CustomModal";
import { useDisclosure } from "@mantine/hooks";
import MissionForm from "./missionForm";
import { useAddMissionMutation, useGetMissionQuery } from "../../api/missionApiHandler";
import { notifications } from '@mantine/notifications';
import { IconCheck } from "@tabler/icons-react";
import CustomPagination from "../Components/ui/CustomPagination";
import { useState } from "react";

const Mission=()=>{
    const[opened,{open,close}]=useDisclosure(false);
    const AddModal=()=>{
        open();
    }
    const[currentPage,setCurrentPage]=useState(1);
    const handleChange=(page:number)=>{
        setCurrentPage(page)
    }
    const{data:GetMission,refetch}=useGetMissionQuery({
        pageNumber:currentPage,
        pageSize:5
    });
    console.log(GetMission)
    const[addMissions]=useAddMissionMutation();
    const handleSubmit=async(formData:any)=>{
        const id = notifications.show({
            loading: true,
            title: 'Add Mission',
            message: 'Please wait, while save the misssion details',
            autoClose: false,
            withCloseButton: false,
          });
        const addMission=await addMissions(formData).unwrap();
        if(addMission){
            refetch();
            close();
            notifications.update({
                id,
                color: 'teal',
                title: 'Add Mission',
                message: 'Mission data saved Successfully',
                icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
                loading: false,
                autoClose: 4000,
              });
    
        }
    }
    console.log(GetMission)
    return(
       <CustomContainer>
        <CustomCard>
            <Flex justify={'right'}>
                <CustomButton variant={"add"} onClick={AddModal}/>
            </Flex>
            <Table highlightOnHover>
               <Table.Thead>
                <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Images</Table.Th>
                <Table.Th>Action</Table.Th>
                </Table.Tr>
               </Table.Thead>
               <Table.Tbody>
                {GetMission?.data?.map((x:any,index:number)=>{

                    return(
                        <Table.Tr key={index}>
                            <Table.Td>{x.title}</Table.Td>
                            <Table.Td>{x.description}</Table.Td>
                            <Table.Td>
                                <ImageViewer ImageLink={x.Image}/>
                            </Table.Td>
                            <Table.Td>
                                <CustomIcon label={"Edit"} type={"edit"}/>
                                <CustomIcon label={"Delete"} type={"delete"}/>
                            </Table.Td>
                        </Table.Tr>
                    )
                })}
               </Table.Tbody>
            </Table>
          {GetMission?.totalCount>5 && (<CustomPagination totalPages={GetMission?.totalPages} currentPage={currentPage} onChange={(value: number)=>{
                handleChange(value)
            } }/>)}  
          
            <CustomModal opened={opened} close={close} title={""} children={<MissionForm OnSubmit={(formData: any)=>{
                handleSubmit(formData)
            } }/>}/>
        </CustomCard>
       </CustomContainer>
    )
}
export default Mission;