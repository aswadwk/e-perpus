import{r as p,j as s}from"./app-Djs2jfuW.js";import{I as h}from"./input-U8cqmFES.js";import{L as f}from"./label-BEi3ylja.js";import{B as u}from"./button-Cpxe5iL0.js";import{v as r}from"./react-icons.esm-B9pCuMbZ.js";/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);function g({label:t,type:a,placeholder:i,value:o,error:n,isDisabled:c,id:d,onChange:x,tabIndex:l,isRequired:k}){const[e,m]=p.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"relative grid items-center w-full max-w-full gap-2.5",children:[t&&s.jsxs(f,{htmlFor:d,children:[t,s.jsx("span",{className:"text-xs text-red-500",children:" * Wajib diisi"})]}),s.jsx(h,{type:e?"text":a,placeholder:i,value:o,onChange:x,disabled:c,tabIndex:l}),a==="password"&&s.jsx(u,{variant:"link",className:"absolute -translate-y-1/2 right-1 top-1/2",onClick:()=>m(!e),type:"button",tabIndex:-1,children:e?s.jsx(y,{size:20}):s.jsx(j,{size:20})})]}),s.jsx("span",{className:"text-xs text-red-500",children:n})]})}export{g as I};
