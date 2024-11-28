"use strict";(self.webpackChunkfooter=self.webpackChunkfooter||[]).push([[605],{6605:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var a=t(5043),r=t(3216),l=t(5475),n=(t(2593),t(2194),t(1318),t(6846),t(7309),t(5948),t(6213)),o=t(2684),i=t(579);function d(){var e;const[s,t]=(0,a.useState)([]),[l,d]=(0,a.useState)(!0),[c,u]=(0,a.useState)(null),{userrole:h}=(0,a.useContext)(o.A),m="http://127.0.0.1:5000",x=(0,r.Zp)();(0,a.useEffect)((()=>{0===(null===h||void 0===h?void 0:h.role)&&x("/home/User")}),[h,x]),(0,a.useEffect)((()=>{p()}),[]);const p=async()=>{try{const e={authtoken:localStorage.getItem("token")},s=await n.A.get(`${m}/api/auth/getalluser`,{headers:e});d(!1),t(s.data)}catch(c){u(c),d(!1)}};return l?(0,i.jsx)("p",{className:"text-center",children:"Loading..."}):c?(0,i.jsxs)("p",{className:"text-center text-red-500",children:["Error: ",c.message]}):(0,i.jsx)("div",{className:"mt-4 max-w-4xl h-[600px] mx-auto p-4",children:null===s||void 0===s||null===(e=s.User)||void 0===e?void 0:e.map((e=>(0,i.jsxs)("div",{className:"bg-green-200 shadow-lg rounded-lg  md:gap-20 justify-between  mb-4 p-4 flex flex-col md:flex-row",children:[(0,i.jsxs)("div",{className:"flex-shrink-0 w-full md:w-1/4 mb-4 md:mb-0",children:[(0,i.jsx)("div",{className:"text-lg font-semibold",children:e.name}),(0,i.jsx)("div",{className:"text-gray-600",children:e.email}),(0,i.jsx)("div",{className:"text-gray-600",children:e.phone})]}),(0,i.jsxs)("div",{className:"flex-1  md:ml-4",children:[(0,i.jsx)("div",{className:"flex justify-between mb-4",children:1===!e.role&&(0,i.jsx)("button",{onClick:()=>(async(e,s)=>{try{const t=localStorage.getItem("token");t&&(await n.A.put(`${m}/api/auth/changeuser/${e}`,{role:s},{headers:{authtoken:t}}),p())}catch(c){console.error(c)}})(e._id,0===e.role?5:0),className:"px-4 py-2 rounded-lg text-white "+(0===e.role?"bg-red-500 hover:bg-red-600":"bg-green-500 hover:bg-green-600"),children:0===e.role?"Block":"Unblock"})}),(0,i.jsx)("div",{className:"flex gap-4",children:["canEdit","canAdd","canDelete"].map((t=>(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)("span",{className:"font-medium",children:t.replace("can","")}),(0,i.jsx)("button",{onClick:()=>(async(e,t)=>{try{const a=localStorage.getItem("token"),r=!s.User.find((s=>s._id===e))[t];a&&(await n.A.put(`${m}/api/auth/changeuser/${e}`,{[t]:r},{headers:{authtoken:a}}),p())}catch(c){console.error(c)}})(e._id,t),className:"px-4 py-2 rounded-lg text-white "+(e[t]?"bg-blue-600 hover:bg-blue-700":"bg-gray-300 hover:bg-gray-400"),children:e[t]?"Enabled":"Disabled"})]},t)))})]})]},e._id)))})}var c=t(5369);const u=e=>{let{show:s,onClose:t,message:r}=e;if(a.useEffect((()=>{if(s){const e=setTimeout((()=>{t()}),3e3);return()=>clearTimeout(e)}}),[s,t]),!s)return null;return(0,i.jsxs)("div",{className:"fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 z-50",children:[(0,i.jsx)("style",{children:"\n        @keyframes progress-bar {\n            0% { width: 0%; }\n            100% { width: 100%; }\n        }\n    "}),(0,i.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg relative max-w-lg w-full",children:[(0,i.jsx)("button",{onClick:t,className:"absolute top-2 right-2 text-gray-600 hover:text-red-600 transition-transform duration-300 ease-in-out","aria-label":"Close",children:(0,i.jsx)(c.QCr,{size:24})}),r]})]})};function h(e){const{updateOrderStatus:s,userrole:t}=(0,a.useContext)(o.A),[l,d]=(0,a.useState)(""),[c,h]=(0,a.useState)({name:"",Email:"",mobile:"",password:""}),[m,x]=(0,a.useState)({}),p=(0,r.Zp)();(0,a.useEffect)((()=>{0===(null===t||void 0===t?void 0:t.role)&&p("/home/User")}),[t]);const g=async()=>{const e=(()=>{const e={};return c.name||(e.name="Name is required"),c.Email&&/\S+@\S+\.\S+/.test(c.Email)||(e.Email="Valid email is required"),c.mobile&&/^\d{10}$/.test(c.mobile)||(e.mobile="Valid 10-digit mobile number is required"),(!c.password||c.password.length<6)&&(e.password="Password must be at least 6 characters long"),e})();if(Object.keys(e).length)x(e);else try{const{name:e,Email:s,mobile:t,password:a}=c,r=e.toString(),l=s.toString(),o=t.toString(),u=a.toString(),m=localStorage.getItem("token");await n.A.post("http://127.0.0.1:5000/api/auth/createuser",{name:r,email:l,phone:o,password:u},{headers:{authtoken:m}}).then((e=>{h({name:"",Email:"",mobile:"",password:""}),e.data.success?(d((0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{className:"text-green-700 text-xl font-semibold mb-4",children:e.data.message}),(0,i.jsx)("div",{className:"relative w-full rounded-xl overflow-hidden h-2 bg-green-200 mt-2",children:(0,i.jsx)("div",{className:"absolute top-0 left-0 h-full bg-green-500 animate-progress-bar"})})]})),w()):(d((0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{className:"text-red-700 text-xl font-semibold mb-4",children:e.data.message}),(0,i.jsx)("div",{className:"relative w-full rounded-xl overflow-hidden h-2 bg-red-200 mt-2",children:(0,i.jsx)("div",{className:"absolute top-0 left-0 h-full bg-red-500 animate-progress-bar"})})]})),w())})).catch((e=>{console.error("Error:",e)}))}catch(s){console.error("Error:",s)}},b=e=>{h({...c,[e.target.name]:e.target.value})},[f,v]=(0,a.useState)(!1),w=()=>{v(!0)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:" ",children:[(0,i.jsx)("div",{className:"App",children:(0,i.jsx)(u,{show:f,onClose:()=>{v(!1)},message:l})}),(0,i.jsxs)("div",{className:"mt-4 lg:w-full",children:[(0,i.jsx)("div",{className:"bg-[#f2f2f2] grid md:grid-cols-2 text-black px-2 gap-6 md:gap-12 items-center",children:["name","Email","mobile","password"].map(((e,s)=>(0,i.jsxs)("div",{className:"w-[100%] mb-4",children:[(0,i.jsx)("input",{type:"password"===e?"password":"text",name:e,onChange:b,value:c[e],placeholder:e.charAt(0).toUpperCase()+e.slice(1),className:"px-3 py-1 w-[100%] border-[2px] rounded-md "+(m[e]?"border-red-500":"border-black")}),m[e]&&(0,i.jsx)("p",{className:"text-red-500 text-sm mt-1",children:m[e]})]},s)))}),(0,i.jsx)("div",{className:"flex justify-center mt-5 w-full",children:(0,i.jsx)("button",{onClick:()=>g(),className:"bg-blue-500 text-white font-bold py-2 px-4 w-[50%] rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",children:"Create User"})})]})]})})}const m=e=>{var s,t,r;const[l,o]=(0,a.useState)(""),[d,c]=(0,a.useState)(""),[u,h]=(0,a.useState)(""),[m,x]=(0,a.useState)(!1),[p,g]=(0,a.useState)(!1),[b,f]=(0,a.useState)(!1);return(0,i.jsxs)("div",{className:"relative flex justify-center items-center py-10 bg-gray-200",children:[(0,i.jsx)("div",{className:"perspective-1000",children:(0,i.jsx)("div",{className:"transition-transform transform hover:rotate-y-6 hover:rotate-x-6 hover:scale-105 relative w-96 h-96 perspective-1000",children:(0,i.jsxs)("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg rounded-lg p-6 border border-transparent hover:border-gray-300 hover:border-opacity-50 transition-transform duration-500",children:[(0,i.jsx)("div",{className:"text-2xl font-bold text-white mb-4",children:"User Details"}),(0,i.jsxs)("div",{className:"space-y-4 text-white",children:[(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("span",{className:"font-medium",children:"Name:"}),(0,i.jsx)("span",{className:"uppercase",children:(null===e||void 0===e||null===(s=e.user)||void 0===s?void 0:s.name)||"N/A"})]}),(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("span",{className:"font-medium",children:"Email:"}),(0,i.jsx)("span",{className:"uppercase",children:(null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.email)||"N/A"})]}),(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("span",{className:"font-medium",children:"Phone:"}),(0,i.jsx)("span",{className:"uppercase",children:(null===e||void 0===e||null===(r=e.user)||void 0===r?void 0:r.phone)||"N/A"})]})]}),(0,i.jsx)("button",{onClick:()=>x(!0),className:"w-full mt-4 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-purple-600 hover:text-white transition-colors duration-300",children:"Change Password"})]})})}),m&&(0,i.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50",children:(0,i.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative",children:[(0,i.jsx)("h2",{className:"text-xl font-semibold text-gray-800 mb-4",children:"Change Password"}),(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault(),(async()=>{if(d.length<5)return h("New Password must be at least 5 characters");if(0===l.length)return h("Old Password is required");try{const e=await localStorage.getItem("token");if(e){const s=await n.A.post("http://127.0.0.1:5000/api/auth/change",{newpassword:d,password:l},{headers:{authtoken:e}});"Success! Your password has been updated"===s.data&&(h(s.data),setTimeout((()=>{x(!1),h(""),c(""),o("")}),1e3)),"Incorrect password; please try again"===s.data&&h(s.data)}else h("No authentication token found")}catch(e){h("An error occurred while changing the password")}})()},children:[(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)("label",{htmlFor:"oldPassword",className:"block text-gray-700",children:"Old Password:"}),(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("input",{type:p?"text":"password",id:"oldPassword",value:l,onChange:e=>o(e.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500",required:!0}),(0,i.jsx)("button",{type:"button",onClick:()=>g(!p),className:"absolute inset-y-0 right-0 px-3 py-2 text-gray-500",children:p?"Hide":"Show"})]})]}),(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)("label",{htmlFor:"newPassword",className:"block text-gray-700",children:"New Password:"}),(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("input",{type:b?"text":"password",id:"newPassword",value:d,onChange:e=>c(e.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500",required:!0}),(0,i.jsx)("button",{type:"button",onClick:()=>f(!b),className:"absolute inset-y-0 right-0 px-3 py-2 text-gray-500",children:b?"Hide":"Show"})]})]}),(0,i.jsx)("button",{type:"submit",className:"w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:bg-gradient-to-l transition-all duration-300",children:"Change Password"})]}),u&&(0,i.jsx)("p",{className:`mt-4 ${"Success! Your password has been updated"==u?"text-green-500":"text-red-500"} `,children:u}),(0,i.jsx)("button",{onClick:()=>x(!1),className:"absolute top-2 right-2 text-gray-500 hover:text-gray-800",children:"\xd7"})]})})]})};var x=t(2565);function p(e){const{updateOrderStatus:s,userrole:t}=(0,a.useContext)(o.A);document.body.style.backgroundColor="#f6f6f6";const n=(0,r.zy)();return(0,a.useEffect)((()=>{const e=document.querySelector(".topnavbar").querySelectorAll(".child");e.forEach((e=>{e.style.color="white",e.style.backgroundColor="#31344f"}));const s=Array.from(e).find((e=>e.getAttribute("href")===n.pathname));s&&(s.style.color="black",s.style.backgroundColor="#a0afc5")}),[n]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:" md:w-[85%] lg:w-[90%]  w-[100%] px-[20px] mt-16 ",children:[(0,i.jsxs)("div",{className:"flex justify-between text-white  w-[100%]",children:[(0,i.jsx)("div",{className:"lg:text-xl text-lg font-semibold",children:"Profile"}),(0,i.jsxs)("div",{className:"flex lg:space-x-4 lg:text-sm text-[10px] space-x-2",children:[(0,i.jsx)(l.N_,{to:"/",children:"Dashboard"}),(0,i.jsx)(l.N_,{to:"/home/reports",children:"Reports"}),(0,i.jsx)("div",{children:" "})]})]}),(0,i.jsxs)("div",{className:"bg-[white] rounded-md mt-2 px-3 py-6",children:[(0,i.jsxs)("div",{className:"bg-[#31344f] flex gap-2 text-white p-3 rounded-md flex-wrap topnavbar",children:[(0,i.jsx)(l.N_,{to:"",className:"rounded-full text-black cursor-pointer child bg-[#a0afc5] px-2",children:"Profile"}),1==(null===t||void 0===t?void 0:t.role)&&(0,i.jsx)(l.N_,{to:"./user",className:"rounded-full text-black cursor-pointer child bg-[#a0afc5] px-2",children:"user"}),1==(null===t||void 0===t?void 0:t.role)&&(0,i.jsx)(l.N_,{to:"./create-user",className:"rounded-full px-2 child cursor-pointer",children:"Create user"})]}),(0,i.jsx)("div",{className:"scroll-container pb-3",style:{overflowX:"auto"},children:(0,i.jsxs)(r.BV,{children:[(0,i.jsx)(r.qh,{path:"user",element:(0,i.jsx)(d,{})}),1==(null===t||void 0===t?void 0:t.role)&&(0,i.jsx)(r.qh,{path:"create-user",element:(0,i.jsx)(h,{})}),(0,i.jsx)(r.qh,{path:"",element:(0,i.jsx)(m,{user:e.userdata})}),(0,i.jsx)(r.qh,{path:"*",element:(0,i.jsx)(x.default,{})})]})}),(0,i.jsx)("style",{jsx:!0,children:"\n        .scroll-container::-webkit-scrollbar {\n          width: 10px;\n          height: 10px;\n         \n         }\n        .scroll-container::-webkit-scrollbar-track {\n          background: white;\n          border: 1px #888888 solid\n         }\n        .scroll-container::-webkit-scrollbar-thumb {\n          background: #888;\n          border-radius: 10px\n        }\n        .scroll-container::-webkit-scrollbar-thumb:hover {\n          background: #555;\n        }\n      "})]})]})})}}}]);
//# sourceMappingURL=605.857c61a9.chunk.js.map