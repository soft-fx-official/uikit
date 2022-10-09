import React, { useEffect, useMemo, useRef } from 'react'

import { Tooltip, tooltipClasses, TooltipProps, useTheme } from '@mui/material'

import { colors } from '../../themes/colors'

type CustomTooltipProps = Pick<
  TooltipProps,
  'children' | 'title' | 'open' | 'arrow' | 'placement'
> & {
  color?: 'warning' | 'success' | 'default'
  isDisabled?: boolean
  timeout?: number
  arrowBottomOffset?: number
  fallbackPlacements?: ('bottom-end' | 'bottom-start' | 'bottom')[]
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
  arrowBottomOffset = 10,
  fallbackPlacements = ['bottom'],
  onClose = () => {},
  isDisabled = false,
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

  // Note: for fade animation to prevent the tooltip from being displayed with an empty title
  const prevTitle = useRef<NonNullable<React.ReactNode>>('')
  useEffect(() => {
    prevTitle.current = title
  }, [title])

  if (isDisabled) return children

  return (
    <Tooltip
      title={title || prevTitle.current}
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
                marginTop: '8px !important',
              },
              [`.${tooltipClasses.arrow}`]: {
                left: `${arrowBottomOffset}px !important`,
                transform: 'unset !important',
                color: styles.background,
              },
            },
            '&[data-popper-placement="bottom-end"]': {
              [`.${tooltipClasses.arrow}`]: {
                left: 'unset !important',
                right: `${arrowBottomOffset}px !important`,
              },
            },
            // todo handle transition
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
                fallbackPlacements: fallbackPlacements,
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
