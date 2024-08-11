import { Grid, Group, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import CustomButton from "../Components/ui/CustomButton/CustomButton";

const AddAbout=()=>{
    const addAbouts=useForm({
        initialValues:{
            title:'',
            description:''
        },
        validate:{
            title:isNotEmpty('Please Enter Title'),
            description:isNotEmpty('Please Enter Description')
        }
    })
    return(
        <>
        <Grid>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput label="Title" placeholder="Enter Title" {...addAbouts.getInputProps('title')}/>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <TextInput label="Description" placeholder="Enter Description" {...addAbouts.getInputProps('description')}/>
        </Grid.Col>
        </Grid>
        <Group justify="right">
            <CustomButton variant={"cancel"}/>
            <CustomButton variant={"submit"}/>
        </Group>
        </>
    )
}
export default AddAbout;