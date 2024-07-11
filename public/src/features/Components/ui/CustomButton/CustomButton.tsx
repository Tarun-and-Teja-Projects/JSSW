import React from 'react';
import { Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

interface Props {
  variant: 'submit' | 'cancel'|'add'; // Define props with specific variants
  onClick: () => void; // onClick handler
}

const CustomButton: React.FC<Props> = ({ variant, onClick }) => {
  let label = '';
  let color = 'blue';
  let buttonVariant = 'filled';
  let icon: React.ReactNode = null; 

  switch (variant) {
    case 'submit':
      label = 'Submit';
      buttonVariant = 'subtle'; 
      break;
    case 'cancel':
      label = 'Cancel';
      break;  
     case 'add':
      label = 'add';
      buttonVariant='transparent'
      icon=<IconPlus/>;
      break; 
    default:
      label = 'Default';
      break;
  }

  return (
    <Button variant={buttonVariant} leftSection={icon} color={color} onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
