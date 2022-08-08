import React, { useMemo } from 'react'

import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material'

import { colors } from '../../themes/main'

type CustomTooltipProps = Pick<
  TooltipProps,
  'children' | 'title' | 'open' | 'arrow' | 'placement'
> & {
  color?: 'warning' | 'success'
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  title,
  open,
  arrow = true,
  color = 'warning',
  placement = 'right',
  children,
}) => {
  const styles = useMemo(() => {
    switch (color) {
      case 'success':
        return {
          borderColor: 'success.main',
          background: colors.green['700'],
        }

      case 'warning':
      default:
        return {
          borderColor: 'warning.main',
          background: colors.error['700'],
        }
    }
  }, [color])

  return (
    <Tooltip
      title={title ?? ''}
      arrow={arrow}
      open={open}
      componentsProps={{
        popper: {
          sx: {
            '&[data-popper-placement*="bottom"]': {
              transform: 'unset !important',
              position: 'initial !important',
              [`.${tooltipClasses.tooltip}`]: {
                maxWidth: 'unset',
                textAlign: 'center',
              },
              [`.${tooltipClasses.arrow}`]: {
                left: '10px !important',
                transform: 'unset !important',
              },
            },
          },
        },
        tooltip: {
          sx: {
            padding: '10px 14px',
            border: '1px solid',
            borderColor: styles.borderColor,
            background: styles.background,
            [`& .${tooltipClasses.arrow}`]: {
              color: styles.background,
            },
            [`& .${tooltipClasses.arrow}::before`]: {
              border: '1px solid',
              borderColor: styles.borderColor,
            },
          },
        },
      }}
      PopperProps={{
        disablePortal: true,
        placement: placement,
        popperOptions: {
          modifiers: [
            {
              name: 'flip',
              options: {
                flipVariations: true,
                fallbackPlacements: ['bottom'],
              },
            },
          ],
        },
      }}
    >
      {children}
    </Tooltip>
  )
}

export { CustomTooltip }
