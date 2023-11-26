"use strict";var e=require("tslib"),r=require("../../util-elements/Tooltip/Tooltip.cjs"),t=require("../../../lib/theme.cjs"),s=require("../../../lib/tremorTwMerge.cjs"),a=require("../../../lib/utils.cjs");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=o(require("react"));const i=a.makeClassName("ProgressBar"),n={xs:{radius:15,strokeWidth:3},sm:{radius:19,strokeWidth:4},md:{radius:32,strokeWidth:6},lg:{radius:52,strokeWidth:8},xl:{radius:80,strokeWidth:10}};const c=l.default.forwardRef(((o,c)=>{const{value:d,size:u="md",className:m,showAnimation:f=!0,color:k,tooltip:h,radius:g,strokeWidth:p,children:b}=o,N=e.__rest(o,["value","size","className","showAnimation","color","tooltip","radius","strokeWidth","children"]),v=void 0===(w=d)?0:w>100?100:w;var w;const x=null!=g?g:n[u].radius,W=null!=p?p:n[u].strokeWidth,j=x-W/2,y=2*j*Math.PI,C=y-v/100*y,{tooltipProps:T,getReferenceProps:E}=r.useTooltip();return l.default.createElement(l.default.Fragment,null,l.default.createElement(r.default,Object.assign({text:h},T)),l.default.createElement("div",Object.assign({ref:c,className:s.tremorTwMerge(i("root"),"flex flex-col items-center justify-center",m)},N),l.default.createElement("svg",Object.assign({ref:T.refs.setReference,width:2*x,height:2*x,viewBox:`0 0 ${2*x} ${2*x}`,className:"transform -rotate-90"},E),l.default.createElement("circle",{r:j,cx:x,cy:x,strokeWidth:W,fill:"transparent",stroke:"",strokeLinecap:"round",className:s.tremorTwMerge("transition-colors ease-linear",k?`${a.getColorClassNames(k,t.colorPalette.background).strokeColor} opacity-20 dark:opacity-25`:"stroke-tremor-brand-muted/50 dark:stroke-dark-tremor-brand-muted")}),v>=0?l.default.createElement("circle",{r:j,cx:x,cy:x,strokeWidth:W,strokeDasharray:y+" "+y,strokeDashoffset:C,fill:"transparent",stroke:"",strokeLinecap:"round",className:s.tremorTwMerge("transition-colors ease-linear",k?a.getColorClassNames(k,t.colorPalette.background).strokeColor:"stroke-tremor-brand dark:stroke-dark-tremor-brand",f?"transition-all duration-300 ease-in-out":"")}):null),l.default.createElement("div",{className:s.tremorTwMerge("absolute flex")},b)))}));c.displayName="ProgressCircle",module.exports=c;
