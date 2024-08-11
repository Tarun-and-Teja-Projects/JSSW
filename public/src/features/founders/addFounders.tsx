import { FileInput, Grid, Group, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import CustomButton from "../Components/ui/CustomButton/CustomButton";

interface Props{
    OnSubmit:(formData:any)=>void;
    CloseFounder:()=>void;
}
const MissionForm:React.FC<Props>=({OnSubmit,CloseFounder})=>{
    // const[checked,setChecked]=useState(false)
    // const handleCheckChange=(value:boolean)=>{
    //     console.log(value)
    //     setChecked(value)
    // }
    const founderform=useForm({
        initialValues:{
            name:'',
            designation:'',
            image:''
        },
        validate:{
            name:isNotEmpty('Please Enter Founder Name'),
            designation:isNotEmpty('Please Enter Designation'),
            image:isNotEmpty('Please upload Image')
        }
    })

    const handleSubmit=()=>{
        const isvalidform=founderform.validate();
        if(isvalidform.hasErrors){
            return;
        }else{
            console.log(founderform.values)
            OnSubmit(founderform.values)
        }
    }
    const handleChange = (file: File | null) => {
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result as string;
            founderform.setFieldValue('image',base64String)
          };
          reader.readAsDataURL(file);
        } else {
          console.log('No file selected');
        }
      };
      
    return(
       <>
       <Grid>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <TextInput label="Name" placeholder="Enter Founder Name" variant="filled" color="#f0f0f0" withAsterisk {...founderform.getInputProps('name')} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <TextInput label="Designation" placeholder="Enter Designation" variant="filled" color="#f0f0f0" withAsterisk {...founderform.getInputProps('designation')}/>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <FileInput label="Upload Image" placeholder="upload Image"variant="filled" color="#f0f0f0"withAsterisk error={founderform.errors.image} onChange={(file)=>{handleChange(file)}}/>
                </Grid.Col>
                {/* <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
                    <CustomCheckbox label={"Is Active"} checked={checked} onChange={(value: boolean)=>{
                           handleCheckChange(value)
                        } }/>
                    </Grid.Col> */}
            </Grid>
            <Group justify="right">
                        <CustomButton variant={"cancel"} onClick={CloseFounder}/>
                        <CustomButton variant={"submit"} onClick={handleSubmit}/>
                    </Group>
       </>
    )
}
export default MissionForm;