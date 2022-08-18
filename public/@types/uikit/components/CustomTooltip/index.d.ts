import React from 'react';
import { TooltipProps } from '@mui/material';
declare type CustomTooltipProps = Pick<TooltipProps, 'children' | 'title' | 'open' | 'arrow' | 'placement'> & {
    color?: 'warning' | 'success' | 'default';
    timeout?: number;
};
declare const CustomTooltip: React.FC<CustomTooltipProps>;
export { CustomTooltip };
