import{W as d,j as e}from"./app-C3B2Chdh.js";import{I as o}from"./InputCustom-DT_tOqKT.js";import{D as n}from"./DefaultLayout-DIhtMA80.js";import{B as p}from"./button-D1Fqjazq.js";import{a as c,b as u,e as h,c as x}from"./card-yRxBDH1M.js";import"./input-CEN2VzwN.js";import"./label-BJF6Azrd.js";import"./react-icons.esm-6AhjqkUL.js";import"./separator-ChToo2tt.js";import"./index-DpFgBymO.js";const S=()=>{const{data:s,setData:r,post:i,errors:t,processing:l}=d({name:"",email:"",password:""});function m(a){a.preventDefault(),i(route("web.admins.store"),{preserveScroll:!0,onSuccess:()=>{r({name:"",email:"",password:""})}})}return e.jsxs(n,{children:[e.jsxs(c,{children:[e.jsx(u,{children:"Tambah Admin"}),e.jsx(h,{children:"Tambah admin baru"})]}),e.jsx(x,{children:e.jsxs("form",{action:"",onSubmit:m,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx("div",{children:e.jsx(o,{label:"Name",type:"text",placeholder:"Name",value:s.name,onChange:a=>r("name",a.target.value),error:t.name})}),e.jsx("div",{children:e.jsx(o,{label:"Email",type:"email",placeholder:"Email",value:s.email,onChange:a=>r("email",a.target.value),error:t.email})}),e.jsx("div",{children:e.jsx(o,{label:"Password",type:"text",placeholder:"Password",value:s.password,onChange:a=>r("password",a.target.value),error:t.password})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(p,{type:"submit",disabled:l,children:"Tambah"})})]})})]})};export{S as default};