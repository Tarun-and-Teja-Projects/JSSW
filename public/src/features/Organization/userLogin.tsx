import { Grid, Group, Select, TextInput } from "@mantine/core"
import CustomCard from "../Components/ui/CustomCard/CustomCard"
import { useGetOrganizationQuery } from "../../api/organizationApiHandle"
import { Organization } from "../../types/organization"
import { isNotEmpty, useForm } from "@mantine/form"
import CustomButton from "../Components/ui/CustomButton/CustomButton"

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
    const { data: OrganizationDetails } = useGetOrganizationQuery({});
    console.log(OrganizationDetails)
    let findData;
    if(OrganizationDetails){
        findData=OrganizationDetails?.data?.result?.find((x: { id: string })=>x.id===loginform.values.Organization)
    }
    console.log(findData)
    return (
        <><CustomCard>
            <Grid>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <Select
                        label="Organization"
                        placeholder="Select Organization"
                        variant="filled"
                        color="#f0f0f0"
                        data={OrganizationDetails?.data?.result?.map((x: Organization) => ({
                            label: x.name,
                            value: x.id
                        }))}
                        searchable
                        withAsterisk
                        {...loginform.getInputProps('Organization')} />

                </Grid.Col>
                {loginform.values.Organization && (
                    <>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <TextInput label="Name" placeholder="Enter Name" variant="filled" color="#f0f0f0" withAsterisk value={findData?.name} readOnly />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <TextInput label="Email" placeholder="Enter Email" variant="filled" color="#f0f0f0" withAsterisk value={findData?.email} readOnly />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <TextInput label="Address" placeholder="Enter address" variant="filled" color="#f0f0f0" withAsterisk value={findData?.address} readOnly />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <TextInput label="Phone Number" placeholder="Enter Phone Number" variant="filled" color="#f0f0f0" withAsterisk value={findData?.PhoneNumber} readOnly />
                        </Grid.Col>
                    </>
                )}
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <TextInput label="Username" placeholder="Enter Username" variant="filled" color="#f0f0f0" withAsterisk {...loginform.getInputProps('username')} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <TextInput label="Password" placeholder="Enter Password" variant="filled" color="#f0f0f0" withAsterisk {...loginform.getInputProps('password')} />
                </Grid.Col>
            </Grid>

        </CustomCard><Group justify="right" mt={25}>
                <CustomButton variant={"cancel"} text="Back" />
                <CustomButton variant={"submit"} text="Next Step" />
            </Group></>
    )
}
export default UserLogin