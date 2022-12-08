import React from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'

import ErrorIcon from '@mui/icons-material/Error'
import { Box, capitalize, Stack, Typography, useMediaQuery } from '@mui/material'

import { CustomTooltip as Tooltip } from '../CustomTooltip'

interface MobileErrorTooltipProps {
  formErrors?: FieldErrors<FieldValues>
  fieldNames?: { [key: string]: string }
  message?: string
  marginTop?: string
}

type ParsedErrors = Array<{ fieldName: string; errorMessage: string }>

const MobileErrorTooltip: React.FC<MobileErrorTooltipProps> = ({
  formErrors,
  fieldNames,
  message,
  marginTop,
}) => {
  const errors: ParsedErrors = Object.entries(Object.assign({}, formErrors)).reduce<ParsedErrors>(
    (acc, [fieldName, errorData]) => {
      if (errorData?.types) {
        const errorMessages = Object.values(Object.assign({}, errorData?.types)).flat()

        errorMessages.forEach((errorMessage: string) => acc.push({ fieldName, errorMessage }))
      } else {
        const errorMessage = (errorData?.message as string) || ''

        acc.push({ fieldName, errorMessage })
      }

      return acc
    },
    [],
  )

  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <Tooltip
      title={
        <Box>
          <Typography
            textAlign="start"
            variant="subtitle2"
            sx={{ fontWeight: '700', marginBottom: '6px', fontSize: '12px', lineHeight: '16px' }}
          >
            These fields are mandatory
          </Typography>
          <Stack alignItems="flex-start" spacing="6px">
            {message
              ? message
              : errors.map(({ fieldName, errorMessage }, i: number) => (
                  <Box key={i}>
                    <Typography
                      component="p"
                      sx={{
                        fontSize: '10px',
                        lineHeight: '16px',
                        textAlign: 'start',
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          display: 'inline-block',
                          lineHeight: '0px',
                          verticalAlign: 'bottom',
                          marginRight: '4px',
                        }}
                      >
                        <ErrorIcon sx={{ fontSize: '16px' }} color="warning" />
                      </Box>

                      <Typography
                        component="b"
                        sx={{ fontSize: '10px', lineHeight: '16px', fontWeight: '700' }}
                      >
                        {`${
                          fieldNames?.[fieldName] ? capitalize(fieldNames[fieldName]) : fieldName
                        }: `}
                      </Typography>

                      {errorMessage}
                    </Typography>
                  </Box>
                ))}
          </Stack>
        </Box>
      }
      open={isMobile && (errors.length > 0 || Boolean(message))}
      arrow={false}
      placement="bottom"
      marginTopWhenBottom={marginTop}
    >
      <div></div>
    </Tooltip>
  )
}

export { MobileErrorTooltip }
