import React from 'react'
import { FieldErrors, FieldValues } from 'react-hook-form'

import ErrorIcon from '@mui/icons-material/Error'
import { Box, capitalize, Stack, Typography, useMediaQuery } from '@mui/material'

import { CustomTooltip as Tooltip } from '../CustomTooltip'

type ErrorMessageItemProps = {
  fieldName?: string
  message: string
}

const ErrorMessageItem = ({ fieldName, message }: ErrorMessageItemProps) => (
  <Box>
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

      {fieldName && (
        <Typography component="b" sx={{ fontSize: '10px', lineHeight: '16px', fontWeight: '700' }}>
          {`${fieldName}: `}
        </Typography>
      )}

      {message}
    </Typography>
  </Box>
)

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

  const isMobile = useMediaQuery('(max-width: 768px)') // TODO: fix on breakpoints
  const hasErrors = errors.length > 0 || Boolean(message)

  const showTooltip = hasErrors && isMobile

  if (!showTooltip) return null

  return (
    <Tooltip
      open={showTooltip}
      arrow={false}
      placement="bottom"
      marginTopWhenBottom={marginTop}
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
            {message ? (
              <ErrorMessageItem message={message} />
            ) : (
              errors.map(({ fieldName, errorMessage }, i: number) => (
                <ErrorMessageItem
                  fieldName={
                    fieldNames?.[fieldName] ? capitalize(fieldNames[fieldName]) : fieldName
                  }
                  message={errorMessage}
                  key={i}
                />
              ))
            )}
          </Stack>
        </Box>
      }
    >
      <div></div>
    </Tooltip>
  )
}

export { MobileErrorTooltip }
