import { Grid, Group, PasswordInput, rem, Select, TextInput } from "@mantine/core"
import CustomCard from "../Components/ui/CustomCard/CustomCard"
import { useAddOrgUsersMutation, useGetAllOrganizationsQuery } from "../../api/organizationApiHandle"
import { Organization } from "../../types/organization"
import { isNotEmpty, useForm } from "@mantine/form"
import CustomButton from "../Components/ui/CustomButton/CustomButton"
import { notifications } from "@mantine/notifications"
import { IconCheck } from "@tabler/icons-react"

const UserLogin = () => {
    const loginform=useForm({
        initialValues:{
            Organization:"",
            username:'',
            password:''
        },
        validate:{
            Organization:isNotEmpty('Please Select Organization'),
            username:isNotEmpty('Please Enter Username'),
            password:isNotEmpty('Please Enter Password')
        }
    })
    const { data: OrganizationDetails } = useGetAllOrganizationsQuery({});
    console.log(OrganizationDetails?.data)
    let findData;
    if(OrganizationDetails){
        findData=OrganizationDetails?.data?.result?.find((x: { id: string })=>x.id===loginform.values.Organization)
        console.log(findData)
    }
    console.log(findData)
    const[addUserData]=useAddOrgUsersMutation();
    const handlesubmit=async()=>{
        const isvalidform = loginform.validate();
        if(isvalidform.hasErrors){
            return;
        }else{
            const id = notifications.show({
                loading: true,
                title: 'Add Organization Users',
                message: 'Please wait, while we save the organization users details',
                autoClose: false,
                withCloseButton: false,
              })
              const obj={
                ...loginform.values,
                "orgId":loginform.values.Organization
              }
              const addLogin= await addUserData(obj).unwrap();
              if(addLogin){
                notifications.update({
                    id,
                    color: 'teal',
                    title: 'Add Organization Users',
                    message: 'Organization users details saved Successfully.',
                    icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
                    loading: false,
                    autoClose: 4000,
                  });
              }

        }
    }
    return (
        <><CustomCard>
            <Grid>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Select
  label="Organization"
  placeholder="Select Organization"
  variant="filled"
  color="#f0f0f0"
  data={
    OrganizationDetails && OrganizationDetails?.data?.map((x: Organization) => ({
      label: x.name,
      value: x.id,
    })) || []
  }
  searchable
  withAsterisk
  {...loginform.getInputProps('Organization')}
/>


                </Grid.Col>
               
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <TextInput label="Username" placeholder="Enter Username" variant="filled" color="#f0f0f0" withAsterisk {...loginform.getInputProps('username')} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <PasswordInput label="Password" placeholder="Enter Password" variant="filled" color="#f0f0f0" withAsterisk {...loginform.getInputProps('password')} />
                </Grid.Col>
            </Grid>

        </CustomCard><Group justify="right" mt={25}>
                <CustomButton variant={"cancel"} text="Back" />
                <CustomButton variant={"submit"} text="Submit" onClick={handlesubmit}/>
            </Group></>
    )
}
export default UserLogin