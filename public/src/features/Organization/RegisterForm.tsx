import { FileInput, Grid, Group, TextInput } from "@mantine/core"
import CustomTitle from "../Components/ui/CustomTitle/CustomTitle"
import CustomButton from "../Components/ui/CustomButton/CustomButton"
import CustomCard from "../Components/ui/CustomCard/CustomCard"
import { isNotEmpty, useForm } from "@mantine/form"
interface Props{
    nextStep:()=>void;
}
const RegisterForm:React.FC<Props>=({nextStep})=>{
    const Registers=useForm({
        initialValues:{
            name:'',
            address:'',
            phoneNumber:'',
            email:'',
            uploadImage:''
        },
        validate:{
            name:isNotEmpty('Please Enter Organization Name'),
            address:isNotEmpty('Please Enter Organization Address'),
            phoneNumber:isNotEmpty('Please Enter Organization Phone Number'),
            email:isNotEmpty('Please Enter Organization Email'),
            uploadImage:isNotEmpty('Please Enter Organization Image')
        }
    });

    const handleSubmit=()=>{
        const isvalidform=Registers.validate();
        if(isvalidform.hasErrors){
            return;
        }else{
            console.log(Registers.values)
            nextStep();
        }
    }
    return(
        <>
                 <CustomCard >
                    <CustomTitle title={"Register Organization"}/>
                    <Grid mt={25}>
            <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
                <TextInput label="Name" placeholder="Enter Organization Name" variant="filled" withAsterisk {...Registers.getInputProps('name')}/>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
                <TextInput label="Address" placeholder="Enter Organization Address" variant="filled" withAsterisk {...Registers.getInputProps('address')}/>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
                <TextInput label="PhoneNumber" placeholder="Enter Organization Phone Number" variant="filled" withAsterisk {...Registers.getInputProps('phoneNumber')}/>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
                <TextInput label="Email" placeholder="Enter Organization Email" variant="filled" withAsterisk {...Registers.getInputProps('email')}/>
            </Grid.Col>
            <Grid.Col span={{base:12,md:6,lg:12}}>
                <FileInput label="Upload Image" placeholder="Upload Organization Image" variant="filled" withAsterisk {...Registers.getInputProps('uploadImage')}/>
            </Grid.Col>
           </Grid>
           
           </CustomCard>
           <Group justify="right" mt={20}>
            <CustomButton variant={"cancel"}/>
            <CustomButton variant={"submit"} text="Next Step" onClick={handleSubmit}/>
           </Group>
        </>
    )
}
export default RegisterForm