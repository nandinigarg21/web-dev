import React, { useState } from "react";

import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import {Controlled as ControlledEditor} from 'react-codemirror2'
import { Box, styled } from '@mui/material';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css'

const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
    `;


const Editor = ({heading, language, icon, color, value, onChange}) => {

    const [open, setOpen] = useState(true)

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    
  const Header = styled(Box)`
  display:flex;
  background: #060606
  color:#AAAEBC;
  justify-content: space-between;
  font-weight:700;

  `;
    
  const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
  `;

 
  return (
    <Container style={open ? null : {flexGrow: 0}}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
            }}
          >
            {" "}
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
        
         fontSize="small"
         
         style={{alignSelf: 'center'}}
        
        onClick={() => setOpen(prevState => !prevState)}
        
        />
      </Header>

      <ControlledEditor
      className="controlled-editor"
      value={value}
      onBeforeChange={handleChange}
      options={{
        lineWrapping: true,
        lint: true,
        mode: language,
        theme:'material',
        lineNumbers: true
      }}
      
      />
    </Container>
  );
};

export default Editor;
