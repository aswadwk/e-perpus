import{r as n,W as v,y as g,j as e,Y as w,a as x}from"./app-Djs2jfuW.js";import{D as y}from"./DefaultLayout-DRkWuLD3.js";import{P as C,a as N}from"./PaginateDemo-wO75yJeC.js";import{B as d}from"./button-Cpxe5iL0.js";import{C as T,a as P,b,c as _,d as S}from"./card-BFABGd-W.js";import{I as k}from"./input-U8cqmFES.js";import{l as E,T as F,a as H,b as h,c as t,d as R,e as i}from"./lodash-BKzHy16W.js";import{r as D,d as A,a as B}from"./utils-CSBip_Yx.js";import{P as I,T as V}from"./trash-_wwy6zoc.js";import{S as M}from"./square-pen-CNo3t-_H.js";import"./react-icons.esm-B9pCuMbZ.js";import"./separator-BzNyEvcV.js";import"./index-DP5eIyoR.js";const $=({publishers:s})=>{var c;const[a,l]=n.useState({per_page:10,search:"",with_trashed:!1}),{delete:j}=v({}),o=n.useRef(!0),m=n.useRef(E.debounce(r=>{let p=D({...r});g.get(route("web.publishers.index"),{...p},{preserveState:!0,preserveScroll:"errors"})},500)).current;n.useEffect(()=>{if(o.current){o.current=!1;return}m(a)},[a]);function f(){return a.search||a.with_trashed}function u(r){confirm("Are you sure you want to delete this publisher?")&&j(route("web.publishers.destroy",r))}return e.jsxs(y,{children:[e.jsx(w,{title:"Publisher"}),e.jsxs(T,{children:[e.jsx(P,{children:e.jsx(b,{children:"Publishers"})}),e.jsxs(_,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{children:e.jsx(k,{placeholder:"Search ",onChange:r=>{l({...a,search:r.target.value})},className:"w-[150px] lg:w-[250px]",value:a.search})}),f()&&e.jsx(d,{variant:"outline",onClick:()=>{l({...a,search:"",per_page:"",with_trashed:!1})},children:"Clear Filter"})]}),e.jsx(x,{href:"/admin/publishers/create",children:e.jsxs(d,{children:[e.jsx(I,{}),"Tambah Publisher"]})})]}),e.jsx("div",{className:"mt-4 overflow-x-auto border rounded-lg",children:e.jsxs(F,{children:[e.jsx(H,{children:e.jsxs(h,{children:[e.jsx(t,{children:"Nama"}),e.jsx(t,{children:"Kode"}),e.jsx(t,{children:"Terverfikasi"}),e.jsx(t,{children:"Created At"}),e.jsx(t,{className:"text-center",children:"Action"})]})}),e.jsx(R,{children:(c=s==null?void 0:s.data)==null?void 0:c.map(r=>e.jsxs(h,{children:[e.jsx(i,{children:e.jsx("div",{className:"flex gap-2",children:e.jsx("div",{children:(r==null?void 0:r.name)??"Unknown"})})}),e.jsx(i,{children:r.code}),e.jsx(i,{children:r.is_verified?"Verified":"Not Verified"}),e.jsxs(i,{className:"text-nowrap",children:[A(r.created_at),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-muted-foreground",children:B(r.created_at)})]}),e.jsx(i,{children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx(d,{variant:"ghost",children:e.jsx(x,{href:route("web.publishers.edit",r.id),children:e.jsx(M,{height:18})})}),e.jsx(d,{variant:"ghost",onClick:()=>{u(r.id)},children:e.jsx(V,{height:18})})]})})]},r.id))})]})})]}),e.jsx(S,{children:e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx(C,{from:s.from,to:s.to,total:s.total}),e.jsx("div",{children:e.jsx(N,{links:s.links})})]})})]})]})};export{$ as default};
