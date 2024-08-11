import { useState } from "react";
import { useGetMissionQuery } from "../api/missionApiHandler";
import { useDisclosure } from "@mantine/hooks";
import CustomContainer from "./Components/ui/CustomContainer/CustomContainer";
import CustomCard from "./Components/ui/CustomCard/CustomCard";
import { Flex, Table } from "@mantine/core";
import CustomButton from "./Components/ui/CustomButton/CustomButton";
import ImageViewer from "./Components/ImageViewer";
import CustomIcon from "./Components/ui/CustomIcons/CustomIcon";
import CustomModal from "./Components/ui/CustomModal/CustomModal";
import CustomPagination from "./Components/ui/CustomPagination";
import ContactForm from "./contactForm";

const Contact=()=>{
    const[opened,{open,close}]=useDisclosure(false);
    const AddModal=()=>{
        open();
    }
    const[currentPage,setCurrentPage]=useState(1);
    const handleChange=(page:number)=>{
        setCurrentPage(page)
    }
    const{data:GetMission}=useGetMissionQuery({
        pageNumber:currentPage,
        pageSize:5
    });
    const handleeditclick=(data:any)=>{
        console.log(data)
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
                <Table.Th>Email</Table.Th>
                <Table.Th>Phone Number</Table.Th>
                <Table.Th>Action</Table.Th>
                </Table.Tr>
               </Table.Thead>
               <Table.Tbody>
                {GetMission?.data?.map((x:any,index:number)=>{

                    return(
                        <Table.Tr key={index}>
                            <Table.Td>{x.title}</Table.Td>
                            <Table.Td>
                                <ImageViewer ImageLink={x.Image}/>
                            </Table.Td>
                            <Table.Td>
                                <CustomIcon label={"Edit"} type={"edit"} onClick={()=>{handleeditclick(x)}}/>
                                <CustomIcon label={"Delete"} type={"delete"}/>
                            </Table.Td>
                        </Table.Tr>
                    )
                })}
               </Table.Tbody>
            </Table>
            <CustomPagination totalPages={GetMission?.totalPages} currentPage={currentPage} onChange={(value: number)=>{
                handleChange(value)
            } }/>
            <CustomModal opened={opened} close={close} title={""} children={<ContactForm onSubmit={function (): void {
                    throw new Error("Function not implemented.");
                } }/>}/>
        </CustomCard>
       </CustomContainer>
    )
}
export default Contact