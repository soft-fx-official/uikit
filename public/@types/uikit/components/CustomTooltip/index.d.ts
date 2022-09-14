import React from 'react';
import { TooltipProps } from '@mui/material';
declare type CustomTooltipProps = Pick<TooltipProps, 'children' | 'title' | 'open' | 'arrow' | 'placement'> & {
    color?: 'warning' | 'success' | 'default';
    timeout?: number;
    stylesProp?: Record<string, any>;
    stylesName?: string;
    onClose?: () => void;
};
declare const CustomTooltip: React.FC<CustomTooltipProps>;
export { CustomTooltip };
