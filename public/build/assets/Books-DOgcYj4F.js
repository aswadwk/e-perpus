import{r as c,W as fe,j as t,Y as me}from"./app-C6SFS50B.js";import{c as B,B as pe,u as R}from"./button-CCvBVxMY.js";import{J as G,c as be,P as I,a as j,u as C,b as ve}from"./index-Cyr5XEdt.js";import{S as xe}from"./Sheet-DRzjVnfL.js";import{C as Se,a as we,b as ge,c as Ce,d as je}from"./card-8IVMwDKs.js";import{L as Pe}from"./label-XivaCM4i.js";import{D as ye,T as Re,c as J}from"./tabs-k7lupySL.js";import{I as Ee}from"./InputCustom-VAyEb9vp.js";import{I as Ne}from"./InputCheckBox-CA9P94dH.js";import{f as Te}from"./calendar-DqUkXWJs.js";import{B as Ae}from"./BookLayout-B0vdHBlF.js";import{P as T}from"./index-ydiVDJ0R.js";import{u as _e}from"./index-BgJgPHWB.js";import{S as X}from"./separator-BaiYv09a.js";import"./popover-DvVeSpeR.js";import"./utils-qQ2OrSDw.js";import"./input-CdbUr0YJ.js";import"./checkbox-Cv-nouFf.js";import"./dialog-Dh2D4odw.js";function K({book:e,aspectRatio:o="portrait",width:r,height:l,className:n,...s}){const[a,i]=c.useState({borrowBook:!1}),d=fe({book_id:"",return_date:new Date,notes:"",fine:!0});async function h(){d.transform(u=>({...u,return_date:Te(u.return_date,"yyyy-MM-dd")})),d.post(route("web.books.borrow",d.data.book_id),{preserveState:!0,onSuccess:()=>{d.reset(),G.success("Book borrowed successfully"),i({...a,borrowBook:!1})},onError:()=>{G.error("Failed to borrow book")}})}return t.jsxs("div",{className:B("space-y-3",n),...s,children:[t.jsx(xe,{isOpen:a.borrowBook,onClose:()=>{i({...a,borrowBook:!1})},width:"w-[600px] sm:w-[840px]",title:"Borrow Book",description:"Fill in the form below to borrow a book",children:t.jsx(De,{form:d,onSubmit:h})}),t.jsxs("div",{className:"relative overflow-hidden rounded-md cursor-pointer",onClick:()=>{i({...a,borrowBook:!0}),d.setData("book_id",e.id)},children:[t.jsx("img",{src:e.cover,alt:e.title,width:r,height:l,className:B("h-auto w-auto object-cover transition-all hover:scale-105",o==="portrait"?"aspect-[3/4]":"aspect-square")}),t.jsx("div",{className:"absolute top-0 right-0 p-2 text-xs font-semibold text-white bg-primary-500 rounded-bl-md",children:e.genre})]}),t.jsxs("div",{className:"space-y-1 text-sm cursor-pointer",onClick:()=>{i({...a,borrowBook:!0}),d.setData("book_id",e.id)},children:[t.jsx("h3",{className:"font-medium leading-none",children:e.title}),t.jsx("p",{className:"text-xs text-muted-foreground",children:e.author})]})]})}function De({onSubmit:e,form:o}){return console.log("form"),console.log(o),t.jsx("div",{children:t.jsxs(Se,{className:"mt-4 border-none",children:[t.jsx(we,{children:t.jsx(ge,{children:"Book Details"})}),t.jsx(Ce,{children:t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsxs("div",{className:"flex flex-col gap-2 ",children:[t.jsx(Pe,{htmlFor:"book",children:"Return Date"}),t.jsx(ye,{onChange:r=>{o.setData("return_date",r)},value:o.data.return_date})]}),t.jsx("div",{children:t.jsx(Ee,{error:o.errors.notes,type:"text",onChange:r=>{o.setData("notes",r.target.value)},label:"Notes",value:o.data.notes,placeholder:"Notes"})}),t.jsx("div",{children:t.jsx(Ne,{error:o.errors.fine,label:"Book Condition Good",onChange:r=>{o.setData("fine",r)},placeholder:"Fine",value:o.data.fine,id:"bookCondition"})})]})}),t.jsx(je,{children:t.jsx("div",{className:"flex justify-end",children:t.jsx(pe,{onClick:r=>{r.preventDefault(),e()},children:"Borrow"})})})]})})}function Le(e,[o,r]){return Math.min(r,Math.max(o,e))}function ke(e,o){return c.useReducer((r,l)=>o[r][l]??r,e)}var F="ScrollArea",[Z,fr]=be(F),[Be,x]=Z(F),ee=c.forwardRef((e,o)=>{const{__scopeScrollArea:r,type:l="hover",dir:n,scrollHideDelay:s=600,...a}=e,[i,d]=c.useState(null),[h,u]=c.useState(null),[m,f]=c.useState(null),[p,v]=c.useState(null),[E,M]=c.useState(null),[g,A]=c.useState(0),[Y,_]=c.useState(0),[D,N]=c.useState(!1),[L,k]=c.useState(!1),b=R(o,P=>d(P)),S=_e(n);return t.jsx(Be,{scope:r,type:l,dir:S,scrollHideDelay:s,scrollArea:i,viewport:h,onViewportChange:u,content:m,onContentChange:f,scrollbarX:p,onScrollbarXChange:v,scrollbarXEnabled:D,onScrollbarXEnabledChange:N,scrollbarY:E,onScrollbarYChange:M,scrollbarYEnabled:L,onScrollbarYEnabledChange:k,onCornerWidthChange:A,onCornerHeightChange:_,children:t.jsx(T.div,{dir:S,...a,ref:b,style:{position:"relative","--radix-scroll-area-corner-width":g+"px","--radix-scroll-area-corner-height":Y+"px",...e.style}})})});ee.displayName=F;var re="ScrollAreaViewport",oe=c.forwardRef((e,o)=>{const{__scopeScrollArea:r,children:l,nonce:n,...s}=e,a=x(re,r),i=c.useRef(null),d=R(o,i,a.onViewportChange);return t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:n}),t.jsx(T.div,{"data-radix-scroll-area-viewport":"",...s,ref:d,style:{overflowX:a.scrollbarXEnabled?"scroll":"hidden",overflowY:a.scrollbarYEnabled?"scroll":"hidden",...e.style},children:t.jsx("div",{ref:a.onContentChange,style:{minWidth:"100%",display:"table"},children:l})})]})});oe.displayName=re;var w="ScrollAreaScrollbar",U=c.forwardRef((e,o)=>{const{forceMount:r,...l}=e,n=x(w,e.__scopeScrollArea),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:a}=n,i=e.orientation==="horizontal";return c.useEffect(()=>(i?s(!0):a(!0),()=>{i?s(!1):a(!1)}),[i,s,a]),n.type==="hover"?t.jsx(We,{...l,ref:o,forceMount:r}):n.type==="scroll"?t.jsx(He,{...l,ref:o,forceMount:r}):n.type==="auto"?t.jsx(te,{...l,ref:o,forceMount:r}):n.type==="always"?t.jsx(V,{...l,ref:o}):null});U.displayName=w;var We=c.forwardRef((e,o)=>{const{forceMount:r,...l}=e,n=x(w,e.__scopeScrollArea),[s,a]=c.useState(!1);return c.useEffect(()=>{const i=n.scrollArea;let d=0;if(i){const h=()=>{window.clearTimeout(d),a(!0)},u=()=>{d=window.setTimeout(()=>a(!1),n.scrollHideDelay)};return i.addEventListener("pointerenter",h),i.addEventListener("pointerleave",u),()=>{window.clearTimeout(d),i.removeEventListener("pointerenter",h),i.removeEventListener("pointerleave",u)}}},[n.scrollArea,n.scrollHideDelay]),t.jsx(I,{present:r||s,children:t.jsx(te,{"data-state":s?"visible":"hidden",...l,ref:o})})}),He=c.forwardRef((e,o)=>{const{forceMount:r,...l}=e,n=x(w,e.__scopeScrollArea),s=e.orientation==="horizontal",a=z(()=>d("SCROLL_END"),100),[i,d]=ke("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return c.useEffect(()=>{if(i==="idle"){const h=window.setTimeout(()=>d("HIDE"),n.scrollHideDelay);return()=>window.clearTimeout(h)}},[i,n.scrollHideDelay,d]),c.useEffect(()=>{const h=n.viewport,u=s?"scrollLeft":"scrollTop";if(h){let m=h[u];const f=()=>{const p=h[u];m!==p&&(d("SCROLL"),a()),m=p};return h.addEventListener("scroll",f),()=>h.removeEventListener("scroll",f)}},[n.viewport,s,d,a]),t.jsx(I,{present:r||i!=="hidden",children:t.jsx(V,{"data-state":i==="hidden"?"hidden":"visible",...l,ref:o,onPointerEnter:j(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:j(e.onPointerLeave,()=>d("POINTER_LEAVE"))})})}),te=c.forwardRef((e,o)=>{const r=x(w,e.__scopeScrollArea),{forceMount:l,...n}=e,[s,a]=c.useState(!1),i=e.orientation==="horizontal",d=z(()=>{if(r.viewport){const h=r.viewport.offsetWidth<r.viewport.scrollWidth,u=r.viewport.offsetHeight<r.viewport.scrollHeight;a(i?h:u)}},10);return y(r.viewport,d),y(r.content,d),t.jsx(I,{present:l||s,children:t.jsx(V,{"data-state":s?"visible":"hidden",...n,ref:o})})}),V=c.forwardRef((e,o)=>{const{orientation:r="vertical",...l}=e,n=x(w,e.__scopeScrollArea),s=c.useRef(null),a=c.useRef(0),[i,d]=c.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),h=ce(i.viewport,i.content),u={...l,sizes:i,onSizesChange:d,hasThumb:h>0&&h<1,onThumbChange:f=>s.current=f,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:f=>a.current=f};function m(f,p){return Xe(f,a.current,i,p)}return r==="horizontal"?t.jsx(Ie,{...u,ref:o,onThumbPositionChange:()=>{if(n.viewport&&s.current){const f=n.viewport.scrollLeft,p=Q(f,i,n.dir);s.current.style.transform=`translate3d(${p}px, 0, 0)`}},onWheelScroll:f=>{n.viewport&&(n.viewport.scrollLeft=f)},onDragScroll:f=>{n.viewport&&(n.viewport.scrollLeft=m(f,n.dir))}}):r==="vertical"?t.jsx(Oe,{...u,ref:o,onThumbPositionChange:()=>{if(n.viewport&&s.current){const f=n.viewport.scrollTop,p=Q(f,i);s.current.style.transform=`translate3d(0, ${p}px, 0)`}},onWheelScroll:f=>{n.viewport&&(n.viewport.scrollTop=f)},onDragScroll:f=>{n.viewport&&(n.viewport.scrollTop=m(f))}}):null}),Ie=c.forwardRef((e,o)=>{const{sizes:r,onSizesChange:l,...n}=e,s=x(w,e.__scopeScrollArea),[a,i]=c.useState(),d=c.useRef(null),h=R(o,d,s.onScrollbarXChange);return c.useEffect(()=>{d.current&&i(getComputedStyle(d.current))},[d]),t.jsx(le,{"data-orientation":"horizontal",...n,ref:h,sizes:r,style:{bottom:0,left:s.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:s.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":O(r)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.x),onDragScroll:u=>e.onDragScroll(u.x),onWheelScroll:(u,m)=>{if(s.viewport){const f=s.viewport.scrollLeft+u.deltaX;e.onWheelScroll(f),de(f,m)&&u.preventDefault()}},onResize:()=>{d.current&&s.viewport&&a&&l({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:H(a.paddingLeft),paddingEnd:H(a.paddingRight)}})}})}),Oe=c.forwardRef((e,o)=>{const{sizes:r,onSizesChange:l,...n}=e,s=x(w,e.__scopeScrollArea),[a,i]=c.useState(),d=c.useRef(null),h=R(o,d,s.onScrollbarYChange);return c.useEffect(()=>{d.current&&i(getComputedStyle(d.current))},[d]),t.jsx(le,{"data-orientation":"vertical",...n,ref:h,sizes:r,style:{top:0,right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":O(r)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.y),onDragScroll:u=>e.onDragScroll(u.y),onWheelScroll:(u,m)=>{if(s.viewport){const f=s.viewport.scrollTop+u.deltaY;e.onWheelScroll(f),de(f,m)&&u.preventDefault()}},onResize:()=>{d.current&&s.viewport&&a&&l({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:H(a.paddingTop),paddingEnd:H(a.paddingBottom)}})}})}),[ze,ne]=Z(w),le=c.forwardRef((e,o)=>{const{__scopeScrollArea:r,sizes:l,hasThumb:n,onThumbChange:s,onThumbPointerUp:a,onThumbPointerDown:i,onThumbPositionChange:d,onDragScroll:h,onWheelScroll:u,onResize:m,...f}=e,p=x(w,r),[v,E]=c.useState(null),M=R(o,b=>E(b)),g=c.useRef(null),A=c.useRef(""),Y=p.viewport,_=l.content-l.viewport,D=C(u),N=C(d),L=z(m,10);function k(b){if(g.current){const S=b.clientX-g.current.left,P=b.clientY-g.current.top;h({x:S,y:P})}}return c.useEffect(()=>{const b=S=>{const P=S.target;(v==null?void 0:v.contains(P))&&D(S,_)};return document.addEventListener("wheel",b,{passive:!1}),()=>document.removeEventListener("wheel",b,{passive:!1})},[Y,v,_,D]),c.useEffect(N,[l,N]),y(v,L),y(p.content,L),t.jsx(ze,{scope:r,scrollbar:v,hasThumb:n,onThumbChange:C(s),onThumbPointerUp:C(a),onThumbPositionChange:N,onThumbPointerDown:C(i),children:t.jsx(T.div,{...f,ref:M,style:{position:"absolute",...f.style},onPointerDown:j(e.onPointerDown,b=>{b.button===0&&(b.target.setPointerCapture(b.pointerId),g.current=v.getBoundingClientRect(),A.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",p.viewport&&(p.viewport.style.scrollBehavior="auto"),k(b))}),onPointerMove:j(e.onPointerMove,k),onPointerUp:j(e.onPointerUp,b=>{const S=b.target;S.hasPointerCapture(b.pointerId)&&S.releasePointerCapture(b.pointerId),document.body.style.webkitUserSelect=A.current,p.viewport&&(p.viewport.style.scrollBehavior=""),g.current=null})})})}),W="ScrollAreaThumb",se=c.forwardRef((e,o)=>{const{forceMount:r,...l}=e,n=ne(W,e.__scopeScrollArea);return t.jsx(I,{present:r||n.hasThumb,children:t.jsx(Me,{ref:o,...l})})}),Me=c.forwardRef((e,o)=>{const{__scopeScrollArea:r,style:l,...n}=e,s=x(W,r),a=ne(W,r),{onThumbPositionChange:i}=a,d=R(o,m=>a.onThumbChange(m)),h=c.useRef(),u=z(()=>{h.current&&(h.current(),h.current=void 0)},100);return c.useEffect(()=>{const m=s.viewport;if(m){const f=()=>{if(u(),!h.current){const p=Fe(m,i);h.current=p,i()}};return i(),m.addEventListener("scroll",f),()=>m.removeEventListener("scroll",f)}},[s.viewport,u,i]),t.jsx(T.div,{"data-state":a.hasThumb?"visible":"hidden",...n,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:j(e.onPointerDownCapture,m=>{const p=m.target.getBoundingClientRect(),v=m.clientX-p.left,E=m.clientY-p.top;a.onThumbPointerDown({x:v,y:E})}),onPointerUp:j(e.onPointerUp,a.onThumbPointerUp)})});se.displayName=W;var q="ScrollAreaCorner",ae=c.forwardRef((e,o)=>{const r=x(q,e.__scopeScrollArea),l=!!(r.scrollbarX&&r.scrollbarY);return r.type!=="scroll"&&l?t.jsx(Ye,{...e,ref:o}):null});ae.displayName=q;var Ye=c.forwardRef((e,o)=>{const{__scopeScrollArea:r,...l}=e,n=x(q,r),[s,a]=c.useState(0),[i,d]=c.useState(0),h=!!(s&&i);return y(n.scrollbarX,()=>{var m;const u=((m=n.scrollbarX)==null?void 0:m.offsetHeight)||0;n.onCornerHeightChange(u),d(u)}),y(n.scrollbarY,()=>{var m;const u=((m=n.scrollbarY)==null?void 0:m.offsetWidth)||0;n.onCornerWidthChange(u),a(u)}),h?t.jsx(T.div,{...l,ref:o,style:{width:s,height:i,position:"absolute",right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function H(e){return e?parseInt(e,10):0}function ce(e,o){const r=e/o;return isNaN(r)?0:r}function O(e){const o=ce(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,l=(e.scrollbar.size-r)*o;return Math.max(l,18)}function Xe(e,o,r,l="ltr"){const n=O(r),s=n/2,a=o||s,i=n-a,d=r.scrollbar.paddingStart+a,h=r.scrollbar.size-r.scrollbar.paddingEnd-i,u=r.content-r.viewport,m=l==="ltr"?[0,u]:[u*-1,0];return ie([d,h],m)(e)}function Q(e,o,r="ltr"){const l=O(o),n=o.scrollbar.paddingStart+o.scrollbar.paddingEnd,s=o.scrollbar.size-n,a=o.content-o.viewport,i=s-l,d=r==="ltr"?[0,a]:[a*-1,0],h=Le(e,d);return ie([0,a],[0,i])(h)}function ie(e,o){return r=>{if(e[0]===e[1]||o[0]===o[1])return o[0];const l=(o[1]-o[0])/(e[1]-e[0]);return o[0]+l*(r-e[0])}}function de(e,o){return e>0&&e<o}var Fe=(e,o=()=>{})=>{let r={left:e.scrollLeft,top:e.scrollTop},l=0;return function n(){const s={left:e.scrollLeft,top:e.scrollTop},a=r.left!==s.left,i=r.top!==s.top;(a||i)&&o(),r=s,l=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(l)};function z(e,o){const r=C(e),l=c.useRef(0);return c.useEffect(()=>()=>window.clearTimeout(l.current),[]),c.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(r,o)},[r,o])}function y(e,o){const r=C(o);ve(()=>{let l=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(l),l=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(l),n.unobserve(e)}}},[e,r])}var ue=ee,Ue=oe,Ve=ae;const he=c.forwardRef(({className:e,children:o,...r},l)=>t.jsxs(ue,{ref:l,className:B("relative overflow-hidden",e),...r,children:[t.jsx(Ue,{className:"h-full w-full rounded-[inherit]",children:o}),t.jsx($,{}),t.jsx(Ve,{})]}));he.displayName=ue.displayName;const $=c.forwardRef(({className:e,orientation:o="vertical",...r},l)=>t.jsx(U,{ref:l,orientation:o,className:B("flex touch-none select-none transition-colors",o==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",o==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...r,children:t.jsx(se,{className:"relative flex-1 rounded-full bg-border"})}));$.displayName=U.displayName;const mr=({books:e,recommendations:o})=>{var r;return t.jsxs(Ae,{children:[t.jsx(me,{title:"Books"}),t.jsxs(Re,{defaultValue:"music",className:"h-full space-y-6",children:[t.jsxs(J,{value:"music",className:"p-0 border-none outline-none",children:[t.jsx("div",{className:"flex items-center justify-between",children:t.jsxs("div",{className:"space-y-1",children:[t.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Books"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Improve your reading literacy today with our free reading resources."})]})}),t.jsx(X,{className:"my-4"}),t.jsx("div",{className:"relative",children:t.jsx("div",{className:"grid grid-cols-3 gap-4 pb-4 md:grid-cols-4",children:(r=e.data)==null?void 0:r.map(l=>t.jsx(K,{book:l,className:"w-[250px]",aspectRatio:"portrait",width:250,height:330},l.name))})}),t.jsxs("div",{className:"mt-6 space-y-1",children:[t.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"Made for You"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Get better recommendations the more you read."})]}),t.jsx(X,{className:"my-4"}),t.jsx("div",{className:"relative",children:t.jsxs(he,{children:[t.jsx("div",{className:"flex pb-4 space-x-4",children:o==null?void 0:o.map(l=>t.jsx(K,{book:l,className:"w-[150px]",aspectRatio:"portrait",width:150,height:300},l.name))}),t.jsx($,{orientation:"horizontal"})]})})]}),t.jsxs(J,{value:"podcasts",className:"h-full flex-col border-none p-0 data-[state=active]:flex",children:[t.jsx("div",{className:"flex items-center justify-between",children:t.jsxs("div",{className:"space-y-1",children:[t.jsx("h2",{className:"text-2xl font-semibold tracking-tight",children:"New Episodes"}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"Your favorite podcasts. Updated daily."})]})}),t.jsx(X,{className:"my-4"})]})]})]})};export{mr as default};