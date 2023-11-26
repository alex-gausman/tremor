'use client';
import{__rest as e}from"tslib";import t,{useTooltip as r}from"../../util-elements/Tooltip/Tooltip.js";import{Sizes as o}from"../../../lib/constants.js";import{spacing as i}from"../../../lib/spacing.js";import{colorPalette as s}from"../../../lib/theme.js";import{tremorTwMerge as a}from"../../../lib/tremorTwMerge.js";import{mergeRefs as m,getColorClassNames as l,makeClassName as n}from"../../../lib/utils.js";import c from"react";import{badgeProportions as p,iconSizes as d}from"./styles.js";const f=n("Badge"),g=c.forwardRef(((n,g)=>{const{color:b,icon:u,size:h=o.SM,tooltip:x,className:j,children:k}=n,w=e(n,["color","icon","size","tooltip","className","children"]),N=u||null,{tooltipProps:y,getReferenceProps:E}=r();return c.createElement("span",Object.assign({ref:m([g,y.refs.setReference]),className:a(f("root"),"w-max flex-shrink-0 inline-flex justify-center items-center cursor-default rounded-tremor-full",b?a(l(b,s.background).bgColor,l(b,s.text).textColor,"bg-opacity-20 dark:bg-opacity-25"):a("bg-tremor-brand-muted text-tremor-brand-emphasis","dark:bg-dark-tremor-brand-muted dark:text-dark-tremor-brand-emphasis"),p[h].paddingX,p[h].paddingY,p[h].fontSize,j)},E,w),c.createElement(t,Object.assign({text:x},y)),N?c.createElement(N,{className:a(f("icon"),"shrink-0",i.twoXs.negativeMarginLeft,i.xs.marginRight,d[h].height,d[h].width)}):null,c.createElement("p",{className:a(f("text"),"text-sm whitespace-nowrap")},k))}));g.displayName="Badge";export{g as default};
