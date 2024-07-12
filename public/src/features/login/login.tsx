import {  Card, Grid, Group, Image, Flex, TextInput, PasswordInput, Container, Loader, rem } from "@mantine/core";
import CustomButton from "../Components/ui/CustomButton/CustomButton";
import {isNotEmpty, useForm} from '@mantine/form';
import CustomTitle from "../Components/ui/CustomTitle/CustomTitle";
import { useAddLoginMutation } from "../../api/LoginApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";

const Login=()=>{
    const navigate=useNavigate();
    const [loading, setLoading] = useState(false); // State to manage loading state

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
            setLoading(true);
            const addlogin= await addLogins(form.values).unwrap(); 
            console.log(addlogin)
            if(addlogin){
                if(addlogin.status===401){
                        notifications.show({
                            color: 'red',
                            title: 'Login',
                            message: addlogin.message,
                            icon: <IconX style={{ width: rem(18), height: rem(18) }} />,
                            loading: false,
                            autoClose: 2000,
                          });
                }else{
                    navigate('/home');
                    sessionStorage.setItem('accessToken',addlogin.data)

                }
                setLoading(false); 
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
                    {loading && (
                    <Flex justify="center" mt={2}>
                        <Loader />
                    </Flex>
                )}
                </Card>
              </Flex>
    )
}
export default Login;