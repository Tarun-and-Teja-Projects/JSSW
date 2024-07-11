import { FileInput, Grid, Group, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import CustomButton from "./Components/ui/CustomButton/CustomButton";
interface Props{
    OnSubmit:(formData:any)=>void;
}
const MissionForm:React.FC<Props>=({OnSubmit})=>{
    const AddData=useForm({
        initialValues:{
            title:'',
            description:''
        },
        validate:{
            title:isNotEmpty('Please Enter Name'),
            description:isNotEmpty('Please Enter Description')
        }
    });
    const handleSubmit=()=>{
        const isvalidform=AddData.validate();
        if(isvalidform.hasErrors){
            return;
        }else{
            const isvalues={
                ...AddData.values,
            }
            OnSubmit(isvalues)
        }
    }
    return(
        <div>
            <Grid >
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <TextInput label="Name" placeholder="Enter Name" variant="filled" color="#f0f0f0" withAsterisk {...AddData.getInputProps('title')} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <TextInput label="Description" placeholder="Enter Description" variant="filled" color="#f0f0f0" withAsterisk {...AddData.getInputProps('description')} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <FileInput label="Upload files" placeholder="Upload files" variant="filled" color="#f0f0f0" multiple />
                </Grid.Col>
            </Grid>
            <Group justify="right">
            <CustomButton variant={"submit"} onClick={handleSubmit}/>
            </Group>
        </div>
    )
}
export default MissionForm;