'use client';
"use strict";var e=require("tslib"),t=require("react"),a=require("recharts"),r=require("../../../lib/constants.cjs"),o=require("../../../lib/theme.cjs"),l=require("../../../lib/tremorTwMerge.cjs"),s=require("../../../lib/utils.cjs"),n=require("../../chart-elements/common/utils.cjs"),i=require("../../chart-elements/common/NoData.cjs");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=c(t);const m=u.default.forwardRef(((t,c)=>{const{data:m=[],categories:d=[],index:f,stack:p=!1,colors:C=o.themeColorRange,showAnimation:y=!1,animationDuration:g=900,showGradient:h=!0,curveType:x="linear",connectNulls:N=!1,noDataText:v,className:E}=t,k=e.__rest(t,["data","categories","index","stack","colors","showAnimation","animationDuration","showGradient","curveType","connectNulls","noDataText","className"]),j=n.constructCategoryColors(d,C);return u.default.createElement("div",Object.assign({ref:c,className:l.tremorTwMerge("w-28 h-12",E)},k),u.default.createElement(a.ResponsiveContainer,{className:"h-full w-full"},(null==m?void 0:m.length)?u.default.createElement(a.AreaChart,{data:m,margin:{top:1,left:1,right:1,bottom:1}},u.default.createElement(a.XAxis,{hide:!0,dataKey:f}),d.map((e=>{var t,a;return u.default.createElement("defs",{key:e},h?u.default.createElement("linearGradient",{className:s.getColorClassNames(null!==(t=j.get(e))&&void 0!==t?t:r.BaseColors.Gray,o.colorPalette.text).textColor,id:j.get(e),x1:"0",y1:"0",x2:"0",y2:"1"},u.default.createElement("stop",{offset:"5%",stopColor:"currentColor",stopOpacity:.4}),u.default.createElement("stop",{offset:"95%",stopColor:"currentColor",stopOpacity:0})):u.default.createElement("linearGradient",{className:s.getColorClassNames(null!==(a=j.get(e))&&void 0!==a?a:r.BaseColors.Gray,o.colorPalette.text).textColor,id:j.get(e),x1:"0",y1:"0",x2:"0",y2:"1"},u.default.createElement("stop",{stopColor:"currentColor",stopOpacity:.3})))})),d.map((e=>{var t;return u.default.createElement(a.Area,{className:s.getColorClassNames(null!==(t=j.get(e))&&void 0!==t?t:r.BaseColors.Gray,o.colorPalette.text).strokeColor,strokeOpacity:1,dot:!1,key:e,name:e,type:x,dataKey:e,stroke:"",fill:`url(#${j.get(e)})`,strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round",isAnimationActive:y,animationDuration:g,stackId:p?"a":void 0,connectNulls:N})}))):u.default.createElement(i,{noDataText:v})))}));m.displayName="AreaChart",module.exports=m;
