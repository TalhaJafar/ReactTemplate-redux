import Button from 'react-bootstrap/Button'
import clsx from "clsx";
import './index.scss'

export const PrimaryButton = ({ title, onClick, disabled, className }) => {

  return (
    <Button 
        bsPrefix={clsx('custom-button', className)}
        disabled={disabled}
        onClick={onClick}
    >
        {title}
    </Button>
  );
};

export const SecondaryButton = ({ title, onClick, disabled, className }) => {

  return (
    <Button 
        disabled={disabled}
        onClick={onClick}
        bsPrefix={clsx('custom-button', className)}
    >
        {title}
    </Button>
  );
};
