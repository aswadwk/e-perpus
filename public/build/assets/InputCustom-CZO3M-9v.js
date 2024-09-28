import{r as x,j as e}from"./app-DzYUMRS6.js";import{I as h}from"./input-DixIHQop.js";import{L as f}from"./label-C7lilHTh.js";import{B as u}from"./button-DaOaNqDk.js";import{v as r}from"./index-Aw_-t0DS.js";/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);function g({label:s,type:a,placeholder:o,value:i,error:n,isDisabled:c,id:d,onChange:l,tabIndex:m,isRequired:k}){const[t,p]=x.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"relative grid items-center w-full max-w-full gap-2.5",children:[s&&e.jsx(f,{htmlFor:d,children:s}),e.jsx(h,{type:t?"text":a,placeholder:o,value:i,onChange:l,disabled:c,tabIndex:m}),a==="password"&&e.jsx(u,{variant:"link",className:"absolute -translate-y-1/2 right-1 top-1/2",onClick:()=>p(!t),type:"button",tabIndex:-1,children:t?e.jsx(y,{size:20}):e.jsx(j,{size:20})})]}),e.jsx("span",{className:"text-xs text-red-500",children:n})]})}export{g as I};
