import React from 'react'

import ErrorIcon from '@mui/icons-material/Error'
import { Box, capitalize, Stack, Typography, useMediaQuery } from '@mui/material'

import { CustomTooltip as Tooltip } from '../CustomTooltip'

interface Error {
  message: string
  ref: { name: string }
  type: string
  types: { type: string }
}

interface MobileErrorTooltipProps {
  formErrors: { [key: string]: Error }
  fieldNames: { [key: string]: string }
}

export const MobileErrorTooltip: React.FC<MobileErrorTooltipProps> = ({
  formErrors,
  fieldNames,
}) => {
  const formErrorsObj = Object.assign({}, formErrors)
  delete formErrorsObj.password
  const errors: Error[] = Object.values(Object.assign({}, formErrorsObj))
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Tooltip
      title={
        <Stack alignItems="flex-start">
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: '700', paddingBottom: '6px', fontSize: '12px' }}
          >
            Please complete all data
          </Typography>
          {errors.map((e: Error, i: number) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <Box
                sx={theme => ({
                  color: theme.palette.warning.main,
                  display: 'inline',
                  marginRight: '4px',
                  '& svg': {
                    width: '16px',
                    height: '16px',
                  },
                })}
              >
                <ErrorIcon />
              </Box>
              <b>{capitalize(fieldNames[e.ref.name])}:</b>
              &nbsp;
              <Box sx={{ textAlign: 'left' }}>{e.message}</Box>
            </Box>
          ))}
        </Stack>
      }
      open={isMobile && errors.length > 0}
      arrow={false}
      placement="bottom"
    >
      <div></div>
    </Tooltip>
  )
}
