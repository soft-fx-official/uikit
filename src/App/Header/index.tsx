import React from 'react'

import { FormControlLabel, Grid } from '@mui/material'

import { ThemeSwitch } from '../../components'
import { useContext } from '../../main/context'

const Header = () => {
  const { state, bus } = useContext()

  const onChange = React.useCallback(() => {
    bus.say('toggleDarkTheme', {})
  }, [state.main.isDarkTheme])

  return (
    <Grid container spacing={2} justifyContent="end" alignItems="center">
      <Grid item>
        <FormControlLabel
          control={<ThemeSwitch onChange={onChange} isDarkTheme={state.main.isDarkTheme} />}
          label=""
        />
      </Grid>
    </Grid>
  )
}

export { Header }
