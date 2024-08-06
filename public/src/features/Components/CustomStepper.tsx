import { Stepper } from "@mantine/core"
import { ReactNode } from "react";
interface Props{
    steps:StepData[];
    active:number
    setActive:React.Dispatch<React.SetStateAction<number>>;
}
interface StepData{
    label:string;
    content:ReactNode;
}
const CustomStepper:React.FC<Props>=({active,setActive,steps})=>{
    return(
        <>
        <Stepper active={active} iconSize={25} onStepClick={setActive} size="xs">
        {steps.map((step, index) => (
          <Stepper.Step key={index} label={step.label} >
            {step.content}
          </Stepper.Step>
        ))}
        {/* <Stepper.Completed>
          Completed! Form submitted
        </Stepper.Completed> */}
      </Stepper>

        </>
    )
}
export default CustomStepper