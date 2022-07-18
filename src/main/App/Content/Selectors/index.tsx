import React from 'react'
import { observer } from 'mobx-react-lite'

import { Grid } from '@mui/material'

import SelectExamples from './SelectExamples'

const Selectors = () => (
  <Grid container spacing={2}>
    <SelectExamples variant="outlined" title="Outlined select" />
    <SelectExamples variant="filled" title="Filled select" />
    <SelectExamples variant="standard" title="Standard select" />
  </Grid>
)

export default observer(Selectors)
