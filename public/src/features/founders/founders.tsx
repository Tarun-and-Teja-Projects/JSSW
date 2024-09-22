import {    rem,Text } from "@mantine/core"
import CustomTitle from "../Components/ui/CustomTitle/CustomTitle"
import CustomButton from "../Components/ui/CustomButton/CustomButton"
import CustomModal from "../Components/ui/CustomModal/CustomModal"
import { useDisclosure } from "@mantine/hooks"
import MissionForm from "./addFounders"
import { notifications } from "@mantine/notifications"
import { useAddFoundersMutation, useDeleteFoundersMutation, useGetFounderByOrgIdQuery, useUpdateFoundersMutation } from "../../api/organizationApiHandle"
import { IconCheck } from "@tabler/icons-react"
import ImageViewer from "../Components/ImageViewer"
import CustomIcon from "../Components/ui/CustomIcons/CustomIcon"
import CustomLoader from "../Components/CustomLoader"
import { useState } from "react"
import { modals } from "@mantine/modals"
import {
    MantineReactTable,
    MRT_ColumnDef,
  } from 'mantine-react-table';
  
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
    const[pagination,setPagination]=useState({
        pageIndex:0,
        pageSize:5
    })
    const {data:FoundersData,refetch}=useGetFounderByOrgIdQuery({
        id:organizationId,
        pageNumber:pagination.pageIndex+1,
        pageSize:pagination.pageSize
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
    const [deleteFounders]=useDeleteFoundersMutation();
    const handleConfirmDelete=async(data:any)=>{
        console.log(data)
        const id = notifications.show({
            loading: true,
            title: 'Delete Founders',
            message: 'Please wait, while we delete the founders details',
            autoClose: false,
            withCloseButton: false,
          })

          const DeletedFounders = await deleteFounders(data?.id).unwrap();
          if(DeletedFounders){
            refetch();
            notifications.update({
                id,
                color: 'teal',
                title: 'Deleted Founders',
                message: 'Founders details deleted Successfully.',
                icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
                loading: false,
                autoClose: 4000,
              });
          }

    }
    const handleDeleteClick=(data:any)=>{
        modals.openConfirmModal({
            title: 'Delete Founder',
            centered: true,
            children: (
              <Text size="sm">
               Are you sure want to delete founder {data?.name} ?
              </Text>
            ),
            confirmProps: { color: 'red' },
            labels: { confirm: 'Confirm', cancel: 'Cancel' },
            onCancel: () => console.log('Cancel'),
            onConfirm: () => handleConfirmDelete(data),
          });
        
    }
    const columnsData: MRT_ColumnDef<any>[] = [
        {
            accessorKey: 'name',
            header: 'Name',
        },
        {
            accessorKey:'Designation',
            header:'Designation'
        },
        {
            accessorKey:'Image',
            header:'Image',
            Cell: ({  row }) => (
                <ImageViewer ImageLink={row.original.Image}/>
            )
            }
    ];
    
    return(
        <>
        <CustomTitle title={"Founders"}/><br/>
           {!FoundersData?.data ? (
<>
<CustomLoader/>
</>
           ):(
            <>
            <MantineReactTable 
    data={FoundersData?.data?.result || []} 
    columns={columnsData} 
    enablePagination={true} 
    enableSorting={true} 
    enableRowActions={true}
    enableColumnPinning={true}
    manualPagination={true}
    rowCount={FoundersData?.data?.totalCount}
    renderRowActions={({ row }) => (  
        <>
            <CustomIcon 
                label="Edit" 
                type="edit" 
                onClick={() => handleeditclick(row.original)} 
            />
            &nbsp;&nbsp;
            <CustomIcon 
                label="Delete" 
                type="delete" 
                onClick={() => handleDeleteClick(row.original)} 
            />
        </>
    )}
    renderTopToolbarCustomActions={() => (
        <CustomButton variant="add" onClick={AddFounder} />
    )}
    initialState={{
        columnPinning: {
            left: ['mrt-row-expand', 'mrt-row-select'],
            right: ['mrt-row-actions'],
        },
        
    }}
    state={{ pagination }}
    onPaginationChange={setPagination}
/>

            
            </>
           )} 
           
        <CustomModal opened={opened} close={CloseFounder} title={"Add Founders"} >
           <MissionForm OnSubmit={(formData: any) => {
                    handleSubmit(formData)
                } } CloseFounder={CloseFounder} UpdateFounder={updateData}/>
        </CustomModal>
        </>
    )
}
export default Founders