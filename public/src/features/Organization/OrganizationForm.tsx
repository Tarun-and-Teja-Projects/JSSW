
import CustomStepper from "../Components/CustomStepper";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import { notifications } from "@mantine/notifications";
import { useAddOrganizationMutation } from "../../api/organizationApiHandle";
import { IconCheck } from "@tabler/icons-react";
import { rem } from "@mantine/core";
import UserLogin from "./userLogin";
enum Direction{
    Add='1',
    Review='2'
}
const AddOrganizationForm=()=>{
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const[addOrganization]=useAddOrganizationMutation();
    const[loadbutton,setLoadButton]=useState(false);
    const handleOrganizationSubmit=async(formData:any)=>{
        setLoadButton(true)
        const id = notifications.show({
            loading: true,
            title: 'Add Organization',
            message: 'Please wait, while we save the organization details',
            autoClose: false,
            withCloseButton: false,
          })
          const obj={
            "name":formData.name,
            "address":formData.address,
            "email":formData.email,
            "phonenumber":formData.phoneNumber,
            "image":formData.uploadImage
            }
            const organizationSubmit=await addOrganization(obj).unwrap();
            if(organizationSubmit){
                setLoadButton(false)
                notifications.update({
                    id,
                    color: 'teal',
                    title: 'Add Organization',
                    message: 'Organization details saved Successfully.',
                    icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
                    loading: false,
                    autoClose: 4000,
                  });
            }
    }
  
    const OrgForm=[
        {label:'Add Organization Details',
            content:(
                <RegisterForm nextStep={nextStep} onSubmit={(formData: any) => {
                    handleOrganizationSubmit(formData);
                } } loadbutton={loadbutton} readonly={false} direction={Direction.Add} />
            )
        },
        {
            label:'User Login Details',
            content:(
              <UserLogin/>
            )
        },
        
    ];
    
    return(
     <CustomStepper steps={OrgForm} active={active} setActive={setActive}/>
    )
}
export default AddOrganizationForm;