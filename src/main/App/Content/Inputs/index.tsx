import React from 'react'
import Grid from '@mui/material/Grid'
import { observer } from 'mobx-react-lite'
import InputExamples from './InputExamples'

function Inputs() {
  return (
    <Grid container spacing={2}>
      <InputExamples title="Default inputs" />
    </Grid>
  )
}

export default observer(Inputs)
