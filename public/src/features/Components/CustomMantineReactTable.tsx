import { MantineReactTable, MRT_ColumnDef, MRT_RowData } from "mantine-react-table";
import CustomButton from "./ui/CustomButton/CustomButton";
import CustomIcon from "./ui/CustomIcons/CustomIcon";

interface TableProps<TData extends MRT_RowData> {
  data: TData[];
  columns: MRT_ColumnDef<any>[]; // Use TData instead of any
  onAddButtonClick: () => void;
  rowCount: number;
  onEditClick: (data: TData) => void;
  onDeleteClick: (data: TData) => void;
  pagination: any;
  onPaginationChange: (updater: any | ((old: any) => any)) => void;
}

const CustomMantineReactTable = <TData extends MRT_RowData>({
  data,
  columns,
  onAddButtonClick,
  rowCount,
  onEditClick,
  onDeleteClick,
  onPaginationChange,
  pagination
}: TableProps<TData>) => {
  return (
    <>
      <MantineReactTable
        data={data}
        columns={columns}
        enablePagination={true}
        enableSorting={true}
        enableRowActions={true}
        enableColumnPinning={true}
        manualPagination={true}
        state={{pagination}}
        onPaginationChange={onPaginationChange}
        renderTopToolbarCustomActions={() => (
          <CustomButton variant="add" onClick={onAddButtonClick} />
        )}
        initialState={{
          columnPinning: {
            left: ['mrt-row-expand', 'mrt-row-select'],
            right: ['mrt-row-actions'],
          },
        }}
        rowCount={rowCount}
        renderRowActions={({ row }) => (
          <>
            <CustomIcon
              label="Edit"
              type="edit"
              onClick={() => onEditClick(row.original)}
            />
            &nbsp;&nbsp;
            <CustomIcon
              label="Delete"
              type="delete"
              onClick={() => onDeleteClick(row.original)}
            />
          </>
        )}
        mantineToolbarAlertBannerProps={{
            
                color: 'red',
                children: 'Network Error. Could not fetch data.',
              
            
        }}
      />
    </>
  );
};

export default CustomMantineReactTable;
