import{o as r,c as d,a as u,d as l,dC as f,p as n,r as i,at as m,bX as y,b as o,dZ as h,au as _,bn as b,d_ as B,d$ as v,e0 as w,e1 as C}from"./index-B-Wkf0n4.js";function x(e,a){return r(),d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[u("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})])}const D=l({__name:"Tooltip",props:{defaultOpen:{type:Boolean},open:{type:Boolean},delayDuration:{},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean}},emits:["update:open"],setup(e,{emit:a}){const c=f(e,a);return(s,g)=>(r(),d(o(h),m(y(o(c))),{default:n(()=>[i(s.$slots,"default")]),_:3},16))}}),T=l({__name:"TooltipContent",props:{ariaLabel:{},asChild:{type:Boolean},as:{},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean}},emits:["escapeKeyDown","pointerDownOutside"],setup(e,{emit:a}){const c=f(e,a);return(s,g)=>(r(),d(o(v),null,{default:n(()=>[u(o(B),_({...o(c),...s.$attrs},{class:o(b)("z-50 overflow-hidden rounded-md shadow-sm border bg-white px-3 py-1.5 text-xs text-gray-800 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:bg-slate-50 dark:text-slate-900",s.$attrs.class??"")}),{default:n(()=>[i(s.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),k=l({__name:"TooltipTrigger",props:{asChild:{type:Boolean},as:{}},setup(e){const a=e;return(t,p)=>(r(),d(o(w),_(a,{class:""}),{default:n(()=>[i(t.$slots,"default")]),_:3},16))}}),P=l({__name:"TooltipProvider",props:{delayDuration:{},skipDelayDuration:{},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean}},setup(e){const a=e;return(t,p)=>(r(),d(o(C),m(y(a)),{default:n(()=>[i(t.$slots,"default")]),_:3},16))}});export{P as _,D as a,k as b,T as c,x as r};