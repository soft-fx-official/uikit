import React from 'react'
import { observer } from 'mobx-react-lite'

import { Grid } from '@mui/material'

import ButtonExamples from './ButtonExamples'

const Buttons = () => (
  <Grid container spacing={2}>
    <ButtonExamples title="Default buttons" />
    <ButtonExamples title="Outlined buttons" variant="outlined" />
    <ButtonExamples title="Contained buttons" variant="contained" />
  </Grid>
)

export default observer(Buttons)
