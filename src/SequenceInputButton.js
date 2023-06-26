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
        if (props.sortingIsActive) {
          props.togglePauseButton()
        }
        props.resetSortingStatus(false)
      }
    
    
    return (
      <div style={{marginTop: "1.5vw"}}>
        <h3 className="sequence-prompt">Enter Sequence of Integers:</h3>
        <FormControl className="btn3" sx={{ m: 1, width: '35ch' , 
          '& .Mui-focused': {
            color: 'rgb(0,0,0,0.54)',
          },
          '.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent !important',
          },
          '.MuiFormControl-root': {
            padding: '1px',
          },
          padding: '1px',
      }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">E.g. 2,5,6</InputLabel>
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
        </FormControl>    
            </div>
    )
}

export default SequenceInputButton;