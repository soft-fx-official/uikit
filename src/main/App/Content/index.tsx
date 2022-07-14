import React from 'react'
import { Grid } from '@mui/material'
import { observer } from 'mobx-react-lite'
import Buttons from './Buttons'
import Inputs from './Inputs'
import Selectors from './Selectors'

function Content() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Buttons />
      </Grid>
      <Grid item xs={12}>
        <Inputs />
      </Grid>
      <Grid item xs={12}>
        <Selectors />
      </Grid>
    </Grid>
  )
}

export default observer(Content)
