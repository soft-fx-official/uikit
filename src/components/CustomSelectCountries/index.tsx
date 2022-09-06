import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { useController } from 'react-hook-form'
import { TFunction } from 'react-i18next'

import { Box, InputAdornment } from '@mui/material'

import { CustomSelect } from '../CustomSelect'
import styles from './index.module.css'

type CustomSelectCountriesProps = {
  form: any
  countries: Array<object>
  t: TFunction<'', undefined>
}

const CustomSelectCountries: React.FC<CustomSelectCountriesProps> = ({ form, countries, t }) => {
  const data = useController({
    name: 'country',
    control: form.control,
  })

  const handleCountryChange = (countryCode?: string) => {
    data.field.onChange(countryCode)
  }

  return (
    <CustomSelect
      variant="filled"
      data={data}
      onChange={(value: { code: string | undefined }) => {
        handleCountryChange(value?.code)
      }}
      options={countries}
      name="country"
      label={t('chooseCountry')}
      placeholder={t('chooseCountryPlaceholder')}
      modalProps={{
        placeholder: t('searchCountryInput'),
        title: t('modalCountriesTitle'),
      }}
      inputProps={params => ({
        startAdornment: params.inputProps['aria-expanded']
          ? null
          : data.field.value && (
              <InputAdornment
                position="start"
                style={{
                  marginTop: 'unset',
                  marginLeft: '4px',
                  '& > img': {
                    marginRight: 'unset',
                  },
                }}
                {...params}
              >
                <ReactCountryFlag
                  countryCode={data.field.value || ''}
                  svg
                  className={styles.flag}
                />
              </InputAdornment>
            ),
        autoComplete: 'new-password',
      })}
      optionTemplate={({ props, option }) => (
        <Box component="li" key={option?.code} className={styles?.option} {...props}>
          <ReactCountryFlag countryCode={option?.code || ''} svg className={styles.flag} />
          <Box className={styles.countryName}>{option?.name || props?.key}</Box>
        </Box>
      )}
    />
  )
}

export { CustomSelectCountries }
