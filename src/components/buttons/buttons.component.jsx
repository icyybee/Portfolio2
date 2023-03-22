import Button from '@mui/material/Button';

const BasicButtons = ({variant, text, functions}) => {
  return (
    <Button variant={variant} onClick={functions}>{text}</Button>
  );
}

export default BasicButtons;