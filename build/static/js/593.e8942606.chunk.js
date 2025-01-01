"use strict";(self.webpackChunkfooter=self.webpackChunkfooter||[]).push([[593],{2593:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var l=t(6213),a=t(5043),s=t(7149),d=t(5369),i=t(5475),o=t(2684),n=t(579);function c(e){var r,t,c;const[u,x]=(0,a.useState)([]),[m,p]=(0,a.useState)(!0),[h,b]=(0,a.useState)(null),[g,v]=(0,a.useState)(!1),[f,j]=(0,a.useState)(1),[y,N]=(0,a.useState)(""),[w,k]=(0,a.useState)([]),[S,C]=(0,a.useState)([]),[P,M]=(0,a.useState)(""),[E,R]=(0,a.useState)(""),[_,q]=(0,a.useState)({}),[A,L]=(0,a.useState)(""),[$,D]=(0,a.useState)(""),[F,I]=(0,a.useState)(!1),[O,z]=(0,a.useState)(!0),T="https://backenddata77720.onrender.com",{summary:W,setsummary:Y}=(0,a.useContext)(o.A),{userrole:Q}=(0,a.useContext)(o.A),[U,B]=(0,a.useState)(""),[K,G]=(0,a.useState)({id:"",name:"",category:"",MRP:"",salingprice:"",Serialrequired:""}),[H,J]=(0,a.useState)(""),[V,X]=(0,a.useState)([]);(0,a.useEffect)((()=>{re(f)}),[]);const Z=()=>{f>1&&j((e=>{const r=e-1;return re(r),r}))},ee=()=>{Math.ceil(y/20),O&&j((e=>{const r=e+1;return re(r),r}))},re=async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$;console.log(r);let t=localStorage.getItem("token");try{const a=await l.A.get(`${T}/api/product/fetchproductforadmin/${e}`,{headers:{authtoken:t},params:{search:r}});N(a.data.totalCount),0===a.data.products.length?(z(!1),x(a.data)):(x(a.data),z(!0)),p(!1)}catch(h){b(h),p(!1)}},te=e=>{G({...K,[e.target.name]:e.target.value})};let le=e=>{v(!1),window.confirm("Do you really want to delete?")&&(e=>{let r=localStorage.getItem("token");l.A.delete(`${T}/api/product/deleteproduct/${e}`,{method:"DELETE",headers:{authtoken:r}}),re(f)})(e)};const ae=()=>{!H.trim()||null!==V&&void 0!==V&&V.includes(H.trim())||(X([...V,H.trim()]),G({...K,othername:[...V,H.trim()]}),J(""))},se=Math.ceil(y/20),de=(0,a.useRef)(null),[ie,oe]=(0,a.useState)(0),ne=localStorage.getItem("token");(0,a.useEffect)((()=>{(async()=>{try{const e=await l.A.get(`${T}/api/category/fetchallcategory`,{headers:{authtoken:ne}});k(e.data)}catch(h){console.error("Error fetching categories:",h)}})()}),[]),(0,a.useEffect)((()=>{C(w.filter((e=>e.name.toLowerCase().includes(P.toLowerCase()))))}),[P,w]);return m?(0,n.jsx)("p",{children:"Loading..."}):h?(0,n.jsxs)("p",{children:["Error: ",h.message]}):(0,n.jsxs)(n.Fragment,{children:[g&&(0,n.jsx)("div",{className:"flex absolute items-center md:w-[80%]  lg:w-[85%]   w-[90%] justify-center  z-30",children:(0,n.jsxs)("div",{className:"bg-white p-6 rounded-lg border-gray-300 border w-[90%] md:w-[80%] lg:w-[70%] shadow-xl",children:[(0,n.jsx)("div",{onClick:()=>v(!1),className:"rounded-full cursor-pointer w-6 h-6  -block text-center border-black border-2 flex items-center justify-center bg-red-500 text-white",children:"x"}),(0,n.jsxs)("div",{className:"grid md:grid-cols-2 grid-cols-1 gap-4 mt-4",children:[(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("label",{htmlFor:"name",className:"mb-1 text-sm font-semibold text-gray-700",children:"Name"}),(0,n.jsx)("input",{type:"text",id:"name",name:"name",value:K.name,onChange:te,placeholder:"Name",className:"px-3 py-2 border border-gray-300 rounded-md w-full",required:!0})]}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("button",{type:"button",onClick:()=>I(!F),className:"  px-3 py-1 border-black border-[2px] rounded-md w-[100%] "+(_.category?"border-red-500":""),children:K.category?`Selected: ${A}`:"Select Category"}),F&&(0,n.jsxs)("div",{className:"absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg w-full mt-2",children:[(0,n.jsx)("input",{type:"text",placeholder:"Search categories...",value:P,onChange:e=>M(e.target.value),className:"w-full px-3 py-2 border-b border-gray-300 rounded-t-md"}),(0,n.jsx)("div",{className:"max-h-60 overflow-y-auto",children:S.map((e=>(0,n.jsx)("button",{onClick:()=>(e=>{L(e.name),G({...K,category:e._id}),I(!1)})(e),className:"w-full px-3 py-2 text-left hover:bg-gray-200",children:e.name},e._id)))})]}),_.category&&(0,n.jsx)("p",{className:"text-red-500 text-xs",children:_.category})]}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("label",{htmlFor:"MRP",className:"mb-1 text-sm font-semibold text-gray-700",children:"MRP"}),(0,n.jsx)("input",{type:"text",id:"MRP",name:"MRP",value:K.MRP,onChange:te,placeholder:"MRP",className:"px-3 py-2 border border-gray-300 rounded-md w-full",required:!0})]}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("label",{htmlFor:"salingprice",className:"mb-1 text-sm font-semibold text-gray-700",children:"Selling Price"}),(0,n.jsx)("input",{type:"text",id:"salingprice",name:"salingprice",value:K.salingprice,onChange:te,placeholder:"Selling Price",className:"px-3 py-2 border border-gray-300 rounded-md w-full",required:!0})]}),(0,n.jsxs)("div",{className:"md:col-span-2 flex flex-col",children:[(0,n.jsx)("label",{htmlFor:"Serialrequired",className:"mb-1 text-sm font-semibold text-gray-700",children:"Serial Required"}),(0,n.jsxs)("select",{id:"Serialrequired",name:"Serialrequired",onChange:te,value:K.Serialrequired,className:"px-3 py-2 border border-gray-300 rounded-md w-full",children:[(0,n.jsx)("option",{value:"Serialrequired",children:"Serial Required"}),[{value:"YES",label:"YES"},{value:"NO",label:"NO"}].map((e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value)))]})]}),(0,n.jsxs)("div",{className:"md:col-span-2 flex flex-col",children:[(0,n.jsx)("label",{htmlFor:"serialNumbers",className:"mb-1 text-sm font-semibold text-gray-700",children:"Add Serial Numbers"}),(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("input",{type:"text",id:"serialNumbers",onChange:e=>(e=>{J(e.target.value)})(e),onKeyPress:e=>(e=>{"Enter"===e.key&&(e.preventDefault(),ae())})(e),value:H,name:"serialNumbers",placeholder:"Enter other name",className:"flex-grow px-3 py-2 border border-gray-300 rounded-md"}),(0,n.jsx)("button",{type:"button",onClick:e=>ae(),className:"px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200",children:"Add Name"})]}),(null===V||void 0===V?void 0:V.length)>0&&(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)("h2",{className:"font-bold text-lg",children:"Other Names:"}),(0,n.jsx)("ul",{className:"mt-2 grid gap-2",children:V.map(((e,r)=>(0,n.jsxs)("li",{className:"flex items-center justify-between bg-gray-100 px-3 py-2 border border-gray-300 rounded-md",children:[e,(0,n.jsx)("button",{onClick:()=>{return r=e,X(V.filter((e=>e!==r))),void G({...K,othername:V.filter((e=>e!==r))});var r},className:"text-red-500 font-bold",children:"x"})]},r)))})]})]})]}),(0,n.jsx)("button",{onClick:()=>(async()=>{try{let e=localStorage.getItem("token");await l.A.put(`${T}/api/product/updateproduct/${K.id}`,K,{method:"PUT",headers:{authtoken:e}}),re(f),v(!1)}catch(h){console.error(h),alert("Error updating order")}})(),className:"mt-6 w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-200",children:"Update Order"})]})}),(0,n.jsxs)("div",{className:" ",children:[(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"relative mt-2",children:[(0,n.jsx)("input",{type:"text",placeholder:"Search products...",value:$,onChange:e=>{D(e.target.value),re(1,e.target.value)},className:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"}),(0,n.jsx)("svg",{className:"absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 4a7 7 0 011.2 13.794m1.2-1.794a7 7 0 01-1.2-13.794m1.2 13.794a7 7 0 100-14 7 7 0 000 14z"})})]})}),(0,n.jsxs)("div",{className:"  mt-4 lg:w-full h-[550px] w-[1000px] ",children:[(0,n.jsxs)("div",{className:"bg-[#464646] flex   text-white mb-2  px-2 items-center justify-between",children:[(0,n.jsx)("div",{className:" border-white  px-3 py-1  w-[160px] ",children:"Product Name"}),(0,n.jsx)("div",{className:" border-white border-l-[1px] px-3 py-1  w-[160px] ",children:"Category"}),(0,n.jsx)("div",{className:" border-l-[1px]  border-white w-[80px]  px-3 py-1 ",children:"MRP"}),(0,n.jsx)("div",{className:"border-l-[1px] border-white w-[130px]  px-3 py-1 ",children:"Saling price"}),(0,n.jsx)("div",{className:"border-l-[1px] border-white w-[100px]  px-3 py-1 ",children:"NewOrder"}),(0,n.jsx)("div",{className:"border-l-[1px] border-white w-[70px]  px-3 py-1 ",children:"Available"}),(0,n.jsx)("div",{className:"border-l-[1px] border-white w-[130px]  px-3 py-1 ",children:"In stock"}),(0,n.jsx)("div",{className:"border-l-[1px] border-white w-[130px]  px-3 py-1 ",children:"damage"})]}),null===u||void 0===u||null===(r=u.products)||void 0===r?void 0:r.map((e=>{var r,t;let l=e.purchasestock,a=e.totalsale;return NaN!==l&&0!=l&&l||(l=0),NaN!==a&&0!=a&&a||(a=0),(0,n.jsxs)("div",{className:"bg-[#f2f2f2] flex mt-3   text-black  px-2 justify-between items-center ",children:[(0,n.jsx)(i.N_,{onClick:()=>{Y(e)},to:"../Singleproduct",className:"  px-3 py-1  w-[170px] ",children:e.name}),(0,n.jsxs)(i.N_,{onClick:()=>{Y(e)},to:"../Singleproduct",className:"  px-3 py-1  w-[170px] ",children:[null!==e&&void 0!==e&&null!==(r=e.category[0])&&void 0!==r&&r.name?null===e||void 0===e||null===(t=e.category[0])||void 0===t?void 0:t.name:e.category," "]}),(0,n.jsx)(i.N_,{onClick:()=>{Y(e)},to:"../Singleproduct",className:" w-[80px]  px-3 py-1 ",children:null===e||void 0===e?void 0:e.MRP}),(0,n.jsx)(i.N_,{onClick:()=>{Y(e)},to:"../Singleproduct",className:" w-[130px]  px-3 py-1 ",children:e.salingprice}),(0,n.jsx)(i.N_,{onClick:()=>{Y(e)},to:"../Singleproduct",className:" w-[100px]  px-3 py-1 ",children:e.ordercome}),(0,n.jsx)(i.N_,{onClick:()=>{Y(e)},to:"../Singleproduct",className:" w-[70px]  px-3 py-1 ",children:l-a-e.ordercome}),(0,n.jsx)(i.N_,{onClick:()=>{Y(e)},to:"../Singleproduct",className:" w-[130px]  px-3 py-1 ",children:l-a}),(0,n.jsx)(i.N_,{onClick:()=>{Y(e)},to:"../Singleproduct",className:"border-l-[1px] border-white w-[90px]  px-3 py-1 ",children:void 0==e.totalDamaged?0:e.totalDamaged}),(0,n.jsxs)("div",{className:" sticky right-0 flex   bg-black bottom-1 z-10",children:[Q.canEdit&&(0,n.jsx)("div",{onClick:()=>{(e=>{var r,t;G({id:e._id,name:e.name,category:null===e||void 0===e||null===(r=e.category[0])||void 0===r?void 0:r._id,MRP:e.MRP,Serialrequired:e.Serialrequired,salingprice:e.salingprice}),L(null===e||void 0===e||null===(t=e.category[0])||void 0===t?void 0:t.name),null!==e&&void 0!==e&&e.othername?X(e.othername):X([]),v(!0)})(e)},className:"bg-black rounded-full w-6 h-6 flex justify-center items-center  absolute bottom-1 right-8 text-white     text-[16px]  ",children:(0,n.jsx)(s.Yvo,{})}),Q.canDelete&&(0,n.jsx)("div",{onClick:()=>{le(e._id)},className:"bg-red-400 rounded-full absolute bottom-1 right-0 w-6 h-6 flex justify-center items-center  text-white    text-[16px]  ",children:(0,n.jsx)(s.b6i,{})})]})]},e._id)}))]}),(0,n.jsxs)("div",{className:"    absolute md:w-[80%]  lg:w-[85%]   w-[90%] mt-10    ",children:[(0,n.jsxs)("div",{className:"text-white w-[100%] pb-5 flex gap-10 justify-center ",children:[1!==f?(0,n.jsxs)("button",{onClick:()=>{Z()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(d.vpL,{})," Previous"]})]}):(0,n.jsxs)("button",{disabled:!0,onClick:()=>{Z()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(d.vpL,{})," Previous"]})]}),(0,n.jsx)("div",{className:"text-black border-black border-[1px] px-2 rounded-md",children:f}),f!==Math.ceil(y/20)&&0!==y?(0,n.jsxs)("button",{onClick:()=>{ee()},className:"bg-blue-600 hover:bg-blue-700 w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,n.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,n.jsx)(d.QyA,{})]})," "]}):(0,n.jsxs)("button",{disabled:!0,onClick:()=>{ee()},className:"bg-blue-400   w-[120px]  flex    justify-center cursor-pointer px-3 rounded-md ",children:[" ",(0,n.jsxs)("div",{className:"flex items-center gap-2",children:["Next",(0,n.jsx)(d.QyA,{})]})," "]})]}),(0,n.jsx)("div",{className:"w-[100%] pb-5 flex gap-10  justify-center ",children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("button",{onClick:()=>{if(de.current){const e=ie-50;oe(e),de.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 mb-2 py-1 rounded-md mr-2",disabled:ie<=0,children:"<"}),(0,n.jsx)("div",{ref:de,className:"relative overflow-x-auto hide-scrollbar",style:{maxWidth:"150px",whiteSpace:"nowrap"},children:(0,n.jsx)("div",{className:"flex gap-2",children:function(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const l=[];for(let a=e;a<r;a+=t)l.push(a);return l}(1,se+1).map((e=>(0,n.jsx)("div",{onClick:()=>{(e=>{O&&j((r=>{const t=e;return re(t),t}))})(e)},className:"border-black text-center cursor-pointer border-[1px] px-2",style:{width:50},children:e},e)))})}),(0,n.jsx)("button",{onClick:()=>{if(de.current){const e=ie+50;oe(e),de.current.scrollTo({left:e,behavior:"smooth"})}},className:"bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 mb-2 rounded-md ml-2",disabled:ie>=(null===(t=de.current)||void 0===t?void 0:t.scrollWidth)-(null===(c=de.current)||void 0===c?void 0:c.clientWidth),children:">"})]})})]})]})]})}}}]);
//# sourceMappingURL=593.e8942606.chunk.js.map