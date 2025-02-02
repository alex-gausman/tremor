import React from "react";
import { Color, ValueFormatter } from "../../../lib/inputTypes";
import type { EventProps } from "components/chart-elements/common";
import { CustomTooltipType } from "components/chart-elements/common/CustomTooltipProps";
import type BaseAnimationTimingProps from "../common/BaseAnimationTimingProps";
type DonutChartVariant = "donut" | "pie";
export interface DonutChartProps extends BaseAnimationTimingProps {
    data: any[];
    category?: string;
    index?: string;
    colors?: Color[];
    variant?: DonutChartVariant;
    valueFormatter?: ValueFormatter;
    label?: string;
    showLabel?: boolean;
    showAnimation?: boolean;
    showTooltip?: boolean;
    noDataText?: string;
    className?: string;
    onValueChange?: (value: EventProps) => void;
    customTooltip?: React.ComponentType<CustomTooltipType>;
}
declare const DonutChart: React.ForwardRefExoticComponent<DonutChartProps & React.RefAttributes<HTMLDivElement>>;
export default DonutChart;
