import { Grid, Group, Textarea, TextInput } from "@mantine/core"
import CustomButton from "../Components/ui/CustomButton/CustomButton"
import { isNotEmpty, useForm } from "@mantine/form"

const AddProjectRequirements=()=>{
    const project=useForm({
        initialValues:{
            title:'',
            background:'',
            mission:'',
            bibleverse:''
        },
        validate:{
            title:isNotEmpty('Please Enter Title'),
            background:isNotEmpty('Please Enter Background'),
            mission:isNotEmpty('Please Enter Mission'),
            bibleverse:isNotEmpty('Please Enter BibleVerse')
        }
    })
    const handleSubmit=()=>{
        const isvalidform=project.validate();
        if(isvalidform.hasErrors){
            return;
        }else{

        }
    }
    return(
       <>
       <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput label="Title" placeholder="Enter Title" variant="filled" withAsterisk {...project.getInputProps('title')}/>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <Textarea label="Background" placeholder="Enter Background" variant="filled"withAsterisk {...project.getInputProps('background')}/>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <Textarea label="Mission" placeholder="Enter Mission" variant="filled" withAsterisk {...project.getInputProps('mission')}/>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <Textarea label="Bible Verse" placeholder="Enter Bible Verse" variant="filled" withAsterisk {...project.getInputProps('bibleverse')}/>
        </Grid.Col>
        </Grid>
        <Group justify="right" mt={10}>
            <CustomButton variant={"submit"} onClick={handleSubmit}/>
        </Group>
       </>
    )
}
export default AddProjectRequirements