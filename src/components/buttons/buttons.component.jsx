import Button from '@mui/material/Button';

const BasicButtons = ({variant, text}) => {
  return (
    <Button variant={variant}>{text}</Button>
  );
}

export default BasicButtons;