import {  Group, Loader, Paper,SimpleGrid,Text } from "@mantine/core"
import { IconArrowDownRight, IconArrowUpRight, IconCoin, IconDiscount2, IconReceipt2, IconUserPlus } from "@tabler/icons-react";
import classes from '../login/StatsGrid.module.css'
import CustomTitle from "../Components/ui/CustomTitle/CustomTitle";
import { useGetOrganizationByIdQuery } from "../../api/organizationApiHandle";
const Dashboard=()=>{
  const organizationId=sessionStorage.getItem('organizationId');
  console.log(organizationId)
  const {data:OrganizationData}=useGetOrganizationByIdQuery({
    id:organizationId
  })
  
    const icons = {
        user: IconUserPlus,
        discount: IconDiscount2,
        receipt: IconReceipt2,
        coin: IconCoin,
      };
      
      const data = [
        { title: 'Revenue', icon: 'receipt', value: '13,456', diff: 34 },
        { title: 'Profit', icon: 'coin', value: '4,145', diff: -13 },
        { title: 'Coupons usage', icon: 'discount', value: '745', diff: 18 },
        { title: 'New customers', icon: 'user', value: '188', diff: -30 },
      ] as const;
    const stats = data.map((stat) => {
        const Icon = icons[stat.icon];
        const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;
    
        return (
          <Paper withBorder p="md" radius="md" key={stat.title}>
            <Group justify="space-between">
              <Text size="xs" c="dimmed" className={classes.title}>
                {stat.title}
              </Text>
              <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
            </Group>
    
            <Group align="flex-end" gap="xs" mt={25}>
              <Text className={classes.value}>{stat.value}</Text>
              <Text c={stat.diff > 0 ? 'teal' : 'red'} fz="sm" fw={500} className={classes.diff}>
                <span>{stat.diff}%</span>
                <DiffIcon size="1rem" stroke={1.5} />
              </Text>
            </Group>
    
            <Text fz="xs" c="dimmed" mt={7}>
              Compared to previous month
            </Text>
          </Paper>
        );
      });
    
    return(
        <>
       {OrganizationData?.data ? (
<>
<CustomTitle title={`Welcome ${OrganizationData?.data[0]?.name}`}/>
        <div className={classes.root}>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
    </div>
</>
       ):(
        <Group justify="center">
          <Loader color="blue" type="bars" />
        </Group>
       )} 
        </>
    )
}
export default Dashboard