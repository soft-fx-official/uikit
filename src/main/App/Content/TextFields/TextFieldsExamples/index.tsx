import React, { memo } from 'react'
import { Grid, TextField, Typography } from '@mui/material'

type TColor = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined

const colors: TColor[] = [undefined, 'primary', 'secondary', 'success', 'error', 'info', 'warning']

interface TextFieldsExamplesProps {
  title: string
  variant: 'standard' | 'outlined' | 'filled'
}

function TextFieldsExamples({ title, variant }: TextFieldsExamplesProps) {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="subtitle1" textAlign="center">
          {title}
        </Typography>
      </Grid>

      {colors.map(color => (
        <Grid item xs={3}>
          <TextField label={color ?? 'Default'} variant={variant} fullWidth />
        </Grid>
      ))}
    </>
  )
}

export default memo(TextFieldsExamples)
