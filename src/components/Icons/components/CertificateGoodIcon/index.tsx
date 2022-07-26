import { memo } from 'react'

import { SvgIcon, SvgIconProps } from '@mui/material'

import { ReactComponent as Icon } from './ic-certificate-good.svg'

const CertificateGoodIcon: React.FC<SvgIconProps> = props => (
  <SvgIcon {...props}>
    <Icon />
  </SvgIcon>
)

export default memo(CertificateGoodIcon)
