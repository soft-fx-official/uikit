import { useEffect, useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import { capitalize } from 'lodash'

import {
  Autocomplete,
  AutocompleteProps,
  Box,
  Grow,
  InputAdornment,
  Popper,
  PopperProps,
  TextField,
  Typography,
} from '@mui/material'

import { CustomTooltip as Tooltip } from '../CustomTooltip'
import styles from './index.module.css'

interface CustomAutocompleteCountriesProps extends AutocompleteProps {
  options: any[]
  isLoading?: boolean
  errorMessage?: string
  onChange: (value: any) => void
  value: any
  label?: string
  placeholder?: string
  withoutTooltip?: boolean
  type?: 'country' | 'phone' | 'nationality'
}

const CustomPopper = ({ children, ...rest }: PopperProps) => (
  <Popper placement="bottom-start" transition {...rest}>
    {({ TransitionProps }) => (
      <Grow in={rest.open} {...TransitionProps}>
        {children}
      </Grow>
    )}
  </Popper>
)

export const CustomAutocompleteCountries: React.FC<CustomAutocompleteCountriesProps> = ({
  options,
  isLoading,
  errorMessage,
  onChange,
  value,
  label,
  placeholder,
  withoutTooltip = false,
  type,
  ...rest
}) => {
  const hasError = Boolean(errorMessage)
  const [phoneValue, setPhoneValue] = useState('')
  const [open, setOpen] = useState(false)

  const getOptionValue = (option: { phoneCode: string; name: string }) =>
    `${option.phoneCode}                                   ${option.name}`

  const beuteNumber = (number: string): string => {
    if (/[0-9]/.test(number)) {
      return number.slice(0, number.search(/\d\D*$/) + 1)
    }
    return number
  }

  useEffect(() => {
    if (type === 'phone') {
      if (value) setPhoneValue(value.phoneCode)
      if (open) setPhoneValue('')
    }
  }, [type, value, open])

  return (
    <Tooltip
      title={errorMessage || ''}
      arrow
      open={hasError}
      placement="right"
      isDisabled={withoutTooltip}
    >
      <Autocomplete
        open={open}
        onOpen={() => {
          setOpen(true)
          setPhoneValue('')
        }}
        onClose={() => setOpen(false)}
        fullWidth
        options={options}
        onChange={(_, value) => {
          onChange(value)
        }}
        isOptionEqualToValue={(option, value) => option.code === value.code}
        autoHighlight
        getOptionLabel={option =>
          type === 'phone' ? getOptionValue(option) : capitalize(option.name)
        }
        inputValue={type === 'phone' ? phoneValue : undefined}
        onInputChange={(_, inputValue) => {
          if (inputValue && type === 'phone') setPhoneValue(beuteNumber(inputValue))
        }}
        renderOption={(props, option) => {
          let countryName = capitalize(option.name)
          countryName = countryName.length > 17 ? `${countryName.substring(0, 17)}...` : countryName

          return (
            <Box component="li" className={styles.option} {...props}>
              <ReactCountryFlag
                countryCode={option.code || option.countryCode}
                svg
                className={styles.flag}
              />
              <Box className={styles.countryName}>{countryName}</Box>
              {option.phoneCode && (
                <Typography className={styles.phoneCode} color="secondary" variant="caption">
                  {option.phoneCode}
                </Typography>
              )}
            </Box>
          )
        }}
        componentsProps={{
          paper: {
            sx: theme => ({
              width: type === 'phone' ? 300 : 'auto',
              boxShadow: `3px 0 0 0 ${theme.palette.background.paper}, -3px 0 0 0 ${theme.palette.background.paper}`,
              margin: '10px 0',
            }),
          },
        }}
        loading={isLoading}
        PopperComponent={CustomPopper}
        renderInput={params => (
          <TextField
            {...params}
            name={type}
            label={type === 'phone' ? undefined : label}
            placeholder={placeholder}
            variant="filled"
            color={hasError ? 'warning' : value && 'success'}
            error={hasError}
            InputProps={{
              ...params.InputProps,

              inputProps: params.inputProps,
              classes: { root: type === 'phone' ? styles.inputRoot : '' },
              startAdornment: value && (
                <InputAdornment position="start" className={styles.inputAdornment}>
                  <ReactCountryFlag
                    countryCode={value.code || value.countryCode || value}
                    svg
                    className={styles.flag}
                  />
                </InputAdornment>
              ),
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
        {...rest}
      />
    </Tooltip>
  )
}
