import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import { Grid, Typography } from '@mui/material'

import { ButtonCard } from '../../../../components'
import ButtonExamples from './ButtonExamples'

const Buttons = () => (
  <Grid container spacing={2} sx={{ paddingBottom: '40px' }}>
    <ButtonExamples title="Default buttons" />
    <ButtonExamples title="Outlined buttons" variant="outlined" />
    <ButtonExamples title="Contained buttons" variant="contained" />

    <Grid item xs={12}>
      <ButtonCard>
        <AppRegistrationIcon />
        <Typography variant="subtitle1">Just Text</Typography>
      </ButtonCard>
    </Grid>
  </Grid>
)

export default Buttons
