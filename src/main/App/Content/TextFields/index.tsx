import React from 'react'
import Grid from '@mui/material/Grid'
import { observer } from 'mobx-react-lite'
import TextFieldsExamples from './TextFieldsExamples'

function TextFields() {
  return (
    <Grid container spacing={2}>
      <TextFieldsExamples title="Outlined text fields" variant="outlined" />
      <TextFieldsExamples title="Filled text fields" variant="filled" />
      <TextFieldsExamples title="Standard text fields" variant="standard" />
    </Grid>
  )
}

export default observer(TextFields)
