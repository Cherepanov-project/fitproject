(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8767],{63346:function(n,e,t){"use strict";t.d(e,{NG:function(){return u},EA:function(){return s},qB:function(){return c},ro:function(){return d},rx:function(){return p}});var r=t(50029),i=t(87794),a=t.n(i),o=t(28517),u=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Hj.get("/");case 2:return e=n.sent,n.abrupt("return",e.data.data.content);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Hj.post("/",e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Hj.get("/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Hj.put("/",e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Hj.delete("/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},55396:function(n,e,t){"use strict";t.d(e,{Z:function(){return w}});t(67294);var r=t(88767),i=t(83321),a=t(82580),o=t(54538),u=t(32977),s=t(15077),c=t(66779),d=t(89150),p=t(74688),f=t(63346),l=t(53918),h=l.default.div.withConfig({displayName:"editFormWorkoutstyles__ContentWrapper",componentId:"sc-1j7vh26-0"})(["width:100%;border:1px solid #dfe0eb;border-radius:8px;margin:0 auto;background-color:#ffffff;"]),x=l.default.h2.withConfig({displayName:"editFormWorkoutstyles__FormTitle",componentId:"sc-1j7vh26-1"})(["margin:0;font-weight:700;font-size:19px;line-height:24px;padding-left:25px;letter-spacing:0.4px;color:#252733;"]),m=l.default.div.withConfig({displayName:"editFormWorkoutstyles__FormWrapper",componentId:"sc-1j7vh26-2"})(["padding:0 120px;"]),v=l.default.p.withConfig({displayName:"editFormWorkoutstyles__SecondaryText",componentId:"sc-1j7vh26-3"})(["margin:27px 0 5px 0;font-weight:400;font-size:16px;letter-spacing:0.01em;color:#6f7482;"]),j=t(85893),w=function(n){var e=n.title,t=n.workoutData,l=(0,r.useMutation)((function(n){return t?(0,f.ro)({id:+t.id,description:n.description}):(0,f.EA)(n)})),w=l.mutate;l.isLoading;return(0,j.jsxs)(h,{children:[(0,j.jsx)(x,{children:e}),(0,j.jsx)(a.J9,{initialValues:{header:"",description:(null===t||void 0===t?void 0:t.description)||"",nutritionValues:[{name:"calories",value:0},{name:"protein",value:0},{name:"fats",value:0},{name:"carbs",value:0}],ingredients:[{name:"",description:""}],recipe:""},validationSchema:d.CW,onSubmit:function(n,e){var t=e.resetForm,r={name:n.header,description:n.description};w(r,{onSuccess:function(){return t()}})},render:function(n){var e=n.values;return(0,j.jsx)(a.l0,{autoComplete:"off",children:(0,j.jsxs)(m,{children:[(0,j.jsx)(v,{children:"Header"}),(0,j.jsx)(u.Z,{name:"header",placeholder:"Text"}),(0,j.jsx)(v,{children:"Preview image"}),(0,j.jsx)(o.Z,{}),(0,j.jsx)(v,{children:"Short description"}),(0,j.jsx)(u.Z,{name:"description",placeholder:"Text"}),(0,j.jsx)(v,{children:"Ingredients"}),(0,j.jsx)(p.Z,{name:"ingredients"}),(0,j.jsx)(v,{children:"Nutrition Values"}),(0,j.jsx)(s.Z,{name:"nutritionValues",values:e}),(0,j.jsx)(v,{children:"Recipe"}),(0,j.jsx)(c.Z,{name:"recipe"}),(0,j.jsx)(i.Z,{type:"submit",variant:"contained",sx:{margin:"30px 0 30px 90%"},children:"Create"})]})})}})]})}},38183:function(n,e,t){"use strict";t.r(e);var r=t(88767),i=t(83128),a=t(63346),o=t(55396),u=t(85893);e.default=(0,i.X)((function(n){var e=n.id,t=(0,r.useQuery)(["workout",e],(function(){return(0,a.qB)(+e)})),i=t.data,s=t.isLoading,c=t.error;return c instanceof Error?(0,u.jsx)("h1",{children:c.message}):s?(0,u.jsx)("h1",{children:"Loading..."}):(0,u.jsx)("div",{children:(0,u.jsx)(o.Z,{title:e,workoutData:null===i||void 0===i?void 0:i.data})})}))},74424:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/workouts/edit-workout/[id]",function(){return t(38183)}])}},function(n){n.O(0,[7333,4135,7664,7700,1524,551,315,7642,2956,3128,9660,9774,2888,179],(function(){return e=74424,n(n.s=e);var e}));var e=n.O();_N_E=e}]);