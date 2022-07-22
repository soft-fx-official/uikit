import { FormControlLabel, Grid } from '@mui/material'

import { ThemeSwitch } from '../../../components'
import { useThemeContext } from '../../context'

const Header = () => {
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

export { Header }
