import { Grid, Group, TextInput } from "@mantine/core";
import CustomButton from "./Components/ui/CustomButton/CustomButton";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";
interface Props{
    onSubmit:(formData:any)=>void;
}
const ContactForm:React.FC<Props>=({onSubmit})=>{
    const AddContact=useForm({
        initialValues:{
            phone:'',
            email:''
        },
        validate:{
            phone:isNotEmpty('Please Enter Phone Number'),
            email:isEmail('Please Enter Email')
        }
    });

    const handleSubmit=()=>{
        const isvalidform=AddContact.validate();
        if(isvalidform.hasErrors){
            return;
        }else{
            const isvalues={
                ...AddContact.values,
            }
            onSubmit(isvalues);
        }
    }
    return(
        <><Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <TextInput label="Phone Number" variant="filled" color="#f0f0f0" placeholder="Enter Phone Number" withAsterisk {...AddContact.getInputProps('phone')}/>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <TextInput label="Email" variant="filled" color="#f0f0f0" placeholder="Enter Email" withAsterisk {...AddContact.getInputProps('email')} />
            </Grid.Col>
        </Grid>
        <Group justify="right" mt={20}>
                <CustomButton variant={"submit"} onClick={handleSubmit} />
            </Group></>
    )
}
export default ContactForm;