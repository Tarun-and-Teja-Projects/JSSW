
import CustomStepper from "../Components/CustomStepper";
import { useState } from "react";
import RegisterForm from "./RegisterForm";
import CustomContainer from "../Components/ui/CustomContainer/CustomContainer";
import OrganizationPayment from "./OrganizationPayment";

const AddOrganizationForm=()=>{
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    // const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  
    const OrgForm=[
        {label:'Add Organization Details',
            content:(
                <RegisterForm nextStep={nextStep } />
            )
        },
        {label:'Payment Information',
            content:(
                <OrganizationPayment/>
            )
        }
    ];
    return(
        <CustomContainer>
                        <CustomStepper steps={OrgForm} active={active} setActive={setActive}/>

        </CustomContainer>           
    )
}
export default AddOrganizationForm;