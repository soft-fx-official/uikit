import ReactCountryFlag from 'react-country-flag'
import { capitalize } from 'lodash'

import { Autocomplete, AutocompleteProps, Box, InputAdornment, TextField } from '@mui/material'

import { CustromPopperAutocomplete } from '../CustomPopperAutocomplete'
import { CustomTooltip as Tooltip } from '../CustomTooltip'
import styles from './index.module.css'

export interface CustomAutocompleteCountriesProps<T>
  extends Omit<AutocompleteProps<T, boolean, true, boolean, React.ElementType>, 'renderInput'> {
  errorMessage?: string
  label?: string
  placeholder?: string
  showTooltip?: boolean
}

export const CustomAutocompleteCountries: React.FC<CustomAutocompleteCountriesProps<any[]>> = ({
  errorMessage,
  label,
  placeholder,
  showTooltip,
  ...rest
}) => {
  const hasError = Boolean(errorMessage)

  return (
    <Tooltip title={errorMessage || ''} arrow open={showTooltip} placement="right">
      <Autocomplete
        PopperComponent={CustromPopperAutocomplete}
        autoHighlight
        getOptionLabel={(option: any) => capitalize(option.name)}
        renderOption={(props, option: any) => (
          <Box component="li" className={styles.option} {...props}>
            <ReactCountryFlag
              countryCode={option.code || option.countryCode}
              svg
              className={styles.flag}
            />
            <Box className={styles.optionName}>{capitalize(option.name)}</Box>
          </Box>
        )}
        renderInput={params => (
          <TextField
            {...params}
            name="country"
            label={label}
            placeholder={placeholder}
            variant="filled"
            // @ts-ignore
            color={hasError ? 'warning' : rest.value && 'success'}
            error={hasError}
            InputProps={{
              ...params.InputProps,
              inputProps: params.inputProps,
              startAdornment: rest.value && (
                <InputAdornment position="start" className={styles.inputAdornment}>
                  <ReactCountryFlag
                    // @ts-ignore
                    countryCode={rest.value.countryCode || rest.value}
                    svg
                    className={styles.flag}
                  />
                </InputAdornment>
              ),
            }}
          />
        )}
        {...rest}
      />
    </Tooltip>
  )
}
