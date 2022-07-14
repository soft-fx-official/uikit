import React from 'react'
import { Button, Grid } from '@mui/material'
import { observer } from 'mobx-react-lite'

function Buttons() {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={2}>
        <Button fullWidth>Default</Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined" fullWidth>
          Outlined
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" fullWidth>
          Contained
        </Button>
      </Grid>
    </Grid>
  )
}

export default observer(Buttons)
