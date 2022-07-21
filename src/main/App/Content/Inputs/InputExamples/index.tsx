import { FormControl, Grid, Input, InputLabel, Typography } from '@mui/material'

type TColor = 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined

const colors: TColor[] = [undefined, 'primary', 'secondary', 'success', 'error', 'info', 'warning']

interface InputExamplesProps {
  title: string
}

const InputExamples = ({ title }: InputExamplesProps) => (
  <>
    <Grid item xs={12}>
      <Typography variant="subtitle1" textAlign="center">
        {title}
      </Typography>
    </Grid>

    {colors.map((color, index) => (
      <Grid key={index} item xs={3}>
        <FormControl color={color} fullWidth>
          <InputLabel> {color ?? 'Default'}</InputLabel>
          <Input />
        </FormControl>
      </Grid>
    ))}
  </>
)

export default InputExamples
