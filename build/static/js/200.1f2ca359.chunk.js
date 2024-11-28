"use strict";(self.webpackChunkfooter=self.webpackChunkfooter||[]).push([[200],{6200:(e,t,l)=>{l.r(t),l.d(t,{default:()=>n});var s=l(6213),r=l(5043),a=l(5475),i=l(7149),d=l(2684),o=l(5369),c=l(579);function n(e){var t,l,n;const{updateOrderStatus:x,setexceldata:p,setsingleorderid:u,userrole:h}=(0,r.useContext)(d.A),[m,b]=(0,r.useState)(""),[v,j]=(0,r.useState)(""),[f,N]=(0,r.useState)(!1),[w,g]=(0,r.useState)(1),[y,k]=(0,r.useState)(""),[S,C]=(0,r.useState)(!0),[_,O]=(0,r.useState)(!0),[D,T]=(0,r.useState)([]),[P,A]=(0,r.useState)(null);let[Q,z]=(0,r.useState)({refundCondition:"",billno:"",billdate:"",LRNO:"",shippingcharges:"",Trackingid:"",Courier:"",Deliverybydate:""});(0,r.useEffect)((()=>{L(w)}),[]);const E=()=>{w>1&&g((e=>{const t=e-1;return L(t),t}))},I=()=>{Math.ceil(y/10),S&&g((e=>{const t=e+1;return L(t),t}))},L=async e=>{let t=localStorage.getItem("token");try{const r=await s.A.get(`http://127.0.0.1:5000/api/order/fetchallordersforadmin/Delivered/${e}`,{method:"GET",headers:{authtoken:t}});var l;if(k(r.data.totalOrder),0===r.data.orders.length)C(!1),T(r.data);else await p(null===r||void 0===r||null===(l=r.data)||void 0===l?void 0:l.orders),T(r.data),C(!0);O(!1)}catch(P){A(P),O(!1)}},M=Math.ceil(y/10),W=(0,r.useRef)(null),[B,F]=(0,r.useState)(0),[R,U]=(0,r.useState)(null);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:" ",children:[f&&(0,c.jsx)("div",{className:" flex justify-center ",children:(0,c.jsxs)("div",{className:"w-[60%] bg-white shadow-xl shadow-gray-300 z-20 border-[1px] border-gray-300 py-5 my-6 rounded-md  absolute",children:[(0,c.jsx)("div",{onClick:()=>{N(!1)},className:"rounded-full cursor-pointer w-6 h-6 inline-block  ml-2  text-center justify-self-center border-black border-[1px] ",children:(0,c.jsx)("div",{className:"relative bottom-[7px] text-[20px]",children:"x"})}),(0,c.jsx)("div",{className:"flex justify-center py-2",children:(0,c.jsx)("div",{children:"Update some info"})}),(0,c.jsx)("div",{className:"grid    md:grid-cols-1 text-black  px-2 gap-2 md:gap-3 items-center",children:(0,c.jsxs)("select",{name:"refundCondition",onChange:e=>{z({...Q,refundCondition:e.target.value})},value:Q.refundCondition,className:"px-3 py-1 border-black border-[2px] rounded-md",children:[(0,c.jsx)("option",{value:"",disabled:!0,children:"Select Condition"}),[{value:"YES",label:"YES"},{value:"NO",label:"NO"}].map((e=>(0,c.jsx)("option",{value:e.value,children:e.label},e.value)))]})}),(0,c.jsx)("div",{className:"flex justify-center mt-1",children:(0,c.jsx)("button",{className:"text-[16px] bg-blue-600 rounded-full w-[50%] items-center mt-3  text-white px-2 py-[3px]",onClick:()=>{(async(e,t)=>{await x(e,t,Q),L(w)})(m,v)},children:"Update"})})]})}),(0,c.jsxs)("div",{className:"  mt-3 w-[1300px] h-[510px]",children:[(0,c.jsxs)("div",{className:"bg-[#464646] flex  sticky top-3 z-20 text-white mb-2  px-2 items-center lg: ",children:[(0,c.jsx)("div",{className:"  w-[140px]  px-3 py-1 ",children:"Bill No"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[130px]  px-3 py-1 ",children:"Order Id"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[250px]  px-3 py-1 ",children:"Product"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[120px]  px-3 py-1 ",children:"Quntity"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[120px]  px-3 py-1 ",children:"Amount"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[150px]  px-3 py-1 ",children:"State"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[150px]  px-3 py-1 ",children:"Platform"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[200px]  px-3 py-1 ",children:"delivery by date"})]}),null===D||void 0===D||null===(t=D.orders)||void 0===t?void 0:t.map((e=>{let t=new Date(e.Deliverybydate).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"});return t=t.split("/").join("-"),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"bg-[#f2f2f2] flex   text-black w-[1300px]  px-2 items-center ",children:[(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[140px] overflow-x-auto px-3 py-1 ",children:e.Billno}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[130px] overflow-x-auto px-3 py-1 ",children:e.OrderId}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[250px] overflow-x-auto px-3 py-1 ",children:e.Product}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[120px] overflow-x-auto px-3 py-1 ",children:e.Quntity}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[120px] overflow-x-auto px-3 py-1 ",children:e.Salesamount}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[150px] overflow-x-auto px-3 py-1 ",children:e.State}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[150px] overflow-x-auto px-3 py-1 ",children:e.Platform.name}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:t}),R===e._id&&(0,c.jsx)("div",{className:" sticky right-0 flex gap-2     z-10",children:(0,c.jsx)("div",{className:" top-[-19px]  absolute right-28  bg-white  border-black border-[1px] p-2  ",children:(0,c.jsx)("div",{className:"opstion  ",children:(0,c.jsx)("option",{className:`text-[12px] cursor-pointer ${"DTO"==m&&"bg-blue-400"}`,onClick:()=>{var t,l;t="DTO",l=e._id,b(t),j(l),N(!0)},value:"pending",children:"DTO"})})})}),(0,c.jsx)("div",{className:" sticky right-0 flex gap-2  bottom-2 z-10",children:(0,c.jsx)("div",{className:"bg-black rounded-full w-6 h-6 flex justify-center items-center  absolute bottom-3 right-16 text-white     text-[16px]  ",onClick:()=>(e=>{U((t=>t===e?null:e))})(e._id),children:(0,c.jsx)(i.Qxc,{})})})]},e._id),"  "]})}))]}),(0,c.jsxs)("div",{className:"    absolute md:w-[80%]  lg:w-[85%]   w-[90%] mt-10    ",children:[(0,c.jsxs)("div",{className:"text-white w-[100%] pb-5 flex gap-10 justify-center ",children:[1!==w?(0,c.jsxs)("button",{onClick:()=>{E()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)(o.vpL,{})," Previous"]})]}):(0,c.jsxs)("button",{disabled:!0,onClick:()=>{E()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)(o.vpL,{})," Previous"]})]}),(0,c.jsx)("div",{className:"text-black border-black border-[1px] px-2 rounded-md",children:w}),w!==Math.ceil(y/10)&&0!==y?(0,c.jsxs)("button",{onClick:()=>{I()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,c.jsx)(o.QyA,{})]})," "]}):(0,c.jsxs)("button",{disabled:!0,onClick:()=>{I()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,c.jsx)(o.QyA,{})]})," "]})]}),(0,c.jsx)("div",{className:"w-[100%] pb-5 flex gap-10  justify-center ",children:(0,c.jsxs)("div",{className:"flex items-center",children:[(0,c.jsx)("button",{onClick:()=>{if(W.current){const e=B-50;F(e),W.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 mb-2 py-1 rounded-md mr-2",disabled:B<=0,children:"<"}),(0,c.jsx)("div",{ref:W,className:"relative overflow-x-auto hide-scrollbar",style:{maxWidth:"150px",whiteSpace:"nowrap"},children:(0,c.jsx)("div",{className:"flex gap-2",children:function(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const s=[];for(let r=e;r<t;r+=l)s.push(r);return s}(1,M+1).map((e=>(0,c.jsx)("div",{onClick:()=>{(e=>{S&&g((t=>{const l=e;return L(l),l}))})(e)},className:"border-black text-center cursor-pointer border-[1px] px-2",style:{width:50},children:e},e)))})}),(0,c.jsx)("button",{onClick:()=>{if(W.current){const e=B+50;F(e),W.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 mb-2 rounded-md ml-2",disabled:B>=(null===(l=W.current)||void 0===l?void 0:l.scrollWidth)-(null===(n=W.current)||void 0===n?void 0:n.clientWidth),children:">"})]})})]})]})})}}}]);
//# sourceMappingURL=200.1f2ca359.chunk.js.map