import { Button, Grid, Typography } from '@mui/material'

type TColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | undefined

const colors: TColor[] = [
  undefined,
  'inherit',
  'primary',
  'secondary',
  'success',
  'error',
  'info',
  'warning',
]

interface ButtonExamplesProps {
  title: string
  variant?: 'outlined' | 'contained'
}

const ButtonExamples = ({ title, variant }: ButtonExamplesProps) => (
  <>
    <Grid item xs={12}>
      <Typography variant="subtitle1" textAlign="center">
        {title}
      </Typography>
    </Grid>

    {colors.map((color, index) => (
      <Grid key={index} item xs={3}>
        <Button color={color} variant={variant} fullWidth>
          {color ?? 'Default'}
        </Button>
      </Grid>
    ))}
  </>
)

export default ButtonExamples
