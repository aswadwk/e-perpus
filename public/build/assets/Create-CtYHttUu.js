import{W as h,j as e}from"./app-0XjETWz2.js";import{I as l}from"./InputCustom-dUS8PyiK.js";import{D as m}from"./DefaultLayout-B2m59dEV.js";import{S as s}from"./SelectInput-ChFBfz9b.js";import{B as b}from"./button-CoqDk6re.js";import{a as x,b as g,e as v,c as j}from"./card-7EO7ouYE.js";import"./input-CowePKfC.js";import"./label-DDPtsqWJ.js";import"./index-C8eaftlp.js";import"./index-CYfGYf1K.js";import"./index-CzlJDc6-.js";import"./ThemeProvider-CXa972W9.js";import"./dialog-D8poKy1m.js";import"./popover-B0GW8B2v.js";const J=({categories:o,publishers:n})=>{const{data:t,setData:a,post:d,errors:i,processing:u,reset:c}=h({title:"",author:"",category_id:"",publisher_id:"",isbn:"",cover:"",year_published:"",stock:"",price:"",description:""});function p(r){r.preventDefault(),d(route("web.books.store"),{preserveScroll:!0,onSuccess:()=>{c()}})}return console.log(o),console.log(t),e.jsxs(m,{children:[e.jsxs(x,{children:[e.jsx(g,{children:"Tambah Buku"}),e.jsx(v,{children:"Tambah buku baru"})]}),e.jsx(j,{children:e.jsxs("form",{action:"",onSubmit:p,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[e.jsx("div",{children:e.jsx(l,{label:"Judul",type:"text",placeholder:"Judul",value:t.title,onChange:r=>a("title",r.target.value),error:i.title})}),e.jsx("div",{children:e.jsx(l,{label:"Author",type:"text",placeholder:"Author",value:t.author,onChange:r=>a("author",r.target.value),error:i.author})}),e.jsx("div",{children:e.jsx(s,{label:"Kategori",placeholder:"Kategori",items:o.map(r=>({value:r.id.toString(),label:r.name})),onChange:r=>a("category_id",r),error:i.category_id,currentValue:t.category_id.toString()})}),e.jsx("div",{children:e.jsx(s,{label:"Publisher",placeholder:"Publisher",items:n.map(r=>({value:r.id.toString(),label:r.name})),onChange:r=>a("publisher_id",r),error:i.publisher_id,currentValue:t.publisher_id.toString()})}),e.jsx("div",{children:e.jsx(l,{label:"ISBN",type:"text",placeholder:"ISBN",value:t.isbn,onChange:r=>a("isbn",r.target.value),error:i.isbn})}),e.jsx("div",{children:e.jsx(l,{label:"Stock",type:"number",placeholder:"Stock",value:t.stock,onChange:r=>a("stock",r.target.value),error:i.stock})}),e.jsx("div",{children:e.jsx(l,{label:"Harga",type:"number",placeholder:"Harga",value:t.price,onChange:r=>a("price",r.target.value),error:i.price})}),e.jsx("div",{children:e.jsx(l,{label:"Year Publisher",type:"number",placeholder:"Year Publisher",value:t.year_published,onChange:r=>a("year_published",r.target.value),error:i.year_published})}),e.jsx("div",{children:e.jsx(l,{label:"Description",type:"text",placeholder:"Description",value:t.description,onChange:r=>a("description",r.target.value),error:i.description})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(b,{type:"submit",disabled:u,children:"Simpan"})})]})})]})};export{J as default};
