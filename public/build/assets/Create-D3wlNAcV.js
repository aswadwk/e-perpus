import{W as n,j as e}from"./app-0XjETWz2.js";import{I as m}from"./InputCheckBox-DdpHsVNR.js";import{I as a}from"./InputCustom-dUS8PyiK.js";import{D as c}from"./DefaultLayout-B2m59dEV.js";import{B as p}from"./button-CoqDk6re.js";import{a as u,b as h,e as x,c as f}from"./card-7EO7ouYE.js";import"./checkbox-DZ3U5yD4.js";import"./index-CYfGYf1K.js";import"./index-C8eaftlp.js";import"./input-CowePKfC.js";import"./label-DDPtsqWJ.js";import"./index-CzlJDc6-.js";import"./ThemeProvider-CXa972W9.js";const P=()=>{const{data:s,setData:i,post:o,errors:t,processing:d}=n({code:"",name:"",is_verified:!0});function l(r){r.preventDefault(),o(route("web.publishers.store"),{preserveScroll:!0,onSuccess:()=>{i({code:"",name:"",is_verified:!0})}})}return e.jsxs(c,{children:[e.jsxs(u,{children:[e.jsx(h,{children:"Create Publisher"}),e.jsx(x,{children:"Create a new Publisher"})]}),e.jsx(f,{children:e.jsxs("form",{action:"",onSubmit:l,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx("div",{children:e.jsx(a,{label:"Code",type:"text",placeholder:"Code",value:s.code,onChange:r=>i("code",r.target.value),error:t.code})}),e.jsx("div",{children:e.jsx(a,{label:"Name",type:"text",placeholder:"Name",value:s.name,onChange:r=>i("name",r.target.value),error:t.name})}),e.jsx("div",{children:e.jsx(m,{error:"",label:"Is Verified",onChange:r=>i("is_verified",r),placeholder:"Is Verified",value:s.is_verified,id:"is_verified"})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(p,{type:"submit",disabled:d,children:"Save"})})]})})]})};export{P as default};
