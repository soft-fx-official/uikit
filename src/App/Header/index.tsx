import { FormControlLabel, Grid } from '@mui/material'

import { ThemeSwitch } from '../../components'

interface IHeader {
  isDarkTheme: boolean
  setIsDarkTheme: (isDarkTheme: boolean) => void
}

const Header = ({ isDarkTheme, setIsDarkTheme }: IHeader) => (
  <Grid container spacing={2} justifyContent="end" alignItems="center">
    <Grid item>
      <FormControlLabel
        control={
          <ThemeSwitch onChange={() => setIsDarkTheme(!isDarkTheme)} isDarkTheme={isDarkTheme} />
        }
        label=""
      />
    </Grid>
  </Grid>
)

export { Header }
