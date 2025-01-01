"use strict";(self.webpackChunkfooter=self.webpackChunkfooter||[]).push([[375],{4375:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var l=s(6213),r=s(5043),a=s(5475),i=s(7149),d=s(2684),o=s(5369),c=s(579);function n(e){var t,s,n;const{updateOrderStatus:x,setexceldata:p,setsingleorderid:u,userrole:h}=(0,r.useContext)(d.A),[m,b]=(0,r.useState)(""),[v,j]=(0,r.useState)(""),[N,f]=(0,r.useState)(!1),[g,w]=(0,r.useState)(1),[y,k]=(0,r.useState)(""),[S,C]=(0,r.useState)(!0),[_,O]=(0,r.useState)(!0),[D,L]=(0,r.useState)([]),[R,T]=(0,r.useState)(null);let[P,A]=(0,r.useState)({billno:"",billdate:"",LRNO:"",shippingcharges:"",Trackingid:"",Courier:"",Deliverybydate:""});(0,r.useEffect)((()=>{Q(g)}),[]);const E=()=>{g>1&&w((e=>{const t=e-1;return Q(t),t}))},I=()=>{Math.ceil(y/10),S&&w((e=>{const t=e+1;return Q(t),t}))},Q=async e=>{let t=localStorage.getItem("token");try{const r=await l.A.get(`https://backenddata77720.onrender.com/api/order/fetchallordersforadmin/OFD/${e}`,{method:"GET",headers:{authtoken:t}});var s;if(k(r.data.totalOrder),0===r.data.orders.length)C(!1),L(r.data);else await p(null===r||void 0===r||null===(s=r.data)||void 0===s?void 0:s.orders),L(r.data),C(!0);O(!1)}catch(R){T(R),O(!1)}};console.log(P);const z=Math.ceil(y/10),F=(0,r.useRef)(null),[$,M]=(0,r.useState)(0),[U,W]=(0,r.useState)(null);let Y=(e,t)=>{b(e),f("Lost"==e),j(t)},B=async(e,t)=>{await x(e,t,P),Q(g)};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:" ",children:[N&&(0,c.jsx)("div",{className:" flex justify-center ",children:(0,c.jsxs)("div",{className:"w-[40%] bg-white shadow-xl shadow-gray-300 z-20 border-[1px] border-gray-300 py-5 my-6 rounded-md  absolute",children:[(0,c.jsx)("div",{onClick:()=>{f(!1)},className:"rounded-full cursor-pointer w-6 h-6 inline-block  ml-2  text-center justify-self-center border-black border-[1px] ",children:(0,c.jsx)("div",{className:"relative bottom-[7px] text-[20px]",children:"x"})}),(0,c.jsx)("div",{className:"flex justify-center py-2",children:(0,c.jsx)("div",{children:"Update some info"})}),(0,c.jsx)("div",{className:"grid    md:grid-cols-1 text-black  px-2 gap-2 md:gap-3 items-center",children:(0,c.jsxs)("select",{name:"Retrunstatus",onChange:e=>{A({...P,[e.target.name]:e.target.value})},value:P.Retrunstatus,className:"px-3 py-1 border-black border-[2px] rounded-md",children:[(0,c.jsx)("option",{value:"Retrunstatus",children:"Retrunstatus"}),(0,c.jsx)("option",{value:"YES",children:"YES  "},"YES"),(0,c.jsx)("option",{value:"NO",children:"NO"},"NO")]})}),(0,c.jsx)("div",{className:"flex justify-center mt-1",children:(0,c.jsx)("button",{className:"text-[16px] bg-blue-600 rounded-full w-[50%] items-center mt-3  text-white px-2 py-[3px]",onClick:()=>{B(m,v)},children:"Update"})})]})}),(0,c.jsxs)("div",{className:"  mt-3 w-[1300px] h-[510px]",children:[(0,c.jsxs)("div",{className:"bg-[#464646] flex sticky top-3 z-20  text-white mb-2  px-2 items-center lg: ",children:[(0,c.jsx)("div",{className:"  w-[100px]  px-3 py-1 ",children:"Bill No"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[130px]  px-3 py-1 ",children:"Order Id"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[120px]  px-3 py-1 ",children:"Product"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[120px]  px-3 py-1 ",children:"Quntity"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[120px]  px-3 py-1 ",children:"Amount"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[150px]  px-3 py-1 ",children:"State"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[120px]  px-3 py-1 ",children:"Platform"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[200px]  px-3 py-1 ",children:"delivery by date"}),(0,c.jsx)("div",{className:"border-l-[1px] border-white w-[180px]  px-3 py-1 ",children:"OFD date"})]}),null===D||void 0===D||null===(t=D.orders)||void 0===t?void 0:t.map((e=>{let t=new Date(e.OFDdate).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"});t=t.split("/").join("-");let s=new Date(e.Deliverybydate).toLocaleDateString("en-IN",{year:"numeric",month:"2-digit",day:"2-digit"});return s=s.split("/").join("-"),(0,c.jsxs)("div",{className:"bg-[#f2f2f2] flex   text-black   px-2 items-center ",children:[(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[100px] overflow-x-auto px-3 py-1 ",children:e.Billno}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[130px] overflow-x-auto px-3 py-1 ",children:e.OrderId}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[120px] overflow-x-auto px-3 py-1 ",children:e.Product}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[120px] overflow-x-auto px-3 py-1 ",children:e.Quntity}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[120px] overflow-x-auto px-3 py-1 ",children:e.Salesamount}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[150px] overflow-x-auto px-3 py-1 ",children:e.State}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[120px] overflow-x-auto px-3 py-1 ",children:e.Platform.name}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[200px] overflow-x-auto px-3 py-1 ",children:s}),(0,c.jsx)(a.N_,{to:"/home/Searchpage",onClick:()=>u(e._id),className:" w-[180px] overflow-x-auto px-3 py-1 ",children:t}),U===e._id&&(0,c.jsx)("div",{className:" sticky right-0 flex gap-2     z-10",children:(0,c.jsxs)("div",{className:" top-[-19px]  absolute right-28  bg-white  border-black border-[1px] p-2  ",children:[(0,c.jsxs)("div",{className:"opstion  ",children:[(0,c.jsx)("option",{className:`text-[12px] cursor-pointer ${"Delivered"==m&&"bg-blue-400"}`,onClick:()=>{Y("Delivered",e._id)},value:"pending",children:"Delivered"}),(0,c.jsx)("option",{className:`text-[12px] cursor-pointer ${"RTO"==m&&"bg-blue-400"}`,onClick:()=>{Y("RTO",e._id)},value:"pending",children:"RTO"}),(0,c.jsx)("option",{className:`text-[12px] cursor-pointer ${"Lost"==m&&"bg-blue-400"}`,onClick:()=>{Y("Lost",e._id)},value:"canceled",children:"Lost"})]}),"Lost"!==m&&(0,c.jsx)("div",{className:"flex justify-center mt-1",children:(0,c.jsx)("button",{className:"text-[10px] bg-blue-600 rounded-full   items-center   text-white px-2  ",onClick:()=>{B(m,v)},children:"Update"})})]})}),(0,c.jsx)("div",{className:" sticky right-0 flex gap-2  bottom-2 z-10",children:(0,c.jsx)("div",{className:"bg-black rounded-full w-6 h-6 flex justify-center items-center  absolute bottom-3 right-16 text-white     text-[16px]  ",onClick:()=>(e=>{W((t=>t===e?null:e))})(e._id),children:(0,c.jsx)(i.Qxc,{})})})]},e._id)}))]}),(0,c.jsxs)("div",{className:"  fixed md:w-[80%]  lg:w-[85%]   w-[90%]  bottom-[-20px]",children:[(0,c.jsxs)("div",{className:"text-white w-[100%] pb-5 flex gap-10 justify-center ",children:[1!==g?(0,c.jsxs)("button",{onClick:()=>{E()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)(o.vpL,{})," Previous"]})]}):(0,c.jsxs)("button",{disabled:!0,onClick:()=>{E()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:[(0,c.jsx)(o.vpL,{})," Previous"]})]}),(0,c.jsx)("div",{className:"text-black border-black border-[1px] px-2 rounded-md",children:g}),g!==Math.ceil(y/10)?(0,c.jsxs)("button",{onClick:()=>{I()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,c.jsx)(o.QyA,{})]})," "]}):(0,c.jsxs)("button",{disabled:!0,onClick:()=>{I()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,c.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,c.jsx)(o.QyA,{})]})," "]})]}),(0,c.jsx)("div",{className:"w-[100%] pb-5 flex gap-10  justify-center ",children:(0,c.jsxs)("div",{className:"flex items-center",children:[(0,c.jsx)("button",{onClick:()=>{if(F.current){const e=$-50;M(e),F.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 mb-2 py-1 rounded-md mr-2",disabled:$<=0,children:"<"}),(0,c.jsx)("div",{ref:F,className:"relative overflow-x-auto hide-scrollbar",style:{maxWidth:"150px",whiteSpace:"nowrap"},children:(0,c.jsx)("div",{className:"flex gap-2",children:function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const l=[];for(let r=e;r<t;r+=s)l.push(r);return l}(1,z+1).map((e=>(0,c.jsx)("div",{onClick:()=>{(e=>{S&&w((t=>{const s=e;return Q(s),s}))})(e)},className:"border-black text-center cursor-pointer border-[1px] px-2",style:{width:50},children:e},e)))})}),(0,c.jsx)("button",{onClick:()=>{if(F.current){const e=$+50;M(e),F.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 mb-2 rounded-md ml-2",disabled:$>=(null===(s=F.current)||void 0===s?void 0:s.scrollWidth)-(null===(n=F.current)||void 0===n?void 0:n.clientWidth),children:">"})]})})]})]})})}}}]);
//# sourceMappingURL=375.fce7a367.chunk.js.map