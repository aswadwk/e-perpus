import{W as m,j as e}from"./app-yMZrsqwC.js";import{I as l}from"./InputCustom-DKHq_cID.js";import{D as p}from"./DefaultLayout-C2_q1QE6.js";import{S as u}from"./SelectInput-BufbXwGQ.js";import{B as c}from"./button-DoUDRYi7.js";import{a as h,b as x,e as g,c as j}from"./card-EMH6NASV.js";import"./input-Bql4HjTJ.js";import"./label-CqT395K3.js";import"./index-x4fCwDdj.js";import"./index-NjrTV968.js";import"./index-hnFnuZ5j.js";import"./ThemeProvider-C4ksScWi.js";import"./dialog-DHL9gay8.js";import"./popover-DFGZXV4t.js";const A=({grades:d})=>{const{data:s,setData:a,post:i,errors:t,processing:n}=m({nis:"",name:"",grade_id:"",username:"",email:"",password:"",address:""});function o(r){r.preventDefault(),i(route("web.members.store"),{preserveScroll:!0,onSuccess:()=>{a({nis:"",name:"",grade_id:"",username:"",email:"",password:"",address:""})}})}return e.jsxs(p,{children:[e.jsxs(h,{children:[e.jsx(x,{children:"Tambah Pengguna"}),e.jsx(g,{children:"Tambah pengguna baru"})]}),e.jsx(j,{children:e.jsxs("form",{action:"",onSubmit:o,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx("div",{children:e.jsx(l,{label:"NIM",type:"text",placeholder:"NIM",value:s.nis,onChange:r=>a("nis",r.target.value),error:t.nis})}),e.jsx("div",{children:e.jsx(l,{label:"Name",type:"text",placeholder:"Name",value:s.name,onChange:r=>a("name",r.target.value),error:t.name})}),e.jsx("div",{children:e.jsx(u,{label:"Kelas",placeholder:"Kelas",items:d.map(r=>({value:r.id.toString(),label:r.name})),onChange:r=>a("grade_id",r),error:t.grade_id,currentValue:s.grade_id.toString()})}),e.jsx("div",{children:e.jsx(l,{label:"Username",type:"text",placeholder:"Username",value:s.username,onChange:r=>a("username",r.target.value),error:t.username})}),e.jsx("div",{children:e.jsx(l,{label:"Email",type:"email",placeholder:"Email",value:s.email,onChange:r=>a("email",r.target.value),error:t.email})}),e.jsx("div",{children:e.jsx(l,{label:"Password",type:"text",placeholder:"Password",value:s.password,onChange:r=>a("password",r.target.value),error:t.password})}),e.jsx("div",{children:e.jsx(l,{label:"Address",type:"text",placeholder:"Address",value:s.address,onChange:r=>a("address",r.target.value),error:t.address})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(c,{type:"submit",disabled:n,children:"Simpan"})})]})})]})};export{A as default};
