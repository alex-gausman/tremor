import e,{useRef as t}from"react";import n from"../../../hooks/useOnWindowResize.js";import r from"../../text-elements/Legend/Legend.js";const o=({payload:o},l,a,i,s,m)=>{const c=t(null);n((()=>{var e;var t;a((t=null===(e=c.current)||void 0===e?void 0:e.clientHeight)?Number(t)+20:60)}));const d=o.filter((e=>"none"!==e.type));return e.createElement("div",{ref:c,className:"flex items-center justify-end"},e.createElement(r,{categories:d.map((e=>e.value)),colors:d.map((e=>l.get(e.value))),onClickLegendItem:s,activeLegend:i,enableLegendSlider:m}))};export{o as default};
