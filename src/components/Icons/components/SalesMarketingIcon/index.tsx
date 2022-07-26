import { memo } from 'react'

import { SvgIcon, SvgIconProps } from '@mui/material'

import { ReactComponent as Icon } from './ic-sales-marketing.svg'

const SalesMarketingIcon: React.FC<SvgIconProps> = props => (
  <SvgIcon {...props}>
    <Icon />
  </SvgIcon>
)

export default memo(SalesMarketingIcon)
