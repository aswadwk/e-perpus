import{r as c,j as a,a as m}from"./app-C3B2Chdh.js";import{f as g,g as j}from"./react-icons.esm-6AhjqkUL.js";import{c as t,b as u}from"./button-D1Fqjazq.js";const x=({className:e,...s})=>a.jsx("nav",{role:"navigation","aria-label":"pagination",className:t("mx-auto flex w-full justify-center",e),...s});x.displayName="Pagination";const d=c.forwardRef(({className:e,...s},n)=>a.jsx("ul",{ref:n,className:t("flex flex-row items-center gap-1",e),...s}));d.displayName="PaginationContent";const i=c.forwardRef(({className:e,...s},n)=>a.jsx("li",{ref:n,className:t("",e),...s}));i.displayName="PaginationItem";const l=({className:e,isActive:s,size:n="icon",...r})=>a.jsx(i,{children:a.jsx(m,{className:t(u({variant:s?"outline":"ghost",size:n}),e),...r,children:r.children})});l.displayName="PaginationLink";const h=({className:e,...s})=>a.jsxs(l,{"aria-label":"Go to previous page",size:"default",className:t("gap-1 pl-2.5",e),...s,children:[a.jsx(g,{className:"w-4 h-4"}),a.jsx("span",{children:"Previous"})]});h.displayName="PaginationPrevious";const p=({className:e,...s})=>a.jsxs(l,{"aria-label":"Go to next page",size:"default",className:t("gap-1 pr-2.5",e),...s,children:[a.jsx("span",{children:"Next"}),a.jsx(j,{className:"w-4 h-4"})]});p.displayName="PaginationNext";function v({links:e}){const s=e[0],n=e[e.length-1],r=e.slice(1,e.length-1);return a.jsx(x,{children:a.jsxs(d,{children:[a.jsx(i,{children:a.jsx(h,{preserveState:!0,href:s.url})}),r.map(o=>a.jsx(i,{children:a.jsx(l,{href:o.url,preserveState:!0,isActive:o.active,children:o.label})},o.url)),a.jsx(i,{children:a.jsx(p,{preserveState:!0,href:n.url})})]})})}const w=({from:e,to:s,total:n})=>a.jsxs("span",{className:"text-xs",children:["Showing ",a.jsx("span",{children:e})," to ",a.jsx("span",{children:s})," of"," ",a.jsx("span",{children:n})," entries"]});export{w as P,v as a};