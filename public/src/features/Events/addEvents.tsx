import { FileInput, Grid, Group, TextInput } from "@mantine/core"
import { isNotEmpty, useForm } from "@mantine/form"
import CustomButton from "../Components/ui/CustomButton/CustomButton"

const AddSocialEvents=()=>{
    const addsocialevents=useForm({
        initialValues:{
            name:'',
            description:'',
            image:''
        },
        validate:{
            name:isNotEmpty('Please Enter Name'),
            description:isNotEmpty('Please Enter Description'),
            image:isNotEmpty('Please Upload Image')
        }
    })
    const handleChange = (file: File | null) => {
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result as string;
            addsocialevents.setFieldValue('image',base64String)
          };
          reader.readAsDataURL(file);
        } else {
          console.log('No file selected');
        }
      }
      const handleSubmit=()=>{
        const isvalidform=addsocialevents.validate();
        if(isvalidform.hasErrors){
            return;
        }
      }
    return(
       <><Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <TextInput label="Event Name" placeholder="Enter Event Name" variant="filled" color="#f0f0f0" withAsterisk {...addsocialevents.getInputProps('name')} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <TextInput label="Event Description" placeholder="Enter Event Description" variant="filled" color="#f0f0f0" withAsterisk {...addsocialevents.getInputProps('description')} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <FileInput label="Upload Image" placeholder="upload Image" variant="filled" color="#f0f0f0" withAsterisk error={addsocialevents.errors.image} onChange={(file) => { handleChange(file) } } />
            </Grid.Col>
        </Grid>
        <Group justify="right" mt={20}>
            <CustomButton variant={"submit"} text="Submit" onClick={handleSubmit}/>
            </Group></>
    )
}
export default AddSocialEvents