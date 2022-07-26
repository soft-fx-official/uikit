import { memo } from 'react'

import { SvgIcon, SvgIconProps } from '@mui/material'

import { ReactComponent as Icon } from './ic-corporate-account.svg'

const CorporateAccountIcon: React.FC<SvgIconProps> = props => (
  <SvgIcon {...props}>
    <Icon />
  </SvgIcon>
)

export default memo(CorporateAccountIcon)
