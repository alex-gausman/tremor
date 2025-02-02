import React from "react";
import { Color } from "../../../lib";
declare const ChartLegend: ({ payload }: any, categoryColors: Map<string, Color>, setLegendHeight: React.Dispatch<React.SetStateAction<number>>, activeLegend: string | undefined, onClick?: ((category: string, color: Color) => void) | undefined, enableLegendSlider?: boolean) => React.JSX.Element;
export default ChartLegend;
