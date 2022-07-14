import React from 'react'
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'

function Selectors() {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="subtitle1" textAlign="center">
          Selectors
        </Typography>
      </Grid>

      <Grid item xs={2}>
        <FormControl variant="filled" fullWidth>
          <InputLabel>Default</InputLabel>
          <Select>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl variant="filled" color="primary" fullWidth>
          <InputLabel>Primary</InputLabel>
          <Select>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <FormControl variant="filled" color="secondary" fullWidth>
          <InputLabel>Secondary</InputLabel>
          <Select>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default observer(Selectors)
