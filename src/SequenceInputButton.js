import React from 'react';
// import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SendIcon from '@mui/icons-material/Send';
function SequenceInputButton(props) {

    const [values, setValues] = React.useState({
        sequence: '',
      });
    
      const handleChange = (event) => {
        setValues({sequence: event.target.value});
      };
    
      const sendSequence = () => {
        // console.log(typeof values.sequence)
        props.processInputSequence(values.sequence.split(','))
        props.resetSortingStatus(false)
      }
    
    
    return (
        <FormControl className="btn3" sx={{ m: 1, width: '35ch' , marginTop: "4vw"}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Enter Sequence of Integers</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={values.sequence}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <SendIcon style={{cursor: "pointer"}} onClick={sendSequence}>
                  
                </SendIcon>
                  {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>    );
}

export default SequenceInputButton;