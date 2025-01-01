"use strict";(self.webpackChunkfooter=self.webpackChunkfooter||[]).push([[138],{3138:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var l=r(6213),a=r(5043),s=r(5475),i=r(7149),o=r(2684),c=r(5369),d=r(579);function n(e){var t,r,n;const[x,p]=(0,a.useState)(""),[h,u]=(0,a.useState)(""),m="https://backenddata77720.onrender.com",{updateOrderStatus:b,setexceldata:v,setsingleorderid:w,userrole:N}=(0,a.useContext)(o.A),[j,g]=(0,a.useState)(""),[f,y]=(0,a.useState)(""),[k,S]=(0,a.useState)(!1),[C,_]=(0,a.useState)(1),[D,A]=(0,a.useState)(""),[I,P]=(0,a.useState)(!0),[$,L]=(0,a.useState)(!0),[O,T]=(0,a.useState)([]),[z,Q]=(0,a.useState)(null);let[R,E]=(0,a.useState)({billno:"",billdate:"",LRNO:"",shippingcharges:"",Trackingid:"",Courier:"",Deliverybydate:""});(0,a.useEffect)((()=>{B(C)}),[]);const M=()=>{C>1&&_((e=>{const t=e-1;return B(t),t}))},W=()=>{Math.ceil(D/10),I&&_((e=>{const t=e+1;return B(t),t}))},B=async e=>{let t=localStorage.getItem("token");try{const a=await l.A.get(`${m}/api/order/fetchallordersforadmin/RTD/${e}`,{method:"GET",headers:{authtoken:t}});var r;if(A(a.data.totalOrder),0===a.data.orders.length)P(!1),T(a.data);else await v(null===a||void 0===a||null===(r=a.data)||void 0===r?void 0:r.orders),T(a.data),P(!0);L(!1)}catch(z){Q(z),L(!1)}},F=Math.ceil(D/10),G=(0,a.useRef)(null),[K,U]=(0,a.useState)(0),[q,H]=(0,a.useState)(null);let J=async(e,t)=>{await g(e),await y(t),await S(!0)};const V=async()=>{let e=localStorage.getItem("token");try{var t,r;const a=await l.A.get(`${m}/api/order/trackingid/${h}`,{params:{status:"Shipped"},headers:{authtoken:e}});console.log("API Response:",a.data),await p(a.data),await b("Shipped",null===a||void 0===a||null===(t=a.data)||void 0===t||null===(r=t.order)||void 0===r?void 0:r._id,R),B(C)}catch(z){console.error("Error fetching data:",z)}};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"relative ",children:[(0,d.jsx)("div",{className:" sticky left-0 flex gap-2 h-10  bottom-2 z-10",children:(0,d.jsxs)("div",{className:"mt-2 space-x-2  sticky z-10 left-10 ",children:[(0,d.jsx)("input",{type:"text",name:"name",onChange:e=>{u(e.target.value)},value:h,onKeyDown:e=>{"Enter"===e.key&&V()},placeholder:"Scan to Shipped",className:" px-3 py-1 border-black border-[2px] outline-none rounded-md"}),(0,d.jsx)("button",{onClick:()=>{V()},className:"bg-blue-500 rounded-md px-2 uppercase text-white border-black border-[1px] ",children:"Search"})]})}),(0,d.jsx)("div",{className:"text-red-600 text-[12px]",children:null===x||void 0===x?void 0:x.error}),(0,d.jsxs)("div",{className:"  mt-3 w-[1450px] h-[510px]",children:[(0,d.jsxs)("div",{className:"bg-[#464646] flex sticky top-3 z-20  text-white mb-2  px-2 items-center lg: ",children:[(0,d.jsx)("div",{className:"  w-[100px]  px-3 py-1 ",children:"Bill No"}),(0,d.jsx)("div",{className:"border-l-[1px] border-white w-[110px]  px-3 py-1 ",children:"Order Id"}),(0,d.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"Product"}),(0,d.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"Quntity"}),(0,d.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"Amount"}),(0,d.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"State"}),(0,d.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"Platform"}),(0,d.jsx)("div",{className:"border-l-[1px] border-white w-[180px]  px-3 py-1 ",children:"Dispatch by date"}),(0,d.jsx)("div",{className:"border-l-[1px] border-white w-[180px]  px-3 py-1 ",children:"Courier"}),(0,d.jsx)("div",{className:"border-l-[1px] border-white w-[140px]  px-3 py-1 ",children:"Tracking ID"}),(0,d.jsx)("div",{className:"border-l-[1px] border-white w-[120px]  px-3 py-1 ",children:"LR NO."})]}),null===O||void 0===O||null===(t=O.orders)||void 0===t?void 0:t.map((e=>{let t=new Date(e.Dispatchbydate).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"});return t=t.split("/").join("-"),(0,d.jsxs)("div",{className:"bg-[#f2f2f2] flex  cursor-pointer text-black   px-2 items-center ",children:[(0,d.jsx)(s.N_,{to:"/home/Searchpage",onClick:()=>w(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Billno}),(0,d.jsx)(s.N_,{to:"/home/Searchpage",onClick:()=>w(e._id),className:" w-[110px] overflow-x-auto px-3 py-1 ",children:e.OrderId}),(0,d.jsx)(s.N_,{to:"/home/Searchpage",onClick:()=>w(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Product}),(0,d.jsx)(s.N_,{to:"/home/Searchpage",onClick:()=>w(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Quntity}),(0,d.jsx)(s.N_,{to:"/home/Searchpage",onClick:()=>w(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Salesamount}),(0,d.jsx)(s.N_,{to:"/home/Searchpage",onClick:()=>w(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.State}),(0,d.jsx)(s.N_,{to:"/home/Searchpage",onClick:()=>w(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Platform.name}),(0,d.jsx)(s.N_,{to:"/home/Searchpage",onClick:()=>w(e._id),className:" w-[180px] overflow-x-auto px-3 py-1 ",children:t}),(0,d.jsx)(s.N_,{to:"/home/Searchpage",onClick:()=>w(e._id),className:" w-[180px] overflow-x-auto px-3 py-1 ",children:e.courier}),(0,d.jsx)(s.N_,{to:"/home/Searchpage",onClick:()=>w(e._id),className:" w-[140px] overflow-x-auto px-3 py-1 ",children:e.trackingnumber}),(0,d.jsx)(s.N_,{to:"/home/Searchpage",onClick:()=>w(e._id),className:" w-[120px] overflow-x-auto px-3 py-1 ",children:e.Lrno}),q===e._id&&(0,d.jsx)("div",{className:" sticky right-0 flex gap-2     z-10",children:(0,d.jsxs)("div",{className:" top-[-19px]  absolute right-28  bg-white  border-black border-[1px] p-2  ",children:[(0,d.jsxs)("div",{className:"opstion  ",children:[(0,d.jsx)("option",{className:`text-[12px] cursor-pointer ${"Shipped"==j&&"bg-blue-400"}`,onClick:()=>{J("Shipped",e._id)},value:"pending",children:"Shipped"}),(0,d.jsx)("option",{className:`text-[12px] cursor-pointer ${"Not Sent"==j&&"bg-blue-400"}`,onClick:()=>{J("Not Sent",e._id)},value:"delivered",children:"Not Sent"}),(0,d.jsx)("option",{className:`text-[12px] cursor-pointer ${"Cancel"==j&&"bg-blue-400"}`,onClick:()=>{J("Cancel",e._id)},value:"canceled",children:"Cancel"})]}),(0,d.jsx)("div",{className:"flex justify-center mt-1",children:(0,d.jsx)("button",{className:"text-[10px] bg-blue-600 rounded-full   items-center   text-white px-2  ",onClick:()=>{(async(e,t)=>{await b(e,t,R),B(C)})(j,f)},children:"Update"})})]})}),(0,d.jsx)("div",{className:" sticky right-0 flex gap-2  bottom-2 z-10",children:(0,d.jsx)("div",{className:"bg-black rounded-full w-6 h-6 flex justify-center items-center  absolute bottom-3 right-16 text-white     text-[16px]  ",onClick:()=>(e=>{H((t=>t===e?null:e))})(e._id),children:(0,d.jsx)(i.Qxc,{})})})]},e._id)}))]}),(0,d.jsxs)("div",{className:"     fixed md:w-[80%]  lg:w-[85%]   w-[90%]  bottom-[-20px]   ",children:[(0,d.jsxs)("div",{className:"text-white w-[100%] pb-5 flex gap-10 justify-center ",children:[1!==C?(0,d.jsxs)("button",{onClick:()=>{M()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,d.jsxs)("div",{className:"flex items-center gap-2",children:[(0,d.jsx)(c.vpL,{})," Previous"]})]}):(0,d.jsxs)("button",{disabled:!0,onClick:()=>{M()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,d.jsxs)("div",{className:"flex items-center gap-2",children:[(0,d.jsx)(c.vpL,{})," Previous"]})]}),(0,d.jsx)("div",{className:"text-black border-black border-[1px] px-2 rounded-md",children:C}),C!==Math.ceil(D/10)?(0,d.jsxs)("button",{onClick:()=>{W()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,d.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,d.jsx)(c.QyA,{})]})," "]}):(0,d.jsxs)("button",{disabled:!0,onClick:()=>{W()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,d.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,d.jsx)(c.QyA,{})]})," "]})]}),(0,d.jsx)("div",{className:"w-[100%] pb-5 flex gap-10  justify-center ",children:(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsx)("button",{onClick:()=>{if(G.current){const e=K-50;U(e),G.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 mb-2 py-1 rounded-md mr-2",disabled:K<=0,children:"<"}),(0,d.jsx)("div",{ref:G,className:"relative overflow-x-auto hide-scrollbar",style:{maxWidth:"150px",whiteSpace:"nowrap"},children:(0,d.jsx)("div",{className:"flex gap-2",children:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const l=[];for(let a=e;a<t;a+=r)l.push(a);return l}(1,F+1).map((e=>(0,d.jsx)("div",{onClick:()=>{(e=>{I&&_((t=>{const r=e;return B(r),r}))})(e)},className:"border-black text-center cursor-pointer border-[1px] px-2",style:{width:50},children:e},e)))})}),(0,d.jsx)("button",{onClick:()=>{if(G.current){const e=K+50;U(e),G.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 mb-2 rounded-md ml-2",disabled:K>=(null===(r=G.current)||void 0===r?void 0:r.scrollWidth)-(null===(n=G.current)||void 0===n?void 0:n.clientWidth),children:">"})]})})]})]})})}}}]);
//# sourceMappingURL=138.f5ea46eb.chunk.js.map