import React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0.25x',
  },
  {
    value: 25,
    label: '0.5x',
  },
  {
    value: 50,
    label: '1.0x',
  },
  {
    value: 75,
    label: '1.5x',
  },
  {
    value: 100,
    label: '2.0x',
  },

];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

const PlaybackSpeedSlider = (props) => {
    function handleChange(event) {
        console.log(event.target.value)
        props.modifyDelay(event.target.value)
    }
    
    return (
        <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Restricted values"
          defaultValue={50}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={null}
          valueLabelDisplay="off"
          marks={marks}
          sx={{color: "#24a0ed"}}
          onChange={handleChange}
          disabled={props.sortingIsActive}
        />
      </Box>
      );
};

export default PlaybackSpeedSlider;