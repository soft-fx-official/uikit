import React from 'react'
import { observer } from 'mobx-react-lite'

import { Grid, MenuItem, TextField, Typography } from '@mui/material'

type TColor = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined

const colors: TColor[] = [undefined, 'primary', 'secondary', 'success', 'error', 'info', 'warning']

interface SelectExamplesProps {
  title: string
  variant: 'standard' | 'outlined' | 'filled'
}

const SelectExamples = ({ title, variant }: SelectExamplesProps) => (
  <>
    <Grid item xs={12}>
      <Typography variant="subtitle1" textAlign="center">
        {title}
      </Typography>
    </Grid>

    {colors.map(color => (
      <Grid key={color} item xs={3}>
        <TextField select variant={variant} fullWidth color={color} label={color ?? 'Default'}>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <MenuItem value={3}>Option 3</MenuItem>
        </TextField>
      </Grid>
    ))}
  </>
)

export default observer(SelectExamples)
