import { MantineReactTable } from "mantine-react-table"
import CustomTitle from "../Components/ui/CustomTitle/CustomTitle"
import CustomButton from "../Components/ui/CustomButton/CustomButton"

const About=()=>{
    return(
        <>
         <CustomTitle title="About us"/><br/>
        <MantineReactTable data={[]} columns={[]}enablePagination={true} 
            enableSorting={true} 
            enableRowActions={false}
            enableColumnPinning={true}
            manualPagination={true}
            renderTopToolbarCustomActions={() => (
                <CustomButton variant="add" />
            )}
            initialState={{
                columnPinning: {
                    left: ['mrt-row-expand', 'mrt-row-select'],
                    right: ['mrt-row-actions'],
                },
                
            }}
            />
        </>
    )
}
export default About