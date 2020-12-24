import React from 'react';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

import "./RegisterTimeForm.css";

function RegisterTimeForm({handleChange}) {
    return (
        <div>
        <FormControl component="fieldset">
        <FormLabel component="legend">
          <p className="label">Select Input Device Used</p>
          
        </FormLabel>
        <RadioGroup
          aria-label="input-device"
          name="input-device"
          onChange={handleChange}
        >
          <FormControlLabel
            value="mouse"
            control={<Radio />}
            label="Mouse"
          />
          <FormControlLabel
            value="touchpad"
            control={<Radio />}
            label="Touchpad"
          />
          <FormControlLabel
            value="touchscreen"
            control={<Radio />}
            label="Touchscreen"
          />
        </RadioGroup>
      </FormControl>
        </div>
    );
}

export default RegisterTimeForm;