import React from 'react'
import { Grid } from '@mui/material'
import { observer } from 'mobx-react-lite'
import ButtonExamples from './ButtonExamples'

function Buttons() {
  return (
    <Grid container spacing={2}>
      <ButtonExamples title="Default buttons" />
      <ButtonExamples title="Outlined buttons" variant="outlined" />
      <ButtonExamples title="Contained buttons" variant="contained" />
    </Grid>
  )
}

export default observer(Buttons)
