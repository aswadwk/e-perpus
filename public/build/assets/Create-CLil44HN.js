import{W as u,j as e,Y as p}from"./app-C3B2Chdh.js";import{I as l}from"./InputCustom-DT_tOqKT.js";import{D as c}from"./DefaultLayout-DIhtMA80.js";import{S as h}from"./SelectInput-CsHQmgQg.js";import{B as x}from"./button-D1Fqjazq.js";import{a as g,b as j,e as v,c as b}from"./card-yRxBDH1M.js";import"./input-CEN2VzwN.js";import"./label-BJF6Azrd.js";import"./react-icons.esm-6AhjqkUL.js";import"./separator-ChToo2tt.js";import"./index-DpFgBymO.js";import"./dialog-_8jNaw7f.js";import"./popover-Dy9jLMii.js";const T=({grades:d,code:i})=>{const{data:s,setData:a,post:o,errors:t,processing:n}=u({code:i,nis:"",name:"",grade_id:"",username:"",email:"",password:"",address:""});function m(r){r.preventDefault(),o(route("web.members.store"),{preserveScroll:!0,onSuccess:()=>{a({code:"",nis:"",name:"",grade_id:"",username:"",email:"",password:"",address:""})}})}return e.jsxs(c,{children:[e.jsx(p,{title:"Tambah Anggota"}),e.jsxs(g,{children:[e.jsx(j,{children:"Tambah Pengguna"}),e.jsx(v,{children:"Tambah pengguna baru"})]}),e.jsx(b,{children:e.jsxs("form",{action:"",onSubmit:m,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx("div",{children:e.jsx(l,{label:"Kode Anggota",isRequired:!0,type:"text",placeholder:"Kode",value:s.code,onChange:r=>a("code",r.target.value),error:t.code})}),e.jsx("div",{children:e.jsx(l,{isRequired:!0,label:"NIM",type:"text",placeholder:"NIM",value:s.nis,onChange:r=>a("nis",r.target.value),error:t.nis})}),e.jsx("div",{children:e.jsx(l,{label:"Name",isRequired:!0,type:"text",placeholder:"Name",value:s.name,onChange:r=>a("name",r.target.value),error:t.name})}),e.jsx("div",{children:e.jsx(h,{label:"Kelas",isRequired:!0,placeholder:"Kelas",items:d.map(r=>({value:r.id.toString(),label:r.name})),onChange:r=>a("grade_id",r),error:t.grade_id,currentValue:s.grade_id.toString()})}),e.jsx("div",{children:e.jsx(l,{label:"Username",type:"text",placeholder:"Username",value:s.username,onChange:r=>a("username",r.target.value),error:t.username})}),e.jsx("div",{children:e.jsx(l,{label:"Email",type:"email",placeholder:"Email",value:s.email,onChange:r=>a("email",r.target.value),error:t.email})}),e.jsx("div",{children:e.jsx(l,{label:"Password",type:"text",placeholder:"Password",value:s.password,onChange:r=>a("password",r.target.value),error:t.password})}),e.jsx("div",{children:e.jsx(l,{label:"Address",type:"text",placeholder:"Address",value:s.address,onChange:r=>a("address",r.target.value),error:t.address})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(x,{type:"submit",disabled:n,children:"Simpan"})})]})})]})};export{T as default};