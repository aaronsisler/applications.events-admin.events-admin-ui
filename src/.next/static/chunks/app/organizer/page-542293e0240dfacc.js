(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{1025:function(e,n,r){Promise.resolve().then(r.bind(r,2058)),Promise.resolve().then(r.bind(r,6359))},3959:function(e,n,r){"use strict";r.d(n,{C:function(){return i}});var t=r(7821);let i=e=>{let{name:n,onBlur:r,placeholder:i,register:s,error:c}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{className:"ml-1 mb-3 border-2 border-slate-300",type:"text",placeholder:i,...s(n,{onBlur:r})}),c&&(0,t.jsx)("span",{className:"error-message",children:c.message})]})}},2058:function(e,n,r){"use strict";r.d(n,{OrganizerForm:function(){return m}});var t=r(7821),i=r(8078),s=r(746),c=r(8113),u=r(4089),a=r(9912),o=r(3959),l=r(3181),d=r(6001);let h=(0,a.Ry)({name:(0,a.Z_)().min(1,{message:"Required"})}),m=()=>{let e=(0,c.v9)(l.i2),[n,{isError:r}]=(0,d.K_)(),{register:a,handleSubmit:m,formState:{errors:f},reset:g}=(0,s.cI)({resolver:(0,u.F)(h)}),v=async r=>{let{error:t}=await n({clientId:e,organizers:[{clientId:e,name:r}]});void 0==t&&g()};return(0,t.jsxs)("form",{onSubmit:m(e=>{let{name:n}=e;return v(n)}),children:[r&&(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)("div",{children:"Something went wrong during submission!"}),(0,t.jsx)("br",{})]}),(0,t.jsx)(o.C,{placeholder:"Organizer Name",name:"name",register:a,error:f.name}),(0,t.jsx)("br",{}),(0,t.jsx)("input",{className:"btn btn-blue mt-5",type:"submit",value:"Create Organizer"})]})}},6359:function(e,n,r){"use strict";r.d(n,{OrganizerList:function(){return a}});var t=r(7821),i=r(8078),s=r(8113),c=r(3181),u=r(6001);let a=()=>{let e=(0,s.v9)(c.i2),n=!!e,{data:r,isError:a}=(0,u.WY)(e,{skip:!n});return(0,t.jsxs)(i.Fragment,{children:[a&&(0,t.jsx)("div",{children:"Error!"}),(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Id"}),(0,t.jsx)("th",{children:"Name"})]})}),(0,t.jsx)("tbody",{children:null==r?void 0:r.map((e,n)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.organizerId}),(0,t.jsx)("td",{children:e.name})]},n))})]})]})}},621:function(e,n,r){"use strict";r.d(n,{$F:function(){return h},CT:function(){return t},DP:function(){return a},E1:function(){return m},JM:function(){return c},VF:function(){return o},_N:function(){return d},c7:function(){return i},d_:function(){return u},gM:function(){return l},sY:function(){return s}});let t="http://localhost:8080",i="http://localhost:4566/event-admin-service-file-storage",s="clients",c="event-schedules",u="events",a="locations",o="organizers",l="published-event-schedules",d="scheduled-events",h="users",m="aaron-sisler-id"},3181:function(e,n,r){"use strict";r.d(n,{Xk:function(){return s},i2:function(){return c},vI:function(){return t}});let t=(0,r(6502).oM)({name:"common",initialState:{clientId:""},reducers:{setClientId:(e,n)=>({...e,clientId:n.payload}),clearClientId:e=>({...e,clientId:""})},selectors:{getClientId:e=>e.clientId}}),{clearClientId:i,setClientId:s}=t.actions;t.reducer;let{getClientId:c}=t.selectors},6001:function(e,n,r){"use strict";r.d(n,{K_:function(){return a},WY:function(){return u},sC:function(){return c}});var t=r(549),i=r(7372),s=r(621);let c=(0,t.LC)({baseQuery:(0,i.ni)({baseUrl:"".concat(s.CT,"/")}),reducerPath:"organizerApi",tagTypes:["Organizer"],endpoints:e=>({getAllOrganizers:e.query({query:e=>"".concat(s.sY,"/").concat(e,"/").concat(s.VF),providesTags:["Organizer"]}),postOrganizers:e.mutation({query:e=>{let{clientId:n,organizers:r}=e;return{url:"".concat(s.sY,"/").concat(n,"/").concat(s.VF),method:"POST",body:r}},invalidatesTags:["Organizer"]})})}),{useGetAllOrganizersQuery:u,usePostOrganizersMutation:a}=c}},function(e){e.O(0,[801,549,826,115,364,744],function(){return e(e.s=1025)}),_N_E=e.O()}]);