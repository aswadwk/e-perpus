import{W as m,j as e}from"./app-0XjETWz2.js";import{I as n}from"./InputCustom-dUS8PyiK.js";import{D as p}from"./DefaultLayout-B2m59dEV.js";import{B as u}from"./button-CoqDk6re.js";import{a as c,b as h,e as x,c as j}from"./card-7EO7ouYE.js";import"./input-CowePKfC.js";import"./label-DDPtsqWJ.js";import"./index-C8eaftlp.js";import"./index-CYfGYf1K.js";import"./index-CzlJDc6-.js";import"./ThemeProvider-CXa972W9.js";const I=({member:s})=>{const{data:t,setData:r,put:d,errors:l,processing:i}=m({nis:s.nis||"",name:s.name||"",username:s.username||"",email:s.email||"",password:"",address:s.address||""});function o(a){a.preventDefault(),d(route("web.members.update",s.id),{preserveScroll:!0,onSuccess:()=>{r({nis:"",name:"",username:"",email:"",password:"",address:""})}})}return e.jsxs(p,{children:[e.jsxs(c,{children:[e.jsx(h,{children:"Ubah Pengguna"}),e.jsx(x,{children:"Ubah Pengguna"})]}),e.jsx(j,{children:e.jsxs("form",{action:"",onSubmit:o,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx("div",{children:e.jsx(n,{label:"NIS",type:"text",placeholder:"NIS",value:t.nis,onChange:a=>r("nis",a.target.value),error:l.nis})}),e.jsx("div",{children:e.jsx(n,{label:"Name",type:"text",placeholder:"Name",value:t.name,onChange:a=>r("name",a.target.value),error:l.name})}),e.jsx("div",{children:e.jsx(n,{label:"Username",type:"text",placeholder:"Username",value:t.username,onChange:a=>r("username",a.target.value),error:l.username})}),e.jsx("div",{children:e.jsx(n,{label:"Email",type:"email",placeholder:"Email",value:t.email,onChange:a=>r("email",a.target.value),error:l.email})}),e.jsx("div",{children:e.jsx(n,{label:"Password",type:"text",placeholder:"Password",value:t.password,onChange:a=>r("password",a.target.value),error:l.password})}),e.jsx("div",{children:e.jsx(n,{label:"Address",type:"text",placeholder:"Address",value:t.address,onChange:a=>r("address",a.target.value),error:l.address})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(u,{type:"submit",disabled:i,children:"Simpan"})})]})})]})};export{I as default};
