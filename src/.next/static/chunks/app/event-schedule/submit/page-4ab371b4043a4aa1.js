(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{3210:function(e,t,n){Promise.resolve().then(n.bind(n,1703)),Promise.resolve().then(n.bind(n,4280))},8504:function(e,t,n){"use strict";var d=n(3226);n.o(d,"useRouter")&&n.d(t,{useRouter:function(){return d.useRouter}})},1703:function(e,t,n){"use strict";n.d(t,{ScheduledEventList:function(){return s}});var d=n(7821);n(8078);var c=n(8113),u=n(3291);let s=()=>{let e=(0,c.v9)(u.t4);return(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Event Type"}),(0,d.jsx)("th",{children:"Event Interval"}),(0,d.jsx)("th",{children:"Event Day"}),(0,d.jsx)("th",{children:"Event Date"}),(0,d.jsx)("th",{children:"Category"}),(0,d.jsx)("th",{children:"Description"})]})}),(0,d.jsx)("tbody",{children:null==e?void 0:e.map((e,t)=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:e.name}),(0,d.jsx)("td",{children:e.scheduledEventType}),(0,d.jsx)("td",{children:e.scheduledEventInterval}),(0,d.jsx)("td",{children:e.scheduledEventDay}),(0,d.jsx)("td",{children:e.scheduledEventDate}),(0,d.jsx)("td",{children:e.category}),(0,d.jsx)("td",{children:e.description})]},t))})]})}},4280:function(e,t,n){"use strict";n.d(t,{SubmitScheduledEventsForm:function(){return l}});var d=n(7821);n(8078);var c=n(8113),u=n(8504),s=n(3291),r=n(4569);let l=()=>{let e=(0,c.v9)(s.cT),t=(0,c.v9)(s.t4),[n]=(0,r.wg)(),l=(0,u.useRouter)(),i=async e=>{let{eventScheduleId:t,scheduledEvents:d}=e,{error:c}=await n({eventScheduleId:t,scheduledEvents:d});void 0==c&&l.push("/published-event-schedule/genesis")};return(0,d.jsx)("button",{type:"button",className:"btn btn-blue mt-5",onClick:()=>i({eventScheduleId:e,scheduledEvents:t}),children:"Submit"})}},621:function(e,t,n){"use strict";n.d(t,{$F:function(){return v},CT:function(){return d},DP:function(){return l},E1:function(){return a},JM:function(){return s},VF:function(){return i},_N:function(){return o},c7:function(){return c},d_:function(){return r},gM:function(){return h},sY:function(){return u}});let d="http://localhost:8080",c="http://localhost:4566/event-admin-service-file-storage",u="clients",s="event-schedules",r="events",l="locations",i="organizers",h="published-event-schedules",o="scheduled-events",v="users",a="aaron-sisler-id"},3291:function(e,t,n){"use strict";n.d(t,{GV:function(){return h},JY:function(){return l},R0:function(){return r},au:function(){return c},cT:function(){return o},qU:function(){return d},t4:function(){return v}});let d=(0,n(6502).oM)({name:"eventSchedule",initialState:{eventScheduleId:"",scheduledEvents:[]},reducers:{setEventScheduleId:(e,t)=>({...e,eventScheduleId:t.payload}),clearEventScheduleId:e=>({...e,eventScheduleId:""}),clearScheduledEvents:e=>({...e,scheduledEvents:[]}),addScheduledEvent(e,t){let{payload:n}=t;return{...e,scheduledEvents:e.scheduledEvents.concat(n)}},updateScheduledEventField(e,t){let{index:n,field:d,value:c}=t.payload;e.scheduledEvents[n]&&(e.scheduledEvents[n]={...e.scheduledEvents[n],[d]:c||void 0})},updateScheduledEvent(e,t){let{index:n,scheduledEvent:d}=t.payload;e.scheduledEvents[n]&&(e.scheduledEvents[n]={...d,scheduledEventInterval:d.scheduledEventInterval?d.scheduledEventInterval:void 0,scheduledEventDay:d.scheduledEventDay?d.scheduledEventDay:void 0,scheduledEventDate:d.scheduledEventDate?d.scheduledEventDate:void 0,cost:d.cost?d.cost:void 0})},removeScheduledEvent(e,t){let{payload:n}=t;return{...e,scheduledEvents:[...e.scheduledEvents.slice(0,n),...e.scheduledEvents.slice(n+1)]}}},selectors:{getEventScheduleId:e=>e.eventScheduleId,getScheduledEvents:e=>e.scheduledEvents}}),{addScheduledEvent:c,clearEventScheduleId:u,clearScheduledEvents:s,removeScheduledEvent:r,setEventScheduleId:l,updateScheduledEvent:i,updateScheduledEventField:h}=d.actions;d.reducer;let{getEventScheduleId:o,getScheduledEvents:v}=d.selectors},4569:function(e,t,n){"use strict";n.d(t,{ZK:function(){return s},wg:function(){return l}});var d=n(549),c=n(7372),u=n(621);let s=(0,d.LC)({baseQuery:(0,c.ni)({baseUrl:"".concat(u.CT,"/")}),reducerPath:"scheduledEventApi",tagTypes:["Scheduled Event"],endpoints:e=>({getAllScheduledEvents:e.query({query:e=>"".concat(u.JM,"/").concat(e,"/").concat(u._N),providesTags:["Scheduled Event"]}),postScheduledEvents:e.mutation({query:e=>{let{eventScheduleId:t,scheduledEvents:n}=e;return{url:"".concat(u.JM,"/").concat(t,"/").concat(u._N),method:"POST",body:n}},invalidatesTags:["Scheduled Event"]})})}),{useGetAllScheduledEventsQuery:r,usePostScheduledEventsMutation:l}=s}},function(e){e.O(0,[801,549,115,364,744],function(){return e(e.s=3210)}),_N_E=e.O()}]);