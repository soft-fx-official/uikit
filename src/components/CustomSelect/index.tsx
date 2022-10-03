import React, { useState } from 'react'

import {
  Autocomplete,
  Box,
  Drawer,
  FormControl,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
  useMediaQuery,
} from '@mui/material'

import { CustomTooltip as Tooltip } from '../'
import styles from './index.module.css'

interface CustomSelectProps {
  data: any
  options: Array<any>
  onChange: Function
  variant: 'standard' | 'outlined' | 'filled'
  optionTemplate: (props: any) => any
  label: string | null
  onFocus?: () => any
  onBlur?: () => any
  placeholder: string
  inputProps: (props: any) => object | void
  name: string
  modalProps: {
    style?: object
    placeholder: string
    title: string
  }
}

const CustomSelect = ({
  data,
  options,
  onChange,
  variant,
  optionTemplate,
  label,
  name,
  placeholder,
  onBlur,
  onFocus,
  inputProps,
  modalProps,
}: CustomSelectProps) => {
  const smallWindow = useMediaQuery('(max-width: 640px)')
  const [isOpenSelectModal, setSelectModalStatus] = useState(false)
  const handleChange = (value?: string) => {
    onChange(value)
  }
  const [modalSearchValue, setModalSearch] = useState('')

  const hasError = Boolean(data.fieldState.error)

  return (
    <Box className={styles.uikit_main}>
      <FormControl variant={variant} className={styles.uikit_select}>
        <Tooltip
          title={data.fieldState.error?.message || ''}
          arrow
          open={hasError}
          placement="right"
        >
          <Autocomplete
            options={options}
            open={!smallWindow && isOpenSelectModal}
            onOpen={() => setSelectModalStatus(true)}
            onClose={() => setSelectModalStatus(false)}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={(e, value) => {
              handleChange(value)
            }}
            autoHighlight
            getOptionLabel={option => option.name || ''}
            renderOption={(props, option) => optionTemplate({ option, props })}
            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
              <TextField
                {...params}
                name={name}
                label={label}
                placeholder={placeholder}
                variant={variant}
                color={hasError ? 'warning' : data.field.value && 'success'}
                error={hasError}
                InputProps={{
                  ...params.InputProps,
                  inputProps: params.inputProps,
                  ...inputProps(params),
                }}
              />
            )}
          />
        </Tooltip>
      </FormControl>
      <Drawer
        anchor="bottom"
        open={isOpenSelectModal && smallWindow}
        onClose={() => setSelectModalStatus(false)}
        sx={{
          borderRadius: '32px 32px 0px 0px',
          '.MuiDrawer-paper': { borderTop: 'none', borderRadius: '32px 32px 0px 0px' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: 'calc(100vh - 70px)',
            padding: '12px 16px',
            borderTop: 'none',
            borderRadius: '32px 32px 0px 0px',
            background: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
            ...modalProps.style,
          }}
          role="presentation"
        >
          <div className={styles.uikit_modalLine} />
          <Typography sx={{ fontWeight: 600, fontSize: '16px', lineHeight: '19px' }}>
            {modalProps.title}
          </Typography>
          <TextField
            name={name}
            value={modalSearchValue}
            label={label}
            onChange={e => setModalSearch(e.target.value)}
            placeholder={modalProps.placeholder}
            variant={variant}
            sx={{ width: '100%' }}
          />
          <Stack direction="column" sx={{ overflowY: 'auto', width: '100%' }}>
            {options
              .filter(option =>
                option.name.toLowerCase().trim().includes(modalSearchValue.toLowerCase().trim()),
              )
              .map(option =>
                optionTemplate({
                  option,
                  props: {
                    countryCode: option.code,
                    className: styles.uikit_option,
                    onClick: () => {
                      handleChange(option)
                      setModalSearch('')
                      setSelectModalStatus(false)
                    },
                  },
                }),
              )}
          </Stack>
        </Box>
      </Drawer>
    </Box>
  )
}

export { CustomSelect }
