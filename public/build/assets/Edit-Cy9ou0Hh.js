import{W as p,j as e}from"./app-yMZrsqwC.js";import{I as d}from"./InputCustom-DKHq_cID.js";import{D as u}from"./DefaultLayout-C2_q1QE6.js";import{S as c}from"./SelectInput-BufbXwGQ.js";import{B as h}from"./button-DoUDRYi7.js";import{a as x,b as g,e as j,c as v}from"./card-EMH6NASV.js";import"./input-Bql4HjTJ.js";import"./label-CqT395K3.js";import"./index-x4fCwDdj.js";import"./index-NjrTV968.js";import"./index-hnFnuZ5j.js";import"./ThemeProvider-C4ksScWi.js";import"./dialog-DHL9gay8.js";import"./popover-DFGZXV4t.js";const B=({member:s,grades:i})=>{const{data:l,setData:r,put:n,errors:t,processing:o}=p({nis:s.nis||"",name:s.name||"",username:s.username||"",email:s.email||"",password:"",address:s.address||"",grade_id:s.grade_id||""});function m(a){a.preventDefault(),n(route("web.members.update",s.id),{preserveScroll:!0,onSuccess:()=>{r({nis:"",name:"",username:"",email:"",password:"",address:"",grade_id:""})}})}return e.jsxs(u,{children:[e.jsxs(x,{children:[e.jsx(g,{children:"Ubah Pengguna"}),e.jsx(j,{children:"Ubah Pengguna"})]}),e.jsx(v,{children:e.jsxs("form",{action:"",onSubmit:m,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx("div",{children:e.jsx(d,{label:"NIM",type:"text",placeholder:"NIM",value:l.nis,onChange:a=>r("nis",a.target.value),error:t.nis})}),e.jsx("div",{children:e.jsx(d,{label:"Name",type:"text",placeholder:"Name",value:l.name,onChange:a=>r("name",a.target.value),error:t.name})}),e.jsx("div",{children:e.jsx(c,{label:"Kelas",placeholder:"Kelas",items:i.map(a=>({value:a.id.toString(),label:a.name})),onChange:a=>r("grade_id",a),error:t.grade_id,currentValue:l.grade_id.toString()})}),e.jsx("div",{children:e.jsx(d,{label:"Username",type:"text",placeholder:"Username",value:l.username,onChange:a=>r("username",a.target.value),error:t.username})}),e.jsx("div",{children:e.jsx(d,{label:"Email",type:"email",placeholder:"Email",value:l.email,onChange:a=>r("email",a.target.value),error:t.email})}),e.jsx("div",{children:e.jsx(d,{label:"Password",type:"text",placeholder:"Password",value:l.password,onChange:a=>r("password",a.target.value),error:t.password})}),e.jsx("div",{children:e.jsx(d,{label:"Address",type:"text",placeholder:"Address",value:l.address,onChange:a=>r("address",a.target.value),error:t.address})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(h,{type:"submit",disabled:o,children:"Simpan"})})]})})]})};export{B as default};
