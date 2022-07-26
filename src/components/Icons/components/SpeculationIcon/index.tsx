import { memo } from 'react'

import { SvgIcon, SvgIconProps } from '@mui/material'

import { ReactComponent as Icon } from './ic-speculation.svg'

const SpeculationIcon: React.FC<SvgIconProps> = props => (
  <SvgIcon {...props}>
    <Icon />
  </SvgIcon>
)

export default memo(SpeculationIcon)
