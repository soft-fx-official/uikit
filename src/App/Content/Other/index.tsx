import { Grid } from '@mui/material'

import { Upload } from '../../../components'

const Other = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Upload
        title="Just Title"
        description="Only JPEG, PNG or PDF files with max size 10Mb"
        onSelect={v => console.log(v)}
      />
    </Grid>
  </Grid>
)

export default Other
