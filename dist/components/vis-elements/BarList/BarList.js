import{__rest as e}from"tslib";import{sizing as t}from"../../../lib/sizing.js";import{spacing as r}from"../../../lib/spacing.js";import{colorPalette as a}from"../../../lib/theme.js";import{tremorTwMerge as m}from"../../../lib/tremorTwMerge.js";import{getColorClassNames as o,makeClassName as n,defaultValueFormatter as l}from"../../../lib/utils.js";import s from"react";const i=n("BarList"),c=s.forwardRef(((n,c)=>{const{data:d=[],color:p,valueFormatter:h=l,showAnimation:u=!1,className:f}=n,b=e(n,["data","color","valueFormatter","showAnimation","className"]),g=(e=>{let t=-1/0;return e.forEach((e=>{t=Math.max(t,e)})),e.map((e=>0===e?0:Math.max(e/t*100,1)))})(d.map((e=>e.value))),x=t.threeXl.height;return s.createElement("div",Object.assign({ref:c,className:m(i("root"),"flex justify-between",r.threeXl.spaceX,f)},b),s.createElement("div",{className:m(i("bars"),"relative w-full")},d.map(((e,n)=>{var l,c,h;const f=e.icon;return s.createElement("div",{key:null!==(l=e.key)&&void 0!==l?l:e.name,className:m(i("bar"),"flex items-center rounded-tremor-small bg-opacity-30",x,e.color||p?o(null!==(c=e.color)&&void 0!==c?c:p,a.background).bgColor:"bg-tremor-brand-subtle dark:bg-dark-tremor-brand-subtle dark:bg-opacity-30",n===d.length-1?r.none.marginBottom:r.sm.marginBottom),style:{width:`${g[n]}%`,transition:u?"all 1s":""}},s.createElement("div",{className:m("absolute max-w-full flex",r.sm.left)},f?s.createElement(f,{className:m(i("barIcon"),"flex-none","text-tremor-content","dark:text-dark-tremor-content",t.lg.height,t.lg.width,r.md.marginRight)}):null,e.href?s.createElement("a",{href:e.href,target:null!==(h=e.target)&&void 0!==h?h:"_blank",rel:"noreferrer",className:m(i("barLink"),"whitespace-nowrap hover:underline truncate text-tremor-default","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis")},e.name):s.createElement("p",{className:m(i("barText"),"whitespace-nowrap truncate text-tremor-default","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis")},e.name)))}))),s.createElement("div",{className:"text-right min-w-min"},d.map(((e,t)=>{var a;return s.createElement("div",{key:null!==(a=e.key)&&void 0!==a?a:e.name,className:m(i("labelWrapper"),"flex justify-end items-center",x,t===d.length-1?r.none.marginBottom:r.sm.marginBottom)},s.createElement("p",{className:m(i("labelText"),"whitespace-nowrap truncate text-tremor-default","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis")},h(e.value)))}))))}));c.displayName="BarList";export{c as default};
