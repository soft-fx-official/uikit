import React from 'react'
import { observer } from 'mobx-react-lite'

import Grid from '@mui/material/Grid'

import TextFieldsExamples from './TextFieldsExamples'

const TextFields = () => (
  <Grid container spacing={2}>
    <TextFieldsExamples title="Outlined text fields" variant="outlined" />
    <TextFieldsExamples title="Filled text fields" variant="filled" />
    <TextFieldsExamples title="Standard text fields" variant="standard" />
  </Grid>
)

export default observer(TextFields)
