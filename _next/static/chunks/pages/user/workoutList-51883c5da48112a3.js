(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9800],{63346:function(t,e,n){"use strict";n.d(e,{NG:function(){return a},EA:function(){return c},qB:function(){return u},ro:function(){return l},rx:function(){return d}});var r=n(50029),i=n(87794),o=n.n(i),s=n(28517),a=function(){var t=(0,r.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Hj.get("/");case 2:return e=t.sent,t.abrupt("return",e.data.data.content);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Hj.post("/",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Hj.get("/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Hj.put("/",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Hj.delete("/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},33889:function(t,e,n){"use strict";n.d(e,{Z:function(){return j}});var r=n(92777),i=n(82262),o=n(45959),s=n(72179),a=n(37247),c=n(67294),u=n(11163),l=n(41664),d=n(83321),f=n(50594),p=n(53918),x=p.default.div.withConfig({displayName:"fallBackstyles__StyledWrapper",componentId:"sc-hysb94-0"})(["padding:20px 30px;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-items:flex-start;border:1px solid #dfe0eb;border-radius:8px;background-color:#f5f5f7;filter:drop-shadow(4px 5px 12px #2f3036);"]),h=p.default.div.withConfig({displayName:"fallBackstyles__StyledAdminErrorContainer",componentId:"sc-hysb94-1"})(['position:absolute;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Mulish",sans-serif;background-image:linear-gradient(315deg,#485461 0%,#05172a 74%);']),m=p.default.div.withConfig({displayName:"fallBackstyles__StyledUserErrorContainer",componentId:"sc-hysb94-2"})(['height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Mulish",sans-serif;background:transparent;']),g=p.default.h2.withConfig({displayName:"fallBackstyles__StyledTitle",componentId:"sc-hysb94-3"})(["padding-bottom:7px;color:#0f467e;&:first-child{margin-bottom:15px;}"]),y=p.default.pre.withConfig({displayName:"fallBackstyles__StyledPre",componentId:"sc-hysb94-4"})(["margin-bottom:25px;font-family:inherit;letter-spacing:0.2px;line-height:20px;font-weight:500;"]),w=n(85893),v=function(t){var e=t.error,n=t.stack,r=(0,c.useState)(!1),i=r[0],o=r[1],s=(0,u.useRouter)(),a=!!s.components["/admin"],p=a?h:m,v=a?"/admin/overview":"/user/statistics";return e&&!i?(0,w.jsx)(p,{onMouseDown:function(t){t.target===t.currentTarget&&(s.replace(v),o(!0))},children:(0,w.jsxs)(x,{children:[(0,w.jsx)(g,{children:a?e:"Something went wrong..."}),a?(0,w.jsxs)(w.Fragment,{children:[" ",(0,w.jsx)(g,{children:"Stack:"}),(0,w.jsx)(y,{children:n})]}):null,(0,w.jsx)(l.default,{href:v,passHref:!0,children:(0,w.jsx)(d.Z,{variant:"outlined",startIcon:(0,w.jsx)(f.Z,{}),onClick:function(){o(!0)},children:"Close"})})]})}):null};function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,a.Z)(t);if(e){var i=(0,a.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,s.Z)(this,n)}}var j=function(t){(0,o.Z)(n,t);var e=b(n);function n(t){var i;return(0,r.Z)(this,n),(i=e.call(this,t)).state={error:null,errorInfo:null},i}return(0,i.Z)(n,[{key:"componentDidCatch",value:function(t,e){console.log("ErrorBoundary cought an error:",t),this.setState({error:t,errorInfo:e.componentStack})}},{key:"render",value:function(){return this.state.errorInfo?(0,w.jsx)(v,{error:this.state.error&&this.state.error.toString(),stack:this.state.errorInfo}):this.props.children}}]),n}(c.Component)},37566:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=n(53918),i=r.default.div.withConfig({displayName:"CardExercisestyles__StyledBox",componentId:"sc-1iq3270-0"})(["height:202px;overflow:hidden;background:#ffffff;box-shadow:0px 1.75848px 4.39621px rgba(0,0,0,0.15);border-radius:7.03394px;padding:3px;"]),o=r.default.div.withConfig({displayName:"CardExercisestyles__StyledContentBox",componentId:"sc-1iq3270-1"})(["width:100%;height:100%;background:#f0f7ff;border-radius:7.03394px;padding:13px 2px 3px 2px;box-sizing:border-box;"]),s=r.default.div.withConfig({displayName:"CardExercisestyles__StyledImage",componentId:"sc-1iq3270-2"})(["width:118px;height:126px;margin:0 auto;border-radius:50px;background-color:#ffffff;background:url(",") no-repeat center center #ffffff;background-size:",";"],(function(t){return t.imgUrl}),(function(t){return t.imgWidth>t.imgHeight?"70% auto":"auto 70%"})),a=r.default.div.withConfig({displayName:"CardExercisestyles__StyledTextBox",componentId:"sc-1iq3270-3"})(["padding-top:13px;text-align:center;"]),c=r.default.p.withConfig({displayName:"CardExercisestyles__StyledName",componentId:"sc-1iq3270-4"})(['font-family:"Roboto";font-style:normal;font-weight:500;font-size:15.107px;line-height:18px;color:#000000;margin:0;padding:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;']),u=r.default.span.withConfig({displayName:"CardExercisestyles__StyledReps",componentId:"sc-1iq3270-5"})(['font-family:"Roboto";font-style:normal;font-weight:500;font-size:12.9488px;line-height:15px;color:#969696;']),l=n(55983),d="/fitproject/_next/static/media/workoutExercise.bbee89c1.svg",f=n(85893),p=function(t){var e=t.data,n=t.styles,r=void 0===n?null:n;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(i,{style:null===r||void 0===r?void 0:r.StyledBox,children:(0,f.jsxs)(o,{style:null===r||void 0===r?void 0:r.StyledContentBox,children:[(0,f.jsx)(s,{imgUrl:d,imgWidth:e.imgWidth,imgHeight:e.imgHeight,style:null===r||void 0===r?void 0:r.StyledImage}),(0,f.jsxs)(a,{style:null===r||void 0===r?void 0:r.StyledTextBox,children:[(0,f.jsx)(l.Hi,{}),(0,f.jsx)(c,{style:null===r||void 0===r?void 0:r.StyledName,children:e.name.toUpperCase()}),(0,f.jsx)(u,{style:null===r||void 0===r?void 0:r.StyledReps,children:"".concat(e.approachCount," X ").concat(e.repeatCount," REPS")})]})]})})})}},89798:function(t,e,n){"use strict";n.d(e,{W:function(){return r}});var r=18e6},81872:function(t,e,n){"use strict";n.d(e,{Z:function(){return g}});var r=n(67294),i=n(50029),o=n(87794),s=n.n(o),a=n(31955),c=n(48e3),u=n(51325),l=n(28517),d=Date.now(),f=!0,p=function(){return d=Date.now()};window.addEventListener("mousedown",p),window.addEventListener("mousemove",p),window.addEventListener("keydown",p),window.addEventListener("scroll",p),window.addEventListener("touchstart",p);var x=function(){var t=(0,i.Z)(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!f){t.next=12;break}return t.prev=1,t.next=4,l.xv.post("/");case 4:e=t.sent,(n=e.data).success&&a.Z.set(c.LA,n.data.jwtToken),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),h=function(){Date.now()-d>36e5?(f=!1,a.Z.remove(c.LA),(0,u.Z)("/user")):f=!0},m=n(85893),g=function(t){return function(){return(0,r.useLayoutEffect)((function(){var t=setInterval(x,84e4),e=setInterval(h,6e4);return function(){clearInterval(t),clearInterval(e)}}),[]),(0,m.jsx)(t,{})}}},8833:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return U}});var r=n(67294),i=n(53918),o=i.default.div.withConfig({displayName:"workoutListstyles__MainWrapper",componentId:"sc-75mana-0"})(["display:grid;grid-template-columns:230px 1fr;width:100%;background-color:white;border-radius:5px;"]),s=i.default.div.withConfig({displayName:"workoutListstyles__SidebarWrapper",componentId:"sc-75mana-1"})(["width:230px;box-shadow:0 0 4px rgba(0,0,0,0.25);display:flex;flex-direction:column;flex-shrink:0;@media (min-width:2300px){width:330px;}"]),a=i.default.div.withConfig({displayName:"workoutListstyles__SidebarListWrapper",componentId:"sc-75mana-2"})(["display:flex;flex-direction:column;margin:89px 22px 89px 15px;:last-of-type{margin:0 22px 89px 15px;}"]),c=i.default.div.withConfig({displayName:"workoutListstyles__SidebarListTitle",componentId:"sc-75mana-3"})(['font-family:"Poppins";font-style:normal;font-weight:600;font-size:18px;line-height:27px;@media (min-width:2300px){font-size:24px;}']),u=i.default.div.withConfig({displayName:"workoutListstyles__SidebarItemListWrapper",componentId:"sc-75mana-4"})(["margin-top:16px;display:flex;flex-direction:column;justify-content:space-between;"]),l=i.default.div.withConfig({displayName:"workoutListstyles__SidebarListItem",componentId:"sc-75mana-5"})(['display:flex;justify-content:space-between;align-items:center;font-size:14px;margin-bottom:12px;@media (min-width:2300px){font-size:18px;}span{width:24px;height:24px;}div{font-family:"Open Sans";font-style:normal;font-weight:400;font-size:14px;line-height:19px;}']),d=i.default.div.withConfig({displayName:"workoutListstyles__SidebarListItemCheckbox",componentId:"sc-75mana-6"})(["display:flex;align-items:center;font-size:14px;margin-bottom:12px;span{width:24px;height:24px;}@media (min-width:2300px){font-size:18px;}"]),f=i.default.div.withConfig({displayName:"workoutListstyles__SidebarStyledItemCheckbox",componentId:"sc-75mana-7"})(['margin-left:8px;font-family:"Open Sans";font-style:normal;font-weight:400;font-size:14px;line-height:19px;']),p=i.default.div.withConfig({displayName:"workoutListstyles__CategoriesStyledItem",componentId:"sc-75mana-8"})(['display:flex;justify-content:center;align-items:center;padding:0 8px;height:18px;text-align:center;background-color:#f4f8ec;color:#6a983c;border-radius:12px;font-family:"Poppins";font-style:normal;line-height:18px;font-size:12px;font-weight:600;@media (min-width:2300px){font-size:18px;}']),x=i.default.div.withConfig({displayName:"workoutListstyles__ItemListWrapper",componentId:"sc-75mana-9"})(["width:100%;"]),h=i.default.a.withConfig({displayName:"workoutListstyles__StyledAnchorExercise",componentId:"sc-75mana-10"})(["width:calc(100% / 3 - 24px);margin:12px;@media (max-width:1509px){width:calc(100% / 2 - 24px);}@media (max-width:1259px){width:calc(100% - 24px);}"]),m=[{name:"Cardio",value:320},{name:"Yoga",value:112},{name:"Stretching",value:32},{name:"Power",value:48}],g={Arms:!0,Legs:!0,Breast:!0,Chest:!0},y=[{name:"Arms"},{name:"Legs"},{name:"Breast"},{name:"Chest"}],w=n(78237),v=n(85893),b=function(){var t=m.map((function(t){return(0,v.jsxs)(l,{children:[(0,v.jsx)("div",{children:t.name}),(0,v.jsx)(p,{children:t.value})]},(0,w.Z)())}));return(0,v.jsxs)(a,{children:[(0,v.jsx)(c,{children:"Categories"}),(0,v.jsx)(u,{children:t})]})},j=n(59499),k=n(85071);function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var C=function(t){var e=t.muscles,n=t.setMuscle,r=function(t){var r=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){(0,j.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e);r[t]=!r[t],n(r)},i=y.map((function(t){return(0,v.jsxs)(d,{children:[(0,v.jsx)(k.Z,{sx:{color:"#D1D1D1","&.Mui-checked":{color:"#6A983C"}},onClick:function(){return r(t.name)},checked:e[t.name]}),(0,v.jsx)(f,{children:t.name})]},(0,w.Z)())}));return(0,v.jsxs)(a,{children:[(0,v.jsx)(c,{children:"Muscle group"}),(0,v.jsx)(u,{children:i})]})},S=n(55983),I=function(t){var e=t.muscles,n=t.setMuscle;return(0,v.jsxs)(s,{children:[(0,v.jsx)(S.ES,{}),(0,v.jsx)(S.sg,{}),(0,v.jsx)(b,{}),(0,v.jsx)(C,{muscles:e,setMuscle:n})]})},Z=n(30511),E=n(88767),L=n(41664),N=n(87357),O=n(37566),B=n(10633),P=n(26447),z=n(63346),M=n(27812),R=function(t,e){return t.filter((function(t){return t.area===e}))},W=n(89798),D=i.default.div.withConfig({displayName:"itemListstyles__LayoutItemList",componentId:"sc-1rt01ac-0"})(["width:100%;height:100%;position:relative;"]),H=n(6224),T=n(98456),A=function(t){var e=t.muscles,n=(0,r.useState)(H.t),i=n[0],o=n[1],s=(0,r.useMemo)((function(){return[]}),[]),a=(0,E.useQuery)("workouts",z.NG,{staleTime:W.W,useErrorBoundary:!0}),c=a.data,u=a.isSuccess,l=a.isLoading,d=(0,r.useState)(0),f=d[0],p=d[1],x=(0,r.useState)(i),m=x[0],g=x[1],y=(0,E.useQueryClient)(),b=function(t){t&&(p((function(){return(t-1)*i})),g((function(){return t*i})),I(t))},j=(0,r.useState)(Math.ceil(s.length/i)),k=j[0],_=j[1],C=(0,r.useState)(1),S=C[0],I=C[1];u&&(s=function(t,e){var n=[];return t.Arms&&(n=[].concat((0,M.Z)(n),(0,M.Z)(R(e,"ARMS")))),t.Legs&&(n=[].concat((0,M.Z)(n),(0,M.Z)(R(e,"LEGS")))),t.Chest&&(n=[].concat((0,M.Z)(n),(0,M.Z)(R(e,"CHEST")))),t.Breast&&(n=[].concat((0,M.Z)(n),(0,M.Z)(R(e,"BREAST")))),n}(e,c)),(0,r.useEffect)((function(){y.prefetchQuery("workouts",z.NG)}),[y]),(0,r.useEffect)((function(){_(Math.ceil(s.length/i))}),[s]),(0,r.useEffect)((function(){k<S&&b(k)}),[k,S]),(0,r.useEffect)((function(){function t(){o((0,H.t)())}return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),(0,r.useEffect)((function(){_(Math.ceil(s.length/i)),p((function(){return(S-1)*i})),g((function(){return S*i}))}),[i]);for(var Z=[],A=f;A<m;A++)s[A]&&Z.push((0,v.jsx)(L.default,{href:"/user/workoutList/workout/".concat(s[A].id),passHref:!0,children:(0,v.jsx)(h,{children:(0,v.jsx)(O.Z,{data:s[A]})})},(0,w.Z)()));return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(D,{children:[(0,v.jsxs)(N.Z,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"flex-start",paddingTop:"90px",margin:"0 12px"},children:[l&&(0,v.jsx)(T.Z,{sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, - 50%)"}}),Z]}),k>0&&(0,v.jsx)(P.Z,{spacing:2,sx:{margin:"60px 0 0 0"},children:(0,v.jsx)(B.Z,{defaultPage:1,count:k,onChange:function(t,e){return b(e)},page:S,shape:"rounded",variant:"outlined",color:"secondary",sx:{backgroundColor:"#ffffff",position:"absolute",right:"54px",bottom:"13px"}})})]})})},q=n(81872),G=n(33889),U=(0,q.Z)((0,Z.s)((function(){var t=(0,r.useState)(g),e=t[0],n=t[1];return(0,v.jsxs)(o,{children:[(0,v.jsx)(I,{muscles:e,setMuscle:n}),(0,v.jsx)(x,{children:(0,v.jsx)(G.Z,{children:(0,v.jsx)(A,{muscles:e})})})]})})))},6224:function(t,e,n){"use strict";function r(){var t=window.innerWidth;return t<1260?2:t<1510?4:6}n.d(e,{t:function(){return r}})},51325:function(t,e){"use strict";e.Z=function(t){window.location.href="".concat(t)}},84228:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/workoutList",function(){return n(8833)}])}},function(t){t.O(0,[7333,4135,5222,3966,3798,9674,511,9774,2888,179],(function(){return e=84228,t(t.s=e);var e}));var e=t.O();_N_E=e}]);