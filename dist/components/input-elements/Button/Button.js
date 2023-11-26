'use client';
import{__rest as e}from"tslib";import t,{useTooltip as o}from"../../util-elements/Tooltip/Tooltip.js";import{HorizontalPositions as i,Sizes as n}from"../../../lib/constants.js";import{border as r}from"../../../lib/shape.js";import{sizing as a}from"../../../lib/sizing.js";import{spacing as s}from"../../../lib/spacing.js";import{tremorTwMerge as l}from"../../../lib/tremorTwMerge.js";import{mergeRefs as m,makeClassName as c}from"../../../lib/utils.js";import d from"react";import{Transition as g}from"react-transition-group";import p from"../../../assets/LoadingSpinner.js";import{iconSizes as f,getButtonColors as h,getButtonProportions as u}from"./styles.js";const b=c("Button"),x=({loading:e,iconSize:t,iconPosition:o,Icon:n,needMargin:r,transitionState:m})=>{const c=r?o===i.Left?l(s.twoXs.negativeMarginLeft,s.xs.marginRight):l(s.twoXs.negativeMarginRight,s.xs.marginLeft):"",g=l(a.none.width,a.none.height),f={default:g,entering:g,entered:t,exiting:t,exited:g};return e?d.createElement(p,{className:l(b("icon"),"animate-spin shrink-0",c,f.default,f[m]),style:{transition:"width 150ms"}}):d.createElement(n,{className:l(b("icon"),"shrink-0",t,c)})},j=d.forwardRef(((a,s)=>{const{icon:c,iconPosition:p=i.Left,size:j=n.SM,color:w,variant:v="primary",disabled:S,loading:E=!1,loadingText:z,children:C,tooltip:M,className:N}=a,P=e(a,["icon","iconPosition","size","color","variant","disabled","loading","loadingText","children","tooltip","className"]),R=c,y=E||S,T=void 0!==R||E,k=E&&z,B=!(!C&&!k),L=l(f[j].height,f[j].width),I="light"!==v?l("rounded-tremor-default","shadow-tremor-input","dark:shadow-dark-tremor-input",r.sm.all):"",X=h(v,w),O=u(v)[j],{tooltipProps:Y,getReferenceProps:q}=o(300);return d.createElement(g,{in:E,timeout:50},(e=>d.createElement("button",Object.assign({ref:m([s,Y.refs.setReference]),className:l(b("root"),"flex-shrink-0 inline-flex justify-center items-center group font-medium outline-none",I,O.paddingX,O.paddingY,O.fontSize,X.textColor,X.bgColor,X.borderColor,X.hoverBorderColor,y?"opacity-50 cursor-not-allowed":l(h(v,w).hoverTextColor,h(v,w).hoverBgColor,h(v,w).hoverBorderColor),N),disabled:y},q,P),d.createElement(t,Object.assign({text:M},Y)),T&&p!==i.Right?d.createElement(x,{loading:E,iconSize:L,iconPosition:p,Icon:R,transitionState:e,needMargin:B}):null,k||C?d.createElement("span",{className:l(b("text"),"text-sm whitespace-nowrap")},k?z:C):null,T&&p===i.Right?d.createElement(x,{loading:E,iconSize:L,iconPosition:p,Icon:R,transitionState:e,needMargin:B}):null)))}));j.displayName="Button";export{x as ButtonIconOrSpinner,j as default};
