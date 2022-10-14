import React from 'react'

import { Grow, Popper, PopperProps } from '@mui/material'

export const CustromPopperAutocomplete = ({ children, ...rest }: PopperProps) => (
  <Popper placement="bottom-start" transition {...rest}>
    {({ TransitionProps }) => (
      <Grow in={rest.open} {...TransitionProps}>
        {children as React.ReactElement}
      </Grow>
    )}
  </Popper>
)
