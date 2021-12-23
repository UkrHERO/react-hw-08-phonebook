import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <Box
      className={s.Filter}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '500' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Find contacts by name</h1>
      <TextField
        id="outlined-basic"
        label="Contacts"
        variant="outlined"
        type="text"
        name="find"
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
