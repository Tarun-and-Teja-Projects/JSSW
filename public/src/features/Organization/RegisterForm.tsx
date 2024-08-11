import { Button, FileInput, Grid, Group, TextInput } from "@mantine/core"
import CustomTitle from "../Components/ui/CustomTitle/CustomTitle"
import CustomButton from "../Components/ui/CustomButton/CustomButton"
import CustomCard from "../Components/ui/CustomCard/CustomCard"
import { isNotEmpty, useForm } from "@mantine/form"
enum Direction{
    Add='1',
    Review='2'
}
interface Props{
    nextStep:()=>void;
    onSubmit:(formData:any)=>void;
    loadbutton:boolean
    readonly:boolean
    direction:Direction
}
const RegisterForm:React.FC<Props>=({onSubmit,loadbutton,readonly,direction})=>{
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
   const onFileSelected = (file: File | null) => {
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = reader.result as string;
            Registers.setFieldValue('uploadImage',base64)
          };
          reader.readAsDataURL(file);
        }
      }
    const handleSubmit=()=>{
        const isvalidform=Registers.validate();
        if(isvalidform.hasErrors){
            return;
        }else{
            onSubmit(Registers.values)
        }
    }
    return(
        <>
                 <CustomCard >
                    <CustomTitle title={"Register Organization"}/>
                    <Grid mt={25}>
            <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
                <TextInput label="Name" placeholder="Enter Organization Name" readOnly={readonly} variant="filled" withAsterisk {...Registers.getInputProps('name')}/>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
                <TextInput label="Address" placeholder="Enter Organization Address" readOnly={readonly} variant="filled" withAsterisk {...Registers.getInputProps('address')}/>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
                <TextInput label="PhoneNumber" placeholder="Enter Organization Phone Number" readOnly={readonly} variant="filled" withAsterisk {...Registers.getInputProps('phoneNumber')}/>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
                <TextInput label="Email" placeholder="Enter Organization Email" variant="filled" readOnly={readonly} withAsterisk {...Registers.getInputProps('email')}/>
            </Grid.Col>
            <Grid.Col span={{base:12,md:6,lg:12}}>
                <FileInput label="Upload Image" placeholder="Upload Organization Image" readOnly={readonly} error={Registers.errors.uploadImage} variant="filled" withAsterisk onChange={onFileSelected} />
            </Grid.Col>
           </Grid>
           
           </CustomCard>
           <Group justify="right" mt={20}>
          {direction === Direction.Add ? (
            <>
              {loadbutton ? (
                <>
                   <CustomButton variant={"cancel"}/>
                   <Button loading={loadbutton}>Submit</Button>
                </>
            ):(
                <>
   <CustomButton variant={"cancel"}/>
   <CustomButton variant={"submit"} text="Next Step" onClick={handleSubmit}/>
                </>
            )}
            </>
          ):(
            <>
   <CustomButton variant={"cancel"} text="Back"/>
   <CustomButton variant={"submit"} text="Submit"/>
            </>
          )}
         
           </Group>
        </>
    )
}
export default RegisterForm