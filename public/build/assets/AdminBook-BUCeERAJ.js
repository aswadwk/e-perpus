import{r as l,W as p,j as e,Y as F,a as v}from"./app-DzYUMRS6.js";import{T as E,a as P,b as h,D as R}from"./tabs-DZOv_EHg.js";import{I as H}from"./InputCheckBox-X1G5N7Kx.js";import{I as k}from"./InputCustom-CZO3M-9v.js";import{D as L}from"./DefaultLayout-DcBmND8z.js";import{P as O,T as M,a as V,b as Y}from"./PaginateDemo-lvxy_ULm.js";import{S as J}from"./Sheet-B-f9L1CM.js";import{B as o}from"./button-DaOaNqDk.js";import{C,a as b,b as _,c as y,d as N}from"./card-B7KI1K_u.js";import{I as U}from"./input-DixIHQop.js";import{L as q}from"./label-C7lilHTh.js";import{l as z,T as G,a as W,b as w,c as n,d as K,e as i}from"./lodash-BAtCn9Gs.js";import{r as Q,t as g,d as X,a as Z}from"./utils-C_xD1QX0.js";import{J as B}from"./index-Aw_-t0DS.js";import{S as $}from"./square-pen-DzvLqRc9.js";import"./calendar-C-Y0EmKA.js";import"./popover-D4eaLzvs.js";import"./index-DBEPlhEX.js";import"./index-Ci1HpHrc.js";import"./checkbox-Cs6tLsAE.js";const Be=({books:a})=>{var j;const[r,t]=l.useState({per_page:10,start_date:"",end_date:"",search:"",subscription:"",with_trashed:!1}),[c,x]=l.useState({borrowBook:!1});l.useState({});const d=p({book_id:"",return_date:new Date,notes:"",fine:!0}),{delete:D}=p({}),u=l.useRef(!0),S=l.useRef(z.debounce(s=>{Q({...s,start_date:g(s.start_date,""),end_date:g(s.end_date,"")})},500)).current;l.useEffect(()=>{if(u.current){u.current=!1;return}S(r)},[r]);function T(){return r.search||r.start_date||r.end_date||r.subscription||r.with_trashed}function I(s){confirm("Are you sure you want to delete this book?")&&D(route("web.books.destroy",s))}async function A(){d.post(route("web.books.borrow",d.data.book_id),{preserveState:!0,onSuccess:()=>{d.reset(),B.success("Book borrowed successfully"),x({...c,borrowBook:!1})},onError:()=>{B.error("Failed to borrow book")}})}return e.jsxs(L,{children:[e.jsx(F,{title:"Books"}),e.jsx(J,{isOpen:c.borrowBook,onClose:()=>{x({...c,borrowBook:!1})},width:"w-[600px] sm:w-[840px]",title:"Borrow Book",description:"Fill in the form below to borrow a book",children:e.jsx(ee,{form:d,onSubmit:A})}),e.jsxs(C,{children:[e.jsx(b,{children:e.jsx(_,{children:"Buku"})}),e.jsxs(y,{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("div",{className:"flex gap-2",children:e.jsx(E,{className:"hidden sm:flex",defaultValue:"all",value:r.subscription,onValueChange:s=>{t({...r,subscription:s})},children:e.jsxs(P,{children:[e.jsx(h,{value:"",children:"All"}),e.jsx(h,{value:"available",children:"In Stock"}),e.jsx(h,{value:"unavailable",children:"Out of Stock"})]})})}),e.jsxs("div",{className:"flex items-center justify-end space-x-2",children:[T()&&e.jsx(o,{variant:"destructive",onClick:()=>{t({...r,search:"",start_date:"",end_date:"",subscription:"",per_page:"",with_trashed:!1})},children:"Clear Filter"}),e.jsx(U,{placeholder:"Search ",onChange:s=>{t({...r,search:s.target.value})},className:"w-[150px] lg:w-[250px]",value:r.search}),e.jsx(v,{href:route("web.books.create"),children:e.jsxs(o,{children:[e.jsx(O,{}),"Tambah Buku"]})})]})]}),e.jsx("div",{className:"mt-4 overflow-x-auto border rounded-lg",children:e.jsxs(G,{children:[e.jsx(W,{children:e.jsxs(w,{children:[e.jsx(n,{children:"Title"}),e.jsx(n,{children:"Author"}),e.jsx(n,{children:"Category"}),e.jsx(n,{children:"ISBN"}),e.jsx(n,{children:"Stock"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Created At"}),e.jsx(n,{className:"text-center",children:"Action"})]})}),e.jsx(K,{children:(j=a==null?void 0:a.data)==null?void 0:j.map(s=>{var m,f;return e.jsxs(w,{children:[e.jsx(i,{children:e.jsx("div",{className:"flex gap-2",children:e.jsxs("div",{children:[s==null?void 0:s.id,(s==null?void 0:s.title)??"Unknown"]})})}),e.jsx(i,{children:s.author}),e.jsxs(i,{children:[(m=s==null?void 0:s.category)==null?void 0:m.name,e.jsx("br",{}),e.jsx("span",{className:"text-xs text-muted-foreground",children:(f=s==null?void 0:s.category)==null?void 0:f.code})]}),e.jsx(i,{children:s.isbn}),e.jsx(i,{children:s.stock}),e.jsx(i,{children:s.status}),e.jsxs(i,{className:"text-nowrap",children:[X(s.created_at),e.jsx("br",{}),e.jsx("span",{className:"text-xs text-muted-foreground",children:Z(s.created_at)})]}),e.jsx(i,{children:e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx(o,{variant:"ghost",children:e.jsx(v,{href:route("web.books.edit",s.id),children:e.jsx($,{height:18})})}),e.jsx(o,{variant:"ghost",onClick:()=>{I(s.id)},children:e.jsx(M,{height:18})}),e.jsx(o,{variant:"ghost",onClick:()=>{d.setData("book_id",s.id),x({...c,borrowBook:!0})},children:"Borrow"})]})})]},s.id)})})]})})]}),e.jsx(N,{children:e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx(V,{from:a.from,to:a.to,total:a.total}),e.jsx("div",{children:e.jsx(Y,{links:a.links})})]})})]})]})};function ee({onSubmit:a,form:r}){return console.log("form"),console.log(r),e.jsx("div",{children:e.jsxs(C,{className:"mt-4 border-none",children:[e.jsx(b,{children:e.jsx(_,{children:"Book Details"})}),e.jsx(y,{children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-col gap-2 ",children:[e.jsx(q,{htmlFor:"book",children:"Return Date"}),e.jsx(R,{onChange:t=>{r.setData("return_date",t)},value:r.data.return_date})]}),e.jsx("div",{children:e.jsx(k,{error:r.errors.notes,type:"text",onChange:t=>{r.setData("notes",t.target.value)},label:"Notes",value:r.data.notes,placeholder:"Notes"})}),e.jsx("div",{children:e.jsx(H,{error:r.errors.fine,label:"Book Condition Good",onChange:t=>{r.setData("fine",t)},placeholder:"Fine",value:r.data.fine,id:"bookCondition"})})]})}),e.jsx(N,{children:e.jsx("div",{className:"flex justify-end",children:e.jsx(o,{onClick:t=>{t.preventDefault(),a()},children:"Borrow"})})})]})})}export{Be as default};
