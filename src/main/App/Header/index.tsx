import React from 'react'
import { FormControlLabel, Grid } from '@mui/material'
import { observer } from 'mobx-react-lite'
import ThemeSwitch from '../../../components/ThemeSwitch'
import { useThemeContext } from '../../../theme/context'

function Header() {
  const { isDark, toggleColorMode } = useThemeContext()

  return (
    <Grid container spacing={2} justifyContent="end" alignItems="center">
      <Grid item>
        <FormControlLabel
          control={<ThemeSwitch value={isDark} onChange={toggleColorMode} />}
          label="MUI switch"
        />
      </Grid>
    </Grid>
  )
}

export default observer(Header)
