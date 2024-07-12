import { Pagination } from "@mantine/core"
interface Props{
    totalPages:number;
    currentPage:number;
    onChange:(value:number)=>void;
}
const CustomPagination:React.FC<Props>=({totalPages,currentPage,onChange})=>{
    return(
        
        <Pagination total={totalPages} value={currentPage} onChange={onChange} size={'xs'} radius={'xl'} mt={10}/>
    )
}
export default CustomPagination