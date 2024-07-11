import {  Flex, rem, Table } from "@mantine/core";
import CustomContainer from "./Components/ui/CustomContainer/CustomContainer";
import CustomCard from "./Components/ui/CustomCard/CustomCard";
import ImageViewer from "./Components/ImageViewer";
import CustomIcon from "./Components/ui/CustomIcons/CustomIcon";
import CustomButton from "./Components/ui/CustomButton/CustomButton";
import CustomModal from "./Components/ui/CustomModal/CustomModal";
import { useDisclosure } from "@mantine/hooks";
import MissionForm from "./missionForm";
import { useAddMissionMutation, useGetMissionQuery } from "../api/missionApiHandler";
import { notifications } from '@mantine/notifications';
import { IconCheck } from "@tabler/icons-react";

const Mission=()=>{
    const[opened,{open,close}]=useDisclosure(false);
    const AddModal=()=>{
        open();
    }
    const{data:GetMission,refetch}=useGetMissionQuery({});
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
    return(
       <CustomContainer>
        <CustomCard>
            <Flex justify={'right'}>
                <CustomButton variant={"add"} onClick={AddModal}/>
            </Flex>
            <Table highlightOnHover>
               <Table.Thead>
                <Table.Tr>
                <Table.Th>#</Table.Th>
                <Table.Th>Name</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Images</Table.Th>
                <Table.Th>Action</Table.Th>
                </Table.Tr>
               </Table.Thead>
               <Table.Tbody>
                {GetMission?.map((x:any,index:number)=>{

                    return(
                        <Table.Tr key={index}>
                            <Table.Td>{index+1}</Table.Td>
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
            <CustomModal opened={opened} close={close} title={""} children={<MissionForm OnSubmit={(formData: any)=>{
                handleSubmit(formData)
            } }/>}/>
        </CustomCard>
       </CustomContainer>
    )
}
export default Mission;