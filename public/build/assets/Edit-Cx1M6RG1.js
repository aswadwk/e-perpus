import{W as m,j as e}from"./app-Bu8DGTfW.js";import{I as n}from"./InputCustom-UNZtXTR7.js";import{D as p}from"./DefaultLayout-DESp1Ecw.js";import{B as u}from"./button-CBisKqpq.js";import{a as c,b as h,e as x,c as j}from"./card-BJx03-3O.js";import"./input-DrGnIgiW.js";import"./label-CjI0PS4q.js";import"./index-DLJlH3Wp.js";import"./index-BHqNeTgx.js";import"./index-CdaAXiO9.js";import"./sheet-BY8mLnhc.js";const I=({member:s})=>{const{data:t,setData:r,put:d,errors:l,processing:i}=m({nis:s.nis||"",name:s.name||"",username:s.username||"",email:s.email||"",password:"",address:s.address||""});function o(a){a.preventDefault(),d(route("web.members.update",s.id),{preserveScroll:!0,onSuccess:()=>{r({nis:"",name:"",username:"",email:"",password:"",address:""})}})}return e.jsxs(p,{children:[e.jsxs(c,{children:[e.jsx(h,{children:"Ubah Pengguna"}),e.jsx(x,{children:"Ubah Pengguna"})]}),e.jsx(j,{children:e.jsxs("form",{action:"",onSubmit:o,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx("div",{children:e.jsx(n,{label:"NIS",type:"text",placeholder:"NIS",value:t.nis,onChange:a=>r("nis",a.target.value),error:l.nis})}),e.jsx("div",{children:e.jsx(n,{label:"Name",type:"text",placeholder:"Name",value:t.name,onChange:a=>r("name",a.target.value),error:l.name})}),e.jsx("div",{children:e.jsx(n,{label:"Username",type:"text",placeholder:"Username",value:t.username,onChange:a=>r("username",a.target.value),error:l.username})}),e.jsx("div",{children:e.jsx(n,{label:"Email",type:"email",placeholder:"Email",value:t.email,onChange:a=>r("email",a.target.value),error:l.email})}),e.jsx("div",{children:e.jsx(n,{label:"Password",type:"text",placeholder:"Password",value:t.password,onChange:a=>r("password",a.target.value),error:l.password})}),e.jsx("div",{children:e.jsx(n,{label:"Address",type:"text",placeholder:"Address",value:t.address,onChange:a=>r("address",a.target.value),error:l.address})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(u,{type:"submit",disabled:i,children:"Simpan"})})]})})]})};export{I as default};
