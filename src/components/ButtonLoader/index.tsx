import React from 'react'

import { Button, CircularProgress } from '@mui/material'

interface IButtonLoader {
  isLoad: boolean
  label: string
  buttonProps?: any // NOTE: TS
}

const ButtonLoader = ({ isLoad, label, buttonProps }: IButtonLoader) => (
  <Button
    disabled={isLoad}
    startIcon={isLoad && <CircularProgress color="secondary" size={15} />}
    variant="contained"
    size="large"
    sx={{
      '& .MuiButton-startIcon': {
        position: 'absolute',
        left: '20px',
      },
    }}
    {...buttonProps}
  >
    {label}
  </Button>
)

export { ButtonLoader }
