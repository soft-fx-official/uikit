import React, { useEffect } from 'react'
import ReactCountryFlag from 'react-country-flag'
import { useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Box, InputAdornment } from '@mui/material'

import { useContext } from '../../main/context'
import CustomSelect from '../CustomSelect'
import styles from './index.module.css'

type CustomSelectCountriesProps = {
  form: any
  countries: any
  bus: any
}

interface IOptionTemplate {
  props: any
  option: any
}

const CustomSelectCountries: React.FC<CustomSelectCountriesProps> = ({ form, countries, bus }) => {
  const { i18next } = useContext()
  const { t } = useTranslation('', { i18n: i18next })

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
        bus.save('userCountry', () => value?.code || 'BY') // NOTE: Hotfix
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
              <InputAdornment position="start" className={styles.inputAdornment} {...params}>
                <ReactCountryFlag
                  countryCode={data.field.value || ''}
                  svg
                  className={styles.flag}
                />
              </InputAdornment>
            ),
        autoComplete: 'new-password',
      })}
      optionTemplate={({ props, option }: IOptionTemplate) => (
        <Box component="li" key={option?.code} className={styles?.option} {...props}>
          <ReactCountryFlag countryCode={option?.code || ''} svg className={styles.flag} />
          <Box className={styles.countryname}>{option?.name || props?.key}</Box>
        </Box>
      )}
    />
  )
}

export { CustomSelectCountries }
