import React from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'

import ErrorIcon from '@mui/icons-material/Error'
import { Box, capitalize, Stack, Typography, useMediaQuery } from '@mui/material'

import { CustomTooltip as Tooltip } from '../CustomTooltip'

interface MobileErrorTooltipProps {
  formErrors: FieldErrors<FieldValues>
  fieldNames?: { [key: string]: string }
  message?: string
}

const MobileErrorTooltip: React.FC<MobileErrorTooltipProps> = ({
  formErrors,
  fieldNames,
  message,
}) => {
  const formErrorsObj = Object.assign({}, formErrors)
  delete formErrorsObj.password
  const errors = Object.entries(Object.assign({}, formErrorsObj))
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
          {message
            ? message
            : errors.map(([fieldName, errorData], i: number) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap' }}>
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
                  <b>{fieldNames?.[fieldName] ? capitalize(fieldNames[fieldName]) : fieldName}:</b>
                  &nbsp;
                  <Box sx={{ textAlign: 'left' }}>{(errorData?.message as string) ?? ''}</Box>
                </Box>
              ))}
        </Stack>
      }
      open={isMobile && (errors.length > 0 || Boolean(message))}
      arrow={false}
      placement="bottom"
    >
      <div></div>
    </Tooltip>
  )
}

export { MobileErrorTooltip }
