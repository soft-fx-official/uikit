import { memo } from 'react'

import { SvgIcon, SvgIconProps } from '@mui/material'

import { ReactComponent as Icon } from './ic-print.svg'

const PrintIcon: React.FC<SvgIconProps> = props => (
  <SvgIcon {...props}>
    <Icon />
  </SvgIcon>
)

export default memo(PrintIcon)
