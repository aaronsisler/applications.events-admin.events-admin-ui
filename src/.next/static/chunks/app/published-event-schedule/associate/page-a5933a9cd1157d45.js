(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[733],{5545:function(e,t,n){Promise.resolve().then(n.bind(n,3175))},8504:function(e,t,n){"use strict";var r=n(3226);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},8364:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n(7821);let u=e=>{let{name:t,selectOptions:n=[],register:u,onChange:c,error:s}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("select",{...u(t,{onChange:c}),defaultValue:"",className:"my-2",children:n.map((e,t)=>{let{id:n,displayValue:u,isDisabled:c}=e;return(0,r.jsx)("option",{value:n,disabled:c,children:u},t)}).concat((0,r.jsx)("option",{value:"",disabled:!0,children:"Select..."},-1))}),"\xa0",s&&(0,r.jsx)("span",{className:"error-message",children:s.message})]})}},3175:function(e,t,n){"use strict";n.d(t,{AssociateEventScheduleForm:function(){return v}});var r=n(7821),u=n(746),c=n(8504),s=n(8113),i=n(4089),l=n(9912),o=n(8364),a=n(3181),d=n(4829),h=n(1880);let f=(0,l.Ry)({eventScheduleId:(0,l.Z_)().min(1,{message:"Required"})}),v=()=>{let e=(0,s.I0)(),t=(0,c.useRouter)(),n=(0,s.v9)(a.i2),l=!!n,{data:v}=(0,d.JF)(n,{skip:!l}),{register:m,handleSubmit:p,formState:{errors:S}}=(0,u.cI)({resolver:(0,i.F)(f)}),b=async n=>{let{eventScheduleId:r}=n;e((0,h.T_)({eventScheduleId:r})),t.push("/published-event-schedule/submit")};return(0,r.jsxs)("form",{onSubmit:p(e=>{let{eventScheduleId:t}=e;return b({eventScheduleId:t})}),children:[(0,r.jsx)(o.A,{name:"eventScheduleId",selectOptions:null==v?void 0:v.map(e=>({id:e.eventScheduleId,displayValue:e.name})),register:m,error:S.eventScheduleId,placeholder:"Select event schedule"}),"\xa0\xa0\xa0",(0,r.jsx)("input",{className:"btn btn-blue mt-5",type:"submit",value:"Associate Event Schedule"})]})}},621:function(e,t,n){"use strict";n.d(t,{$F:function(){return h},CT:function(){return r},DP:function(){return l},E1:function(){return f},JM:function(){return s},VF:function(){return o},_N:function(){return d},c7:function(){return u},d_:function(){return i},gM:function(){return a},sY:function(){return c}});let r="http://localhost:8080",u="http://localhost:4566/event-admin-service-file-storage",c="clients",s="event-schedules",i="events",l="locations",o="organizers",a="published-event-schedules",d="scheduled-events",h="users",f="aaron-sisler-id"},3181:function(e,t,n){"use strict";n.d(t,{Xk:function(){return c},i2:function(){return s},vI:function(){return r}});let r=(0,n(6502).oM)({name:"common",initialState:{clientId:""},reducers:{setClientId:(e,t)=>({...e,clientId:t.payload}),clearClientId:e=>({...e,clientId:""})},selectors:{getClientId:e=>e.clientId}}),{clearClientId:u,setClientId:c}=r.actions;r.reducer;let{getClientId:s}=r.selectors},4829:function(e,t,n){"use strict";n.d(t,{D3:function(){return l},JF:function(){return i},i5:function(){return s}});var r=n(549),u=n(7372),c=n(621);let s=(0,r.LC)({baseQuery:(0,u.ni)({baseUrl:"".concat(c.CT,"/")}),reducerPath:"eventScheduleApi",tagTypes:["Event Schedule"],endpoints:e=>({getAllEventSchedules:e.query({query:e=>"".concat(c.sY,"/").concat(e,"/").concat(c.JM),providesTags:["Event Schedule"]}),postEventSchedules:e.mutation({query:e=>{let{clientId:t,eventSchedules:n}=e;return{url:"".concat(c.sY,"/").concat(t,"/").concat(c.JM),method:"POST",body:n}},invalidatesTags:["Event Schedule"]})})}),{useGetAllEventSchedulesQuery:i,usePostEventSchedulesMutation:l}=s},1880:function(e,t,n){"use strict";n.d(t,{J8:function(){return c},T_:function(){return u},cQ:function(){return r}});let r=(0,n(6502).oM)({name:"publishedEventSchedule",initialState:{clientId:"",eventScheduleId:"",name:"",targetYear:1900,targetMonth:0},reducers:{updatePublishedEventSchedule(e,t){let{targetMonth:n,targetYear:r}=t.payload;return{...e,...t.payload,targetMonth:n?Number(n):e.targetMonth,targetYear:r?Number(r):e.targetYear}}},selectors:{getPublishedEventSchedule:e=>e}}),{updatePublishedEventSchedule:u}=r.actions;r.reducer;let{getPublishedEventSchedule:c}=r.selectors}},function(e){e.O(0,[801,549,826,115,364,744],function(){return e(e.s=5545)}),_N_E=e.O()}]);