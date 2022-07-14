import React from 'react'
import { Grid } from '@mui/material'
import { observer } from 'mobx-react-lite'
import SelectExamples from './SelectExamples'

function Selectors() {
  return (
    <Grid container spacing={2}>
      <SelectExamples variant="outlined" title="Outlined select" />
      <SelectExamples variant="filled" title="Filled select" />
      <SelectExamples variant="standard" title="Standard select" />
    </Grid>
  )
}

export default observer(Selectors)
