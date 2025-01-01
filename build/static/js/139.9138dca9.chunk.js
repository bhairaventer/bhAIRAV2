"use strict";(self.webpackChunkfooter=self.webpackChunkfooter||[]).push([[139],{2139:(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var a=t(6213),r=t(5043),n=t(3986),l=t(579);function o(){const[e,s]=(0,r.useState)(""),[t,o]=(0,r.useState)({name:""}),i=async()=>{try{const{name:e}=t,r=e.toString(),n=localStorage.getItem("token"),i=await a.A.post("https://backenddata77720.onrender.com/api/courier/addcourier",{name:r},{headers:{authtoken:n}});i.data.success?(o({name:""}),s((0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"text-green-600 font-semibold text-lg mb-2",children:i.data.message}),(0,l.jsx)("div",{className:"relative w-full h-2 rounded-full overflow-hidden bg-green-200 mt-4",children:(0,l.jsx)("div",{className:"absolute top-0 left-0 h-full bg-green-500 animate-progress-bar2",style:{animationDuration:"0.5s"}})})]}))):s((0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"text-red-600 font-semibold text-lg mb-2",children:i.data.message}),(0,l.jsx)("div",{className:"relative w-full h-2 rounded-full overflow-hidden bg-red-200 mt-4",children:(0,l.jsx)("div",{className:"absolute top-0 left-0 h-full bg-red-500 animate-progress-bar2",style:{animationDuration:"0.5s"}})})]})),u()}catch(e){console.error("Error:",e)}},[d,c]=(0,r.useState)(!1),u=()=>{c(!0)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"flex justify-center    bg-gray-100",children:[(0,l.jsx)("div",{className:"App",children:(0,l.jsx)(n.A,{show:d,onClose:()=>{c(!1)},message:e})}),(0,l.jsxs)("div",{className:"w-full max-w-md p-8 bg-white shadow-lg rounded-lg",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold text-center mb-6 text-gray-700",children:"Add Courier"}),(0,l.jsx)("div",{className:"mb-4",children:(0,l.jsx)("input",{type:"text",name:"name",onChange:e=>{o({...t,[e.target.name]:e.target.value})},onKeyPress:e=>{"Enter"===e.key&&i()},value:t.name,placeholder:"Courier Name",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})}),(0,l.jsx)("button",{onClick:i,className:"w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",children:"Add Courier"})]})]})})}},3986:(e,s,t)=>{t.d(s,{A:()=>l});var a=t(5043),r=t(5369),n=t(579);const l=e=>{let{show:s,onClose:t,message:l}=e;if(a.useEffect((()=>{if(s){const e=setTimeout((()=>{t()}),500);return()=>clearTimeout(e)}}),[s,t]),!s)return null;return(0,n.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50",children:[(0,n.jsx)("style",{children:"\n        @keyframes progress-bar {\n            0% { width: 0%; }\n            100% { width: 100%; }\n        }\n    "}),(0,n.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-xl relative transform transition-transform duration-300 ease-out scale-95",children:[l,(0,n.jsx)("button",{onClick:t,className:"absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors duration-200 ease-in-out","aria-label":"Close",children:(0,n.jsx)(r.QCr,{size:18})})]})]})}}}]);
//# sourceMappingURL=139.9138dca9.chunk.js.map