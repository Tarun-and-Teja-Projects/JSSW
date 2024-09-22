import { Flex } from "@mantine/core"
import CustomButton from "../Components/ui/CustomButton/CustomButton"
import AddProjectRequirements from "./addProjectRequirements"
import { useDisclosure } from "@mantine/hooks"
import CustomModal from "../Components/ui/CustomModal/CustomModal"

const ProjectRequirements=()=>{
    const[opened,{open:OpenModal,close:CloseModal}]=useDisclosure(false);
    const addProject=()=>{
        OpenModal();
}
    return(
        <>
        <Flex justify={'right'}>
            <CustomButton variant={"add"} onClick={addProject}/>
        </Flex>
        <CustomModal opened={opened} close={CloseModal} title={`Add Project Requirements`} children={<AddProjectRequirements/>}/>
        </>
    )
}
export default ProjectRequirements