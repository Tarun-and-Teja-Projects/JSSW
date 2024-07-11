import { Container } from "@mantine/core"
import { ReactNode } from "react";
interface CustomContainerProps {
    children: ReactNode;
  }
  const CustomContainer: React.FC<CustomContainerProps> = ({ children }) => {
    return(
        
        <Container fluid>
            {children}
        </Container>
    )
}
export default CustomContainer