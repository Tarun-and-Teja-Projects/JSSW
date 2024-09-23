import { MRT_ColumnDef, MRT_RowData } from "mantine-react-table"
import CustomMantineReactTable from "../Components/CustomMantineReactTable"
import CustomTitle from "../Components/ui/CustomTitle/CustomTitle"
import { useState } from "react";

const ReferenceTable=()=>{
    const referenceJSON=[
        {id:'c3822d4b-67d3-49f6-a2b3-f15c6994b4f4',
        name:'Gallery Dropdown'
        },
        {
            id:'c3822d4b-67d3-49f6-a2b3-f15c6994b4f8',
            name:'Videos Dropdown'
        }
    ];
    const[pagination,setPagination]=useState({
        pageIndex:0,
        pageSize:5
    })
    const columnsData: MRT_ColumnDef<any>[] = [
        {
            header: 'Name',
            accessorKey: 'name',
            Cell: ({ cell }) => (
                <span
                    style={{ cursor: 'pointer', color: 'var(--mantine-color-blue-6)' }}
                    onClick={() => handleNameClick(cell.row.original)}
                    onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')} 
                onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}  
                >
                    {cell.getValue() as string}
                </span>
            ),
        },
    ];
    const handleNameClick = (name: string) => {
        console.log('Name clicked:', name);
        // You can perform any other action here
    };
    
    return(
        <>
            <CustomTitle title={"Reference Table"}/><br/>

        <CustomMantineReactTable data={referenceJSON} columns={columnsData} onAddButtonClick={function (): void {
                throw new Error("Function not implemented.")
            } } rowCount={0} onEditClick={function (data: MRT_RowData): void {
                throw new Error("Function not implemented.")
            } } onDeleteClick={function (data: MRT_RowData): void {
                throw new Error("Function not implemented.")
            } } pagination={pagination} onPaginationChange={setPagination}/>
        </>
    )
}
export default ReferenceTable