import CustomButton from "../Components/ui/CustomButton/CustomButton"
import AddProjectRequirements from "./addProjectRequirements"
import { useDisclosure } from "@mantine/hooks"
import CustomModal from "../Components/ui/CustomModal/CustomModal"
import { MantineReactTable } from "mantine-react-table"
import CustomTitle from "../Components/ui/CustomTitle/CustomTitle"

const ProjectRequirements=()=>{
    const[opened,{open:OpenModal,close:CloseModal}]=useDisclosure(false);
    const addProject=()=>{
        OpenModal();
}
    return(
        <>
        <CustomTitle title="Project  Requirements"/><br/>
        <MantineReactTable data={[]} columns={[]}enablePagination={true} 
            enableSorting={true} 
            enableRowActions={false}
            enableColumnPinning={true}
            manualPagination={true}
            renderTopToolbarCustomActions={() => (
                <CustomButton variant="add" onClick={addProject} />
            )}
            initialState={{
                columnPinning: {
                    left: ['mrt-row-expand', 'mrt-row-select'],
                    right: ['mrt-row-actions'],
                },
                
            }}
            />
        <CustomModal opened={opened} close={CloseModal} title={`Add Project Requirements`} children={<AddProjectRequirements/>}/>
        </>
    )
}
export default ProjectRequirements