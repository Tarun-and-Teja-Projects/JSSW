import { Checkbox, createTheme, MantineProvider } from "@mantine/core";
interface Props{
    label:string;
    checked:boolean;
    onChange:(value:boolean)=>void;
}
const CustomCheckbox:React.FC<Props>=({label,checked,onChange})=>{
    const theme = createTheme({
        cursorType: 'pointer',
      });
    return(
        <MantineProvider theme={theme}>
        <Checkbox label={label} mt="md" checked={checked} onChange={(e)=>{
onChange(e.currentTarget.checked)
        }}/>
      </MantineProvider>
    )
}
export default CustomCheckbox