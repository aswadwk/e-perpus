import{q as p,W as d,j as e}from"./app-B6Hn9RyG.js";import{I as l}from"./InputCustom-BE63RP5N.js";import{B as x}from"./BookLayout-C_5uc6EK.js";import{B as u}from"./button-BcH-DRWF.js";import{S as n}from"./separator-coOz5eOv.js";import"./input-BGqYbvy9.js";import"./label-jKREzJWj.js";import"./index-BzTypRqx.js";import"./dialog-DS6JVG-2.js";const S=()=>{const{auth:s}=p().props,{post:i}=d({}),{data:t,setData:a,errors:o,post:m}=d({name:(s==null?void 0:s.name)||"",old_password:"",password:""}),c=r=>{r.preventDefault(),console.log(t),m(route("web.auth.update"),{forceFormData:!0,preserveScroll:!0,onSuccess:()=>{a("old_password",""),a("password","")}})};return e.jsxs(x,{children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"space-y-1",children:[e.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Setting"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Atur akun dan informasi"})]})}),e.jsx(n,{className:"my-4"}),e.jsx("form",{action:"",onSubmit:c,children:e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"grid w-11/12 grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx("div",{children:e.jsx(l,{label:"Nama",type:"text",placeholder:"nama",value:t.name,onChange:r=>a("name",r.target.value),error:o.name})}),e.jsx("br",{}),e.jsx("div",{children:e.jsx(l,{label:"Old Password",type:"text",placeholder:"old password",value:t.old_password,onChange:r=>a("old_password",r.target.value),error:o.old_password})}),e.jsx("div",{children:e.jsx(l,{label:"New Password",type:"text",placeholder:"password",value:t.password,onChange:r=>a("password",r.target.value),error:o.password})})]}),e.jsx(u,{type:"submit",className:"btn btn-primary",children:"Update"})]})}),e.jsx(n,{className:"my-4"}),e.jsxs("div",{className:"flex items-center justify-between mt-4 space-x-4 pe-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold",children:s==null?void 0:s.name}),e.jsx("p",{className:"text-sm text-muted-foreground",children:s==null?void 0:s.email})]})]}),e.jsx("button",{className:"btn btn-primary",onClick:()=>{i(route("web.auth.logout"))},children:"Keluar"})]})]})};export{S as default};
