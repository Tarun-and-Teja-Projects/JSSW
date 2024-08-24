import { notifications } from '@mantine/notifications';
import { IconAlertCircle, IconCheck, IconLoader, IconX } from '@tabler/icons-react';
import React from 'react';
interface Props{
    id:any;
    type:any;
    message:string
}
const NotificationComponent:React.FC<Props> = ({ id, type, message }) => {
  const getNotificationProps = () => {
    switch (type) {
      case 'success':
        return {
          color: 'teal',
          title: 'Success',
          icon: <IconCheck style={{ width: '18px', height: '18px' }} />,
          message,
        };
      case 'error':
        return {
          color: 'red',
          title: 'Error',
          icon: <IconX style={{ width: '18px', height: '18px' }} />,
          message,
        };
      case 'warning':
        return {
          color: 'orange',
          title: 'Warning',
          icon: <IconAlertCircle style={{ width: '18px', height: '18px' }} />,
          message,
        };
      case 'processing':
        return {
          color: 'blue',
          title: 'Processing',
          icon: <IconLoader style={{ width: '18px', height: '18px', animation: 'spin 1s linear infinite' }} />,
          message: message || 'Please wait while the operation is being processed.',
        };
      default:
        return {
          color: 'gray',
          title: 'Notification',
          icon: null,
          message,
        };
    }
  };

  React.useEffect(() => {
    const notificationProps = getNotificationProps();
    if(type === 'processing'){
        notifications.show({
            ...notificationProps,
            loading: type === 'processing',
            autoClose: type === 'processing' ? false : 4000,
          });
    }else{
        notifications.update({
            id,
            ...notificationProps,
            autoClose:4000,
          });
    }
  }, [id, type, message]);

  return null; // This component doesn't need to render anything
};

export default NotificationComponent;
