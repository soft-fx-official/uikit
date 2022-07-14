import React from 'react'
import { FormControlLabel, Grid, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'
import ThemeSwitch from '../../../components/ThemeSwitch'
import { useThemeContext } from '../../../theme/context'

function Header() {
  const { isDark, toggleColorMode } = useThemeContext()

  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center">
      <Grid item xs={2}>
        <Typography variant="subtitle1">UiKit</Typography>
      </Grid>
      <Grid item xs={2}>
        <FormControlLabel
          control={<ThemeSwitch value={isDark} onChange={toggleColorMode} />}
          label="MUI switch"
        />
      </Grid>
    </Grid>
  )
}

export default observer(Header)
