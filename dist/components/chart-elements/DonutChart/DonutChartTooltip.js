import{spacing as e}from"../../../lib/spacing.js";import{tremorTwMerge as o}from"../../../lib/tremorTwMerge.js";import r from"react";import{ChartTooltipFrame as l,ChartTooltipRow as t}from"../common/ChartTooltip.js";const a=({active:a,payload:m,valueFormatter:n})=>{if(a&&(null==m?void 0:m[0])){const a=null==m?void 0:m[0];return r.createElement(l,null,r.createElement("div",{className:o(e.twoXl.paddingX,e.sm.paddingY)},r.createElement(t,{value:n(a.value),name:a.name,color:a.payload.color})))}return null};export{a as DonutChartTooltip};
