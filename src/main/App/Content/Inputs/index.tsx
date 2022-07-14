import React from 'react'
import { FormControl, Grid, Input, InputLabel } from '@mui/material'
import { observer } from 'mobx-react-lite'

function Inputs() {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={2}>
        <FormControl variant="filled" fullWidth>
          <InputLabel>Default</InputLabel>
          <Input />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl variant="filled" fullWidth>
          <InputLabel>Primary</InputLabel>
          <Input color="primary" />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl variant="filled" fullWidth>
          <InputLabel>Secondary</InputLabel>
          <Input color="secondary" />
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default observer(Inputs)
