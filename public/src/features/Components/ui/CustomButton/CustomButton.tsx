import React from 'react';
import { Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

interface Props {
  variant: 'submit' | 'cancel' | 'add' | 'logindefault'; // Define props with specific variants
  onClick?: () => void; // onClick handler
  text?: string; // text should be required if you're using it as a label
}

const CustomButton: React.FC<Props> = ({ variant, onClick, text }) => {
  let label = text || ''; // Use the text prop for the label
  let color = 'blue';
  let buttonVariant = 'filled';
  let icon: React.ReactNode = null; 
  let size='xs';

  switch (variant) {
    case 'submit':
      label = text || 'Submit';
      buttonVariant = 'subtle'; 
      break;
    case 'cancel':
      label = text || 'Cancel';
      buttonVariant = 'transparent';
      color = 'gray';
      break;  
    case 'add':
      label = text || 'Add';
      buttonVariant = 'transparent';
      icon = <IconPlus />;
      break; 
    case 'logindefault':
      label = text || '';
      buttonVariant = 'subtle';
      color='gray';
      size='xs';
      break;
    default:
      label = text || 'Default';
      break;
  }

  return (
    <Button variant={buttonVariant} leftSection={icon} color={color} onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
