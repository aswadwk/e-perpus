import{r as p,j as c}from"./app-Djs2jfuW.js";import{c as $,a as P,P as A,n as L,q as z,r as G,F as H,D as K,d as q,e as U,t as V}from"./react-icons.esm-B9pCuMbZ.js";import{u as O,S as W,c as Z}from"./button-Cpxe5iL0.js";import{j as _,A as w,k as B,l as J,R as Q}from"./card-BFABGd-W.js";import{P as j}from"./input-U8cqmFES.js";var x="Popover",[E,ge]=$(x,[_]),g=_(),[X,d]=E(x),b=e=>{const{__scopePopover:n,children:t,open:a,defaultOpen:o,onOpenChange:r,modal:s=!1}=e,i=g(n),l=p.useRef(null),[u,h]=p.useState(!1),[m=!1,f]=q({prop:a,defaultProp:o,onChange:r});return c.jsx(Q,{...i,children:c.jsx(X,{scope:n,contentId:U(),triggerRef:l,open:m,onOpenChange:f,onOpenToggle:p.useCallback(()=>f(C=>!C),[f]),hasCustomAnchor:u,onCustomAnchorAdd:p.useCallback(()=>h(!0),[]),onCustomAnchorRemove:p.useCallback(()=>h(!1),[]),modal:s,children:t})})};b.displayName=x;var N="PopoverAnchor",Y=p.forwardRef((e,n)=>{const{__scopePopover:t,...a}=e,o=d(N,t),r=g(t),{onCustomAnchorAdd:s,onCustomAnchorRemove:i}=o;return p.useEffect(()=>(s(),()=>i()),[s,i]),c.jsx(w,{...r,...a,ref:n})});Y.displayName=N;var F="PopoverTrigger",y=p.forwardRef((e,n)=>{const{__scopePopover:t,...a}=e,o=d(F,t),r=g(t),s=O(n,o.triggerRef),i=c.jsx(j.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":T(o.open),...a,ref:s,onClick:P(e.onClick,o.onOpenToggle)});return o.hasCustomAnchor?i:c.jsx(w,{asChild:!0,...r,children:i})});y.displayName=F;var R="PopoverPortal",[ee,oe]=E(R,{forceMount:void 0}),S=e=>{const{__scopePopover:n,forceMount:t,children:a,container:o}=e,r=d(R,n);return c.jsx(ee,{scope:n,forceMount:t,children:c.jsx(A,{present:t||r.open,children:c.jsx(V,{asChild:!0,container:o,children:a})})})};S.displayName=R;var v="PopoverContent",D=p.forwardRef((e,n)=>{const t=oe(v,e.__scopePopover),{forceMount:a=t.forceMount,...o}=e,r=d(v,e.__scopePopover);return c.jsx(A,{present:a||r.open,children:r.modal?c.jsx(te,{...o,ref:n}):c.jsx(re,{...o,ref:n})})});D.displayName=v;var te=p.forwardRef((e,n)=>{const t=d(v,e.__scopePopover),a=p.useRef(null),o=O(n,a),r=p.useRef(!1);return p.useEffect(()=>{const s=a.current;if(s)return L(s)},[]),c.jsx(z,{as:W,allowPinchZoom:!0,children:c.jsx(M,{...e,ref:o,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:P(e.onCloseAutoFocus,s=>{var i;s.preventDefault(),r.current||(i=t.triggerRef.current)==null||i.focus()}),onPointerDownOutside:P(e.onPointerDownOutside,s=>{const i=s.detail.originalEvent,l=i.button===0&&i.ctrlKey===!0,u=i.button===2||l;r.current=u},{checkForDefaultPrevented:!1}),onFocusOutside:P(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})})}),re=p.forwardRef((e,n)=>{const t=d(v,e.__scopePopover),a=p.useRef(!1),o=p.useRef(!1);return c.jsx(M,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var s,i;(s=e.onCloseAutoFocus)==null||s.call(e,r),r.defaultPrevented||(a.current||(i=t.triggerRef.current)==null||i.focus(),r.preventDefault()),a.current=!1,o.current=!1},onInteractOutside:r=>{var l,u;(l=e.onInteractOutside)==null||l.call(e,r),r.defaultPrevented||(a.current=!0,r.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const s=r.target;((u=t.triggerRef.current)==null?void 0:u.contains(s))&&r.preventDefault(),r.detail.originalEvent.type==="focusin"&&o.current&&r.preventDefault()}})}),M=p.forwardRef((e,n)=>{const{__scopePopover:t,trapFocus:a,onOpenAutoFocus:o,onCloseAutoFocus:r,disableOutsidePointerEvents:s,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:u,onInteractOutside:h,...m}=e,f=d(v,t),C=g(t);return G(),c.jsx(H,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:o,onUnmountAutoFocus:r,children:c.jsx(K,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:h,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:u,onDismiss:()=>f.onOpenChange(!1),children:c.jsx(B,{"data-state":T(f.open),role:"dialog",id:f.contentId,...C,...m,ref:n,style:{...m.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),k="PopoverClose",ne=p.forwardRef((e,n)=>{const{__scopePopover:t,...a}=e,o=d(k,t);return c.jsx(j.button,{type:"button",...a,ref:n,onClick:P(e.onClick,()=>o.onOpenChange(!1))})});ne.displayName=k;var ae="PopoverArrow",se=p.forwardRef((e,n)=>{const{__scopePopover:t,...a}=e,o=g(t);return c.jsx(J,{...o,...a,ref:n})});se.displayName=ae;function T(e){return e?"open":"closed"}var ce=b,ie=y,pe=S,I=D;const he=ce,me=ie,le=p.forwardRef(({className:e,align:n="center",sideOffset:t=4,...a},o)=>c.jsx(pe,{children:c.jsx(I,{ref:o,align:n,sideOffset:t,className:Z("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...a})}));le.displayName=I.displayName;export{he as P,me as a,le as b};
