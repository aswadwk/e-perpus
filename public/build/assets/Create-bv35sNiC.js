import{W as u,j as e}from"./app-Bu8DGTfW.js";import{I as l}from"./InputCustom-UNZtXTR7.js";import{D as h}from"./DefaultLayout-DESp1Ecw.js";import{S as s}from"./SelectInput-DfcCQ8QA.js";import{B as m}from"./button-CBisKqpq.js";import{a as b,b as x,e as v,c as g}from"./card-BJx03-3O.js";import"./input-DrGnIgiW.js";import"./label-CjI0PS4q.js";import"./index-DLJlH3Wp.js";import"./index-BHqNeTgx.js";import"./index-CdaAXiO9.js";import"./sheet-BY8mLnhc.js";import"./dialog-DXz6dVa3.js";import"./popover-TRTheVeH.js";const J=({categories:o,publishers:n})=>{const{data:t,setData:i,post:d,errors:a,processing:c}=u({title:"",author:"",category_id:"",publisher_id:"",isbn:"",cover:"",year_publisher:"",stock:"",price:"",description:""});function p(r){r.preventDefault(),d(route("web.members.store"),{preserveScroll:!0,onSuccess:()=>{i({title:"",author:"",category_id:"",publisher_id:"",isbn:"",cover:"",year_publisher:"",stock:"",price:"",description:""})}})}return console.log(o),console.log(t),e.jsxs(h,{children:[e.jsxs(b,{children:[e.jsx(x,{children:"Tambah Buku"}),e.jsx(v,{children:"Tambah buku baru"})]}),e.jsx(g,{children:e.jsxs("form",{action:"",onSubmit:p,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx("div",{children:e.jsx(l,{label:"Judul",type:"text",placeholder:"Judul",value:t.title,onChange:r=>i("title",r.target.value),error:a.title})}),e.jsx("div",{children:e.jsx(l,{label:"Author",type:"text",placeholder:"Author",value:t.author,onChange:r=>i("author",r.target.value),error:a.author})}),e.jsx("div",{children:e.jsx(s,{label:"Kategori",value:t.category_id,placeholder:"Kategori",items:o.map(r=>({value:r.id,label:r.name})),onChange:r=>i("category_id",r),error:a.category_id})}),e.jsx("div",{children:e.jsx(s,{label:"Publisher",value:t.publisher_id,placeholder:"Publisher",items:n.map(r=>({value:r.id,label:r.name})),onChange:r=>i("publisher_id",r),error:a.publisher_id})}),e.jsx("div",{children:e.jsx(l,{label:"ISBN",type:"text",placeholder:"ISBN",value:t.isbn,onChange:r=>i("isbn",r.target.value),error:a.isbn})}),e.jsx("div",{children:e.jsx(l,{label:"Stock",type:"number",placeholder:"Stock",value:t.stock,onChange:r=>i("stock",r.target.value),error:a.stock})}),e.jsx("div",{children:e.jsx(l,{label:"Harga",type:"number",placeholder:"Harga",value:t.price,onChange:r=>i("price",r.target.value),error:a.price})}),e.jsx("div",{children:e.jsx(l,{label:"Description",type:"text",placeholder:"Description",value:t.description,onChange:r=>i("description",r.target.value),error:a.description})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(m,{type:"submit",disabled:c,children:"Simpan"})})]})})]})};export{J as default};
