import React from 'react';
import { Button } from '@mantine/core';

interface Props {
  variant: 'submit' | 'cancel'; // Define props with specific variants
  onClick: () => void; // onClick handler
}

const CustomButton: React.FC<Props> = ({ variant, onClick }) => {
  let label = '';
  let color = 'blue';
  let buttonVariant = 'filled'; // Default variant

  switch (variant) {
    case 'submit':
      label = 'Submit';
      buttonVariant = 'subtle'; // Use 'subtle' variant for submit
      break;
    case 'cancel':
      label = 'Cancel';
      break;
    default:
      label = 'Default';
      break;
  }

  return (
    <Button variant={buttonVariant} color={color} onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
