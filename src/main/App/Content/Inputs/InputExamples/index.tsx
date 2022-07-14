import React from 'react'
import { FormControl, Grid, Input, InputLabel, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'

type TColor = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined

const colors: TColor[] = [undefined, 'primary', 'secondary', 'success', 'error', 'info', 'warning']

interface InputExamplesProps {
  title: string
}

function InputExamples({ title }: InputExamplesProps) {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="subtitle1" textAlign="center">
          {title}
        </Typography>
      </Grid>

      {colors.map(color => (
        <Grid item xs={3}>
          <FormControl color={color} fullWidth>
            <InputLabel> {color ?? 'Default'}</InputLabel>
            <Input />
          </FormControl>
        </Grid>
      ))}
    </>
  )
}

export default observer(InputExamples)
