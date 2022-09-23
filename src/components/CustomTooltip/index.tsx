import React, { useMemo } from 'react'

import { Tooltip, tooltipClasses, TooltipProps, useTheme } from '@mui/material'

import { colors } from '../../themes/colors'

type CustomTooltipProps = Pick<
  TooltipProps,
  'children' | 'title' | 'open' | 'arrow' | 'placement'
> & {
  color?: 'warning' | 'success' | 'default'
  timeout?: number
  onClose?: () => void
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  title,
  open,
  arrow = true,
  color = 'warning',
  placement = 'right',
  children,
  timeout = 200,
  onClose = () => {},
}) => {
  const theme = useTheme()

  const styles = useMemo(() => {
    const isDarkTheme = theme.palette.mode === 'dark'

    switch (color) {
      // todo move colors to theme vars
      case 'success':
        return {
          borderColor: 'success.main',
          background: isDarkTheme ? colors.green['700'] : colors.success['A100'],
        }

      case 'warning':
        return {
          borderColor: 'warning.main',
          background: isDarkTheme ? colors.error['700'] : colors.warning['A100'],
        }

      case 'default':
        return {
          borderColor: 'secondary.main',
          background: isDarkTheme ? colors.neutral['400'] : colors.light['A300'],
        }

      default:
        return {
          borderColor: 'primary.main',
          background: colors.primary['700'],
        }
    }
  }, [color, theme.palette.mode])

  return (
    <Tooltip
      title={title ?? ''}
      arrow={arrow}
      open={open}
      onClose={onClose}
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
                color: styles.background,
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
