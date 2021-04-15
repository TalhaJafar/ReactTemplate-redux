import Button from 'react-bootstrap/Button'
import clsx from "clsx";
import './index.scss'

export const PrimaryButton = ({ title, onClick, disabled, className }) => {

  return (
    <Button 
        variant="primary" 
        disabled={disabled}
        onClick={onClick}
        className={clsx( 'primaryStyles', className)}
    >
        {title}
    </Button>
  );
};

export const SecondaryButton = ({ title, onClick, disabled, className }) => {

  return (
    <Button 
        variant="info" 
        disabled={disabled}
        onClick={onClick}
        className={className}
    >
        {title}
    </Button>
  );
};
