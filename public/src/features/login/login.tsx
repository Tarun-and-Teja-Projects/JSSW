import {  Card, Grid, Group, Image, Flex, TextInput, PasswordInput, Container } from "@mantine/core";
import CustomButton from "../Components/CustomButton/CustomButton";
import {isNotEmpty, useForm} from '@mantine/form';
import CustomTitle from "../Components/CustomTitle/CustomTitle";
import { useAddLoginMutation } from "../../api/LoginApi";

const Login=()=>{
    const form=useForm({
        initialValues:{
            username:'',
            password:""
        },
        validate:{
            username:isNotEmpty('Please Enter Username'),
            password:isNotEmpty('Please Enter Password')
        }
    });
    const[addLogins]=useAddLoginMutation();
    const handleSubmit=async()=>{
        const isvalidform=form.validate();
        if(isvalidform.hasErrors){
            return;
        }else{
       
            console.log(form.values)
            const addlogin= await addLogins(form.values).unwrap(); 
            if(addlogin){
                sessionStorage.setItem('accessToken',addlogin.accessToken)
            }
        }
    }
    return(
              <Flex justify={'center'} mt={150}>
                <Card  withBorder>
                    <Card.Section>
                        <Image src={'https://jswwministries.com/assets/img/logo/1.png'} h={200}/>
                    </Card.Section>
                    <Container>
                    <CustomTitle title={"Please Enter Login Details"}/>

                    </Container>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
                            <TextInput label="Username" variant="filled" color="#f0f0f0" placeholder="Enter Username" withAsterisk {...form.getInputProps('username')}/>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
                            <PasswordInput label="Password" variant="filled" color="#f0f0f0" placeholder="Enter Password" withAsterisk {...form.getInputProps('password')}/>
                        </Grid.Col>
                    </Grid>
                    <Group justify="right" mt={10}>
                        <CustomButton variant={"submit"} onClick={handleSubmit}/>
                    </Group>
                </Card>
              </Flex>
    )
}
export default Login;