import {  rem } from "@mantine/core";
import { useAddSocialEventsMutation, useGetSocialEventsQuery } from "../../api/socialApiHandler";
import { useDisclosure } from "@mantine/hooks";
import CustomModal from "../Components/ui/CustomModal/CustomModal";
import CustomTitle from "../Components/ui/CustomTitle/CustomTitle";
import CustomLoader from "../Components/CustomLoader";
import AddSocialEvents from "./addEvents";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import {  MRT_ColumnDef } from "mantine-react-table";
import CustomMantineReactTable from "../Components/CustomMantineReactTable";


const Events =()=>{
    const organizationId=sessionStorage.getItem('organizationId');
   
    const[pagination,setPagination]=useState({
        pageIndex:0,
        pageSize:5
    })
    const{data:socialEvents,refetch}=useGetSocialEventsQuery({
        id:organizationId,
        pageNumber:pagination.pageIndex+1,
        pageSize:pagination.pageSize
    });
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
    const columnsData: MRT_ColumnDef<any>[] = [
        {
            accessorKey: 'name',
            header: 'Name',
        },
        {
            accessorKey:'description',
            header:'Description'
        },
       
    ];
    return(
        <>
         
            <CustomTitle title={"Social Events"}/><br/>

           {!socialEvents?.data ? (
<>
<CustomLoader/>
</>
           ):(
            <>
            <CustomMantineReactTable data={socialEvents?.data?.result || []} columns={columnsData} onAddButtonClick={()=>{AddEvents()}} rowCount={socialEvents?.data?.totalRecords} onEditClick={function (): void {
                            throw new Error("Function not implemented.");
                        } } onDeleteClick={function (): void {
                            throw new Error("Function not implemented.");
                        } } pagination={pagination} onPaginationChange={setPagination}/> 
            </>
           )} 
           
            <CustomModal opened={opened} close={close} title={""} children={<AddSocialEvents onSubmit={(formData: any)=>{
               handleSubmit(formData)
            } }/>}/>

           
        </>
    )
}
export default Events;