"use strict";(self.webpackChunkfooter=self.webpackChunkfooter||[]).push([[288],{6288:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var r=s(6213),l=s(5043),a=s(5369),d=s(2684),i=s(579);function c(e){var t,s;const[c,o]=(0,l.useState)([]),[n,x]=(0,l.useState)(null),[p,u]=(0,l.useState)(!1),[h,m]=(0,l.useState)(!0),[v,b]=(0,l.useState)(1),[w,f]=(0,l.useState)(""),[j,N]=(0,l.useState)(!0),{updateOrderStatus:y,userrole:g,setexceldata:k,setsingleorderid:S}=(0,l.useContext)(d.A);(0,l.useEffect)((()=>{A(v)}),[]);const C=()=>{v>1&&b((e=>{const t=e-1;return A(t),t}))},P=()=>{Math.ceil(w/10),j&&b((e=>{const t=e+1;return A(t),t}))},A=async e=>{let t=localStorage.getItem("token");try{const l=await r.A.get(`https://backenddata77720.onrender.com/api/order/refundcon/${e}`,{method:"GET",headers:{authtoken:t}});var s;if(f(l.data.totalCount),0===l.data.data.length)N(!1),o(l.data.data);else await k(null===l||void 0===l||null===(s=l.data)||void 0===s?void 0:s.data),o(l.data.data),N(!0);m(!1)}catch(n){x(n),m(!1)}},D=Math.ceil(w/10),I=(0,l.useRef)(null),[B,L]=(0,l.useState)(0);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:" ",children:[(0,i.jsxs)("div",{className:"  mt-4 w-[1350px] h-[510px] ",children:[(0,i.jsxs)("div",{className:"bg-[#464646] flex sticky top-3 z-20  text-white mb-2  px-2 items-center ",children:[(0,i.jsx)("div",{className:" border-white  px-3 py-1  w-[160px] ",children:"Bill date"}),(0,i.jsx)("div",{className:" border-white border-l-[1px] px-3 py-1  w-[160px] ",children:"Platform"}),(0,i.jsx)("div",{className:" border-l-[1px]  border-white w-[120px]  px-3 py-1 ",children:"Bill NO"}),(0,i.jsx)("div",{className:"border-l-[1px] border-white w-[130px]  px-3 py-1 ",children:"Order Id"}),(0,i.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"Product"}),(0,i.jsx)("div",{className:"border-l-[1px] border-white w-[130px]  px-3 py-1 ",children:"Quntity"}),(0,i.jsx)("div",{className:"border-l-[1px] border-white w-[150px]  px-3 py-1 ",children:"Amount"}),(0,i.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"State"}),(0,i.jsx)("div",{className:"border-l-[1px] border-white w-[160px]  px-3 py-1 ",children:"Refund Date"})]}),null===c||void 0===c?void 0:c.map((e=>{var t;let s=new Date(e.Billdate).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"});s=s.split("/").join("-");let r=new Date(e.refunddate).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"});return r=r.split("/").join("-"),(0,i.jsxs)("div",{className:"bg-[#f2f2f2] flex   text-black  px-2  items-center ",children:[(0,i.jsx)("div",{className:"overflow-x-auto  px-3 py-1  w-[160px] ",children:s}),(0,i.jsxs)("div",{className:"overflow-x-auto  px-3 py-1  w-[160px] ",children:[null===(t=e.Platform)||void 0===t?void 0:t.name," "]}),(0,i.jsx)("div",{className:"overflow-x-auto w-[120px]  px-3 py-1 ",children:e.Billno}),(0,i.jsx)("div",{className:"overflow-x-auto w-[130px]  px-3 py-1 ",children:e.OrderId}),(0,i.jsx)("div",{className:"overflow-x-auto w-[100px]  px-3 py-1 ",children:e.Product}),(0,i.jsx)("div",{className:"overflow-x-auto w-[130px]  px-3 py-1 ",children:e.Quntity}),(0,i.jsx)("div",{className:"overflow-x-auto w-[150px]  px-3 py-1 ",children:e.Salesamount}),(0,i.jsx)("div",{className:"overflow-x-auto w-[100px]  px-3 py-1 ",children:e.State}),(0,i.jsx)("div",{className:" w-[160px]  px-3 py-1 ",children:r})]},e._id)}))]}),(0,i.jsxs)("div",{className:"    absolute md:w-[80%]  lg:w-[85%]   w-[90%] mt-10    ",children:[(0,i.jsxs)("div",{className:"text-white w-[100%] pb-5 flex gap-10 justify-center ",children:[1!==v?(0,i.jsxs)("button",{onClick:()=>{C()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)(a.vpL,{})," Previous"]})]}):(0,i.jsxs)("button",{disabled:!0,onClick:()=>{C()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)(a.vpL,{})," Previous"]})]}),(0,i.jsx)("div",{className:"text-black border-black border-[1px] px-2 rounded-md",children:v}),v!==Math.ceil(w/10)&&0!==w?(0,i.jsxs)("button",{onClick:()=>{P()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,i.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,i.jsx)(a.QyA,{})]})," "]}):(0,i.jsxs)("button",{disabled:!0,onClick:()=>{P()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,i.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,i.jsx)(a.QyA,{})]})," "]})]}),(0,i.jsx)("div",{className:"w-[100%] pb-5 flex gap-10  justify-center ",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("button",{onClick:()=>{if(I.current){const e=B-50;L(e),I.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 mb-2 py-1 rounded-md mr-2",disabled:B<=0,children:"<"}),(0,i.jsx)("div",{ref:I,className:"relative overflow-x-auto hide-scrollbar",style:{maxWidth:"150px",whiteSpace:"nowrap"},children:(0,i.jsx)("div",{className:"flex gap-2",children:function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const r=[];for(let l=e;l<t;l+=s)r.push(l);return r}(1,D+1).map((e=>(0,i.jsx)("div",{onClick:()=>{(e=>{j&&b((t=>{const s=e;return A(s),s}))})(e)},className:"border-black text-center cursor-pointer border-[1px] px-2",style:{width:50},children:e},e)))})}),(0,i.jsx)("button",{onClick:()=>{if(I.current){const e=B+50;L(e),I.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 mb-2 rounded-md ml-2",disabled:B>=(null===(t=I.current)||void 0===t?void 0:t.scrollWidth)-(null===(s=I.current)||void 0===s?void 0:s.clientWidth),children:">"})]})})]})]})})}}}]);
//# sourceMappingURL=288.8f0e0038.chunk.js.map