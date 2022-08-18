import React, { useMemo } from 'react'

import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material'

import { colors } from '../../themes/colors'

type CustomTooltipProps = Pick<
  TooltipProps,
  'children' | 'title' | 'open' | 'arrow' | 'placement'
> & {
  color?: 'warning' | 'success' | 'default'
  timeout?: number
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  title,
  open,
  arrow = true,
  color = 'warning',
  placement = 'right',
  children,
  timeout = 200,
}) => {
  const styles = useMemo(() => {
    switch (color) {
      case 'success':
        return {
          borderColor: 'success.main',
          background: colors.green['700'],
        }

      case 'warning':
        return {
          borderColor: 'warning.main',
          background: colors.error['700'],
        }

      case 'default':
        return {
          borderColor: 'secondary.main',
          background: colors.light['600'],
        }

      default:
        return {
          borderColor: 'primary.main',
          background: colors.primary['700'],
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
      TransitionProps={{ timeout }}
    >
      {children}
    </Tooltip>
  )
}

export { CustomTooltip }
