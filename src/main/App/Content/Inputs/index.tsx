import React from 'react'
import { observer } from 'mobx-react-lite'

import Grid from '@mui/material/Grid'

import InputExamples from './InputExamples'

const Inputs = () => (
  <Grid container spacing={2}>
    <InputExamples title="Default inputs" />
  </Grid>
)

export default observer(Inputs)
