import{cJ as se,c6 as re,cK as he,c8 as O,cL as Q,cM as xe,o as y,c as T,a as w,d as A,k as N,cN as be,ap as R,cO as _e,cP as we,by as I,ba as Ie,cQ as ye,cR as ke,cS as z,bD as B,br as q,cT as Se,bx as Me,cU as Ne,cV as W,am as H,bF as Re,cW as De,an as P,cX as Te,bI as Ce,cY as Pe,cZ as M,bJ as _,c_ as Ae,bM as X,c$ as ie,bw as Ee,p as S,r as Le,b as r,g as b,f as D,q as le,n as E,t as C,F as Y,ay as ue,d0 as Oe,l as Ue,ar as Be,d1 as $e,d2 as Fe,G as je,w as F,x as j,ah as V,ai as K,ci as Ve,cj as Ke,s as ze,d3 as He,ac as Ye,h as qe,at as Je,bX as Qe,E as We,j as Z,av as Xe,ck as Ze,cg as Ge,d4 as et,az as tt,C as at,D as ot,_ as nt}from"./index-B-Wkf0n4.js";import{g as G}from"./AppNavbarDefault.vue_vue_type_style_index_0_scoped_b3632ef9_lang-2QHkG5qr.js";import{c as st}from"./index-YfBMeBfX.js";import{l as ee}from"./index-DZaOvIQD.js";function rt(a){return se({},a)}var te=1e3*60,U=60*24,ae=U*30,oe=U*365;function it(a,n,c){var p,e,g;re(2,arguments);var m=xe(),f=(p=(e=c?.locale)!==null&&e!==void 0?e:m.locale)!==null&&p!==void 0?p:he;if(!f.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var v=st(a,n);if(isNaN(v))throw new RangeError("Invalid time value");var l=se(rt(c),{addSuffix:!!c?.addSuffix,comparison:v}),t,h;v>0?(t=O(n),h=O(a)):(t=O(a),h=O(n));var u=String((g=c?.roundingMethod)!==null&&g!==void 0?g:"round"),i;if(u==="floor")i=Math.floor;else if(u==="ceil")i=Math.ceil;else if(u==="round")i=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var o=h.getTime()-t.getTime(),s=o/te,x=Q(h)-Q(t),d=(o-x)/te,L=c?.unit,k;if(L?k=String(L):s<1?k="second":s<60?k="minute":s<U?k="hour":d<ae?k="day":d<oe?k="month":k="year",k==="second"){var fe=i(o/1e3);return f.formatDistance("xSeconds",fe,l)}else if(k==="minute"){var ve=i(s);return f.formatDistance("xMinutes",ve,l)}else if(k==="hour"){var pe=i(s/60);return f.formatDistance("xHours",pe,l)}else if(k==="day"){var me=i(d/U);return f.formatDistance("xDays",me,l)}else if(k==="month"){var J=i(d/ae);return J===12&&L!=="month"?f.formatDistance("xYears",1,l):f.formatDistance("xMonths",J,l)}else if(k==="year"){var ge=i(d/oe);return f.formatDistance("xYears",ge,l)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function ne(a,n){return re(1,arguments),it(a,Date.now(),n)}function lt(a,n){return y(),T("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})])}function ut(a,n){return y(),T("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})])}function Bt(a,n){return y(),T("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[w("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"})])}var ct=(a=>(a[a.Open=0]="Open",a[a.Closed=1]="Closed",a))(ct||{}),dt=(a=>(a[a.Pointer=0]="Pointer",a[a.Other=1]="Other",a))(dt||{});function ft(a){requestAnimationFrame(()=>requestAnimationFrame(a))}let ce=Symbol("MenuContext");function $(a){let n=Ce(ce,null);if(n===null){let c=new Error(`<${a} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,$),c}return n}let vt=A({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(a,{slots:n,attrs:c}){let p=N(1),e=N(null),g=N(null),m=N([]),f=N(""),v=N(null),l=N(1);function t(u=i=>i){let i=v.value!==null?m.value[v.value]:null,o=Ee(u(m.value.slice()),x=>I(x.dataRef.domRef)),s=i?o.indexOf(i):null;return s===-1&&(s=null),{items:o,activeItemIndex:s}}let h={menuState:p,buttonRef:e,itemsRef:g,items:m,searchQuery:f,activeItemIndex:v,activationTrigger:l,closeMenu:()=>{p.value=1,v.value=null},openMenu:()=>p.value=0,goToItem(u,i,o){let s=t(),x=Pe(u===M.Specific?{focus:M.Specific,id:i}:{focus:u},{resolveItems:()=>s.items,resolveActiveIndex:()=>s.activeItemIndex,resolveId:d=>d.id,resolveDisabled:d=>d.dataRef.disabled});f.value="",v.value=x,l.value=o??1,m.value=s.items},search(u){let i=f.value!==""?0:1;f.value+=u.toLowerCase();let o=(v.value!==null?m.value.slice(v.value+i).concat(m.value.slice(0,v.value+i)):m.value).find(x=>x.dataRef.textValue.startsWith(f.value)&&!x.dataRef.disabled),s=o?m.value.indexOf(o):-1;s===-1||s===v.value||(v.value=s,l.value=1)},clearSearch(){f.value=""},registerItem(u,i){let o=t(s=>[...s,{id:u,dataRef:i}]);m.value=o.items,v.value=o.activeItemIndex,l.value=1},unregisterItem(u){let i=t(o=>{let s=o.findIndex(x=>x.id===u);return s!==-1&&o.splice(s,1),o});m.value=i.items,v.value=i.activeItemIndex,l.value=1}};return be([e,g],(u,i)=>{var o;h.closeMenu(),_e(i,we.Loose)||(u.preventDefault(),(o=I(e))==null||o.focus())},R(()=>p.value===0)),Ie(ce,h),ye(R(()=>ke(p.value,{0:z.Open,1:z.Closed}))),()=>{let u={open:p.value===0,close:h.closeMenu};return B({ourProps:{},theirProps:a,slot:u,slots:n,attrs:c,name:"Menu"})}}}),pt=A({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${q()}`}},setup(a,{attrs:n,slots:c,expose:p}){let e=$("MenuButton");p({el:e.buttonRef,$el:e.buttonRef});function g(l){switch(l.key){case _.Space:case _.Enter:case _.ArrowDown:l.preventDefault(),l.stopPropagation(),e.openMenu(),P(()=>{var t;(t=I(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(M.First)});break;case _.ArrowUp:l.preventDefault(),l.stopPropagation(),e.openMenu(),P(()=>{var t;(t=I(e.itemsRef))==null||t.focus({preventScroll:!0}),e.goToItem(M.Last)});break}}function m(l){switch(l.key){case _.Space:l.preventDefault();break}}function f(l){a.disabled||(e.menuState.value===0?(e.closeMenu(),P(()=>{var t;return(t=I(e.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(l.preventDefault(),e.openMenu(),ft(()=>{var t;return(t=I(e.itemsRef))==null?void 0:t.focus({preventScroll:!0})})))}let v=Se(R(()=>({as:a.as,type:n.type})),e.buttonRef);return()=>{var l;let t={open:e.menuState.value===0},{id:h,...u}=a,i={ref:e.buttonRef,id:h,type:v.value,"aria-haspopup":"menu","aria-controls":(l=I(e.itemsRef))==null?void 0:l.id,"aria-expanded":a.disabled?void 0:e.menuState.value===0,onKeydown:g,onKeyup:m,onClick:f};return B({ourProps:i,theirProps:u,slot:t,attrs:n,slots:c,name:"MenuButton"})}}}),mt=A({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${q()}`}},setup(a,{attrs:n,slots:c,expose:p}){let e=$("MenuItems"),g=N(null);p({el:e.itemsRef,$el:e.itemsRef}),Me({container:R(()=>I(e.itemsRef)),enabled:R(()=>e.menuState.value===0),accept(t){return t.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:t.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(t){t.setAttribute("role","none")}});function m(t){var h;switch(g.value&&clearTimeout(g.value),t.key){case _.Space:if(e.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),e.search(t.key);case _.Enter:if(t.preventDefault(),t.stopPropagation(),e.activeItemIndex.value!==null){let u=e.items.value[e.activeItemIndex.value];(h=I(u.dataRef.domRef))==null||h.click()}e.closeMenu(),ie(I(e.buttonRef));break;case _.ArrowDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(M.Next);case _.ArrowUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(M.Previous);case _.Home:case _.PageUp:return t.preventDefault(),t.stopPropagation(),e.goToItem(M.First);case _.End:case _.PageDown:return t.preventDefault(),t.stopPropagation(),e.goToItem(M.Last);case _.Escape:t.preventDefault(),t.stopPropagation(),e.closeMenu(),P(()=>{var u;return(u=I(e.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case _.Tab:t.preventDefault(),t.stopPropagation(),e.closeMenu(),P(()=>Ae(I(e.buttonRef),t.shiftKey?X.Previous:X.Next));break;default:t.key.length===1&&(e.search(t.key),g.value=setTimeout(()=>e.clearSearch(),350));break}}function f(t){switch(t.key){case _.Space:t.preventDefault();break}}let v=Ne(),l=R(()=>v!==null?v.value===z.Open:e.menuState.value===0);return()=>{var t,h;let u={open:e.menuState.value===0},{id:i,...o}=a,s={"aria-activedescendant":e.activeItemIndex.value===null||(t=e.items.value[e.activeItemIndex.value])==null?void 0:t.id,"aria-labelledby":(h=I(e.buttonRef))==null?void 0:h.id,id:i,onKeydown:m,onKeyup:f,role:"menu",tabIndex:0,ref:e.itemsRef};return B({ourProps:s,theirProps:o,slot:u,attrs:n,slots:c,features:W.RenderStrategy|W.Static,visible:l.value,name:"MenuItems"})}}}),gt=A({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${q()}`}},setup(a,{slots:n,attrs:c,expose:p}){let e=$("MenuItem"),g=N(null);p({el:g,$el:g});let m=R(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===a.id:!1),f=R(()=>({disabled:a.disabled,textValue:"",domRef:g}));H(()=>{var o,s;let x=(s=(o=I(g))==null?void 0:o.textContent)==null?void 0:s.toLowerCase().trim();x!==void 0&&(f.value.textValue=x)}),H(()=>e.registerItem(a.id,f)),Re(()=>e.unregisterItem(a.id)),De(()=>{e.menuState.value===0&&(!m.value||e.activationTrigger.value!==0&&P(()=>{var o,s;return(s=(o=I(g))==null?void 0:o.scrollIntoView)==null?void 0:s.call(o,{block:"nearest"})}))});function v(o){if(a.disabled)return o.preventDefault();e.closeMenu(),ie(I(e.buttonRef))}function l(){if(a.disabled)return e.goToItem(M.Nothing);e.goToItem(M.Specific,a.id)}let t=Te();function h(o){t.update(o)}function u(o){!t.wasMoved(o)||a.disabled||m.value||e.goToItem(M.Specific,a.id,0)}function i(o){!t.wasMoved(o)||a.disabled||!m.value||e.goToItem(M.Nothing)}return()=>{let{disabled:o}=a,s={active:m.value,disabled:o,close:e.closeMenu},{id:x,...d}=a;return B({ourProps:{id:x,ref:g,role:"menuitem",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,onClick:v,onFocus:l,onPointerenter:h,onMouseenter:h,onPointermove:u,onMousemove:u,onPointerleave:i,onMouseleave:i},theirProps:d,slot:s,attrs:c,slots:n,name:"MenuItem"})}}});const ht={class:"py-1"},xt=["onClick"],$t=A({__name:"AppDropdown",props:{options:{type:Array},unmount:{type:Boolean,default:!0}},emits:["click"],setup(a){return(n,c)=>(y(),T(r(vt),{as:"div",class:"relative inline-block text-left"},{default:S(()=>[w(r(pt),{class:"h-full flex items-center"},{default:S(()=>[Le(n.$slots,"trigger")]),_:3}),w(ue,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:S(()=>[w(r(mt),{class:"absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:S(()=>[b("div",ht,[(y(!0),D(Y,null,le(a.options,(p,e)=>(y(),T(r(gt),{key:e},{default:S(({active:g})=>[b("button",{onClick:m=>n.$emit("click",p),class:E([g?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm w-full text-left"])},C(p),11,xt)]),_:2},1024))),128))])]),_:1})]),_:1})]),_:3}))}}),de=a=>(at("data-v-9e1c424c"),a=a(),ot(),a),bt={class:"relative"},_t=de(()=>b("p",{class:"text-[17px] font-normal"},"Notificações",-1)),wt={class:"flex px-4 gap-3 w-auto sm:w-[484px]"},It={class:"rounded-full"},yt={class:"w-full"},kt={class:"flex text-sm w-full"},St={class:"font-[500] text-gray-900 w-full"},Mt={class:"font-[400] text-gray-500 whitespace-nowrap text-[12px] text-right"},Nt={key:0,class:"font-[400] text-gray-900 w-full mt-1.5"},Rt={class:"w-auto text-xs py-1 pr-1 text-[11px] mt-1"},Dt={class:"flex justify-center bg-gray-100 min-h-[20px] mt-auto"},Tt={key:0,class:"text-[12px] font-[400] text-gray-600 py-2"},Ct={key:1,class:"h-full flex flex-col items-center justify-center"},Pt=de(()=>b("div",{class:"font-[400] text-sm text-center px-20 py-4 text-gray-600"}," Opa, parece que você ainda não tem notificações a serem exibidas :) ",-1)),At=A({__name:"UserNotificationNavbar",setup(a){const n=Oe(),c=Ue(),p=N(!1),e=Be(),g=R(()=>n.userNotifications.notifications),{list:m,containerProps:f,wrapperProps:v}=$e(g,{itemHeight:102});Fe(f.ref,async()=>l(),{distance:40}),H(()=>{n.userNotifications.notifications||n.fetchUserNotifications()});const l=async()=>{!p.value&&n.getActualPage<n.getTotalPages&&(p.value=!0,await n.fetchUserNotifications(n.getActualPage+1),p.value=!1)},t=o=>{n.markNotificationAsReaded(o.id),V(K.CLICK_VIEW_NOTIFICATION,{...o.notification_kind,notification_count:n.getTotalNofitications,total_notifications_unread:n.getUnreadNotification}),et({notification_count:n.getTotalNofitications})},h=R(()=>n.userNotifications.notifications&&n.userNotifications.notifications.length>0),u=()=>{n.markAllNotificationAsReaded(),V(K.CLICK_MARK_ALL_READ)},i=o=>{const s=localStorage.getItem("tenant-discovery"),x=s?JSON.parse(s):null;return o===""?{name:e.currentRoute.value.name||tt.DASHBOARD}:x&&x.custom_domain?`/${o}`:`/${e.currentRoute.value.params.broker}/${o}`};return(o,s)=>{const x=je("RouterLink");return y(),T(r(Ge),null,{default:S(()=>[w(r(Ve),null,{default:S(()=>[b("button",{onClick:s[0]||(s[0]=d=>r(V)(r(K).CLICK_NOTIFICATION_BELL))},[b("div",bt,[w(r(lt),{class:"w-[32px] stroke-[#6B7280] stroke-[1.5] -mb-1.5"}),w(ue,{name:"bounce"},{default:S(()=>[F((y(),D("div",{key:r(n).newNotifications,class:E(["total_notification absolute top-0 right-0 min-w-[4px] w-4 h-4 rounded-full bg-red-600 text-white font-inter text-[9px] font-bold border-white border-2 flex items-center justify-center transition-all duration-300",[r(n).getUnreadNotification>9&&"w-5",r(n).getUnreadNotification>99&&"w-6"]])},C(r(n).getUnreadNotification>0?r(n).getUnreadNotification>99?"99+":r(n).getUnreadNotification:""),3)),[[j,r(n).getUnreadNotification>0]])]),_:1})])])]),_:1}),w(r(Ze),null,{default:S(()=>[w(r(Ke),{class:"w-[var(--radix-popover-content-available-width)] sm:w-[485px] bg-white z-50 shadow-lg ring-1 ring-gray-900/5 focus:outline-none overflow-hidden rounded-box",side:"bottom",align:"end"},{default:S(()=>[b("div",null,[F(b("div",{class:"py-4 px-5 h-[62px] flex justify-between border-b items-center",onClick:s[2]||(s[2]=ze(()=>{},["prevent"]))},[_t,w(r(He),null,{default:S(()=>[w(r(Ye),{onClick:s[1]||(s[1]=d=>u()),variant:"link",disabled:r(n).getUnreadNotification<=0,class:E([[r(n).getUnreadNotification<=0&&"opacity-60"],"text-xs text-primary-light font-medium"])},{default:S(()=>[qe("Marcar todas como lidas")]),_:1},8,["disabled","class"])]),_:1})],512),[[j,h.value]]),b("ol",{class:"w-auto sm:w-[484px] h-[420px] overflow-overlay container-scroll flex flex-col",ref:r(f).ref,onScroll:s[3]||(s[3]=d=>r(f).onScroll())},[h.value?(y(),D(Y,{key:0},[b("li",Je(Qe(r(v))),[(y(!0),D(Y,null,le(r(m),d=>(y(),D("div",{key:d.index,class:E(["text-xs flex items-center w-full h-[102px] overflow-hidden",{"bg-gray-100":d.data.read}])},[w(x,{to:i(d.data.target_link),onClick:L=>t(d.data)},{default:S(()=>[b("div",wt,[b("div",It,[(y(),T(We(r(G)(d.data.notification_kind.slug).icon.icon),{class:E([r(G)(d.data.notification_kind.slug).icon.class,"h-9 w-9"])},null,8,["class"]))]),b("div",yt,[b("div",kt,[b("div",St,C(r(c).isBroker?d.data.broker_client.name:d.data.title),1),b("div",Mt,C(r(ne)(new Date(d.data.created_at),{locale:r(ee)}).includes("segundos")?"agora":`há ${r(ne)(new Date(d.data.created_at),{locale:r(ee)})}`),1)]),r(c).isBroker?(y(),D("div",Nt,C(d.data.title),1)):Z("",!0),b("div",Rt,C(d.data.message),1)])])]),_:2},1032,["to","onClick"])],2))),128))],16),b("li",Dt,[F(w(r(Xe),{class:"h-7 w-7 text-primary my-3"},null,512),[[j,p.value]]),r(n).getActualPage===r(n).getTotalPages?(y(),D("p",Tt," Não há mais notificações a serem exibidas :) ")):Z("",!0)])],64)):(y(),D("div",Ct,[b("div",null,[w(r(ut),{class:"w-16 h-16 text-gray-500"})]),Pt]))],544)])]),_:1})]),_:1})]),_:1})}}}),Ft=nt(At,[["__scopeId","data-v-9e1c424c"]]);export{Ft as U,$t as _,Bt as r};
