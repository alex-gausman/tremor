"use strict";var e=require("tslib"),t=require("../../../lib/spacing.cjs"),r=require("../../../lib/tremorTwMerge.cjs"),a=require("../../../lib/utils.cjs");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=l(require("react"));const s=a.makeClassName("TableFooterCell"),i=n.default.forwardRef(((a,l)=>{const{children:i,className:o}=a,c=e.__rest(a,["children","className"]);return n.default.createElement(n.default.Fragment,null,n.default.createElement("th",Object.assign({ref:l,className:r.tremorTwMerge(s("root"),"text-tremor-content font-medium","dark:text-dark-tremor-content",t.spacing.none.top,t.spacing.twoXl.paddingX,t.spacing.xl.paddingY,o)},c),i))}));i.displayName="TableFooterCell",module.exports=i;
