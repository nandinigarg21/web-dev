
import React from 'react'
import { useContext } from 'react';
import Editor from './Editor'
import {Box, styled} from '@mui/material'
import { DataContext } from '../Context/DataProvider';

const Container = styled(Box)`
  background-color: #060606;
    height: 50vh;
    display: flex;
`;

const Code = () => {

    const{html, setHtml, css, setCss, js, setJs} = useContext(DataContext)

  return (
    <Container>
        <Editor
          heading='HTML'
          icon="/"
          color="#FF3C41"
          value={html}
          onChange={setHtml}
        />
        <Editor
        heading='CSS'
        icon="*"
        color="blue"
        value={css}
          onChange={setCss}
        />
        <Editor
        heading='JavaScript'
        icon="{}"
        color="yellow"
        value={js}
          onChange={setJs}
        />
      
    </Container>
  )
}

export default Code
