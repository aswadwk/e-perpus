import{W as p,j as e}from"./app-C6SFS50B.js";import{I as o}from"./InputCustom-VAyEb9vp.js";import{D as c}from"./DefaultLayout-D_s0XWYt.js";import{B as m}from"./button-CCvBVxMY.js";import{a as u,b as h,e as x,c as j}from"./card-8IVMwDKs.js";import"./input-CdbUr0YJ.js";import"./label-XivaCM4i.js";import"./index-ydiVDJ0R.js";import"./index-Cyr5XEdt.js";import"./index-BgJgPHWB.js";import"./ThemeProvider-BIHxQ64F.js";const E=({member:s})=>{const{data:i,setData:t,put:n,errors:a,processing:d}=p({name:s.name||"",description:s.description||""});function l(r){r.preventDefault(),n(route("web.grades.update",s.id),{preserveScroll:!0,onSuccess:()=>{t({name:"",description:""})}})}return e.jsxs(c,{children:[e.jsxs(u,{children:[e.jsx(h,{children:"Ubah Kelas"}),e.jsx(x,{children:"Ubah kelas"})]}),e.jsx(j,{children:e.jsxs("form",{action:"",onSubmit:l,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx("div",{children:e.jsx(o,{label:"Name",type:"text",placeholder:"Name",value:i.name,onChange:r=>t("name",r.target.value),error:a.name})}),e.jsx("div",{children:e.jsx(o,{label:"Deskripsi",type:"text",placeholder:"Deskripsi",value:i.description,onChange:r=>t("description",r.target.value),error:a.description})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(m,{type:"submit",disabled:d,children:"Simpan"})})]})})]})};export{E as default};