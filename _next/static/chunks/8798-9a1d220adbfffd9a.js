"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8798],{63346:function(t,e,n){n.d(e,{NG:function(){return s},EA:function(){return l},qB:function(){return d},ro:function(){return c},rx:function(){return f}});var i=n(50029),o=n(87794),r=n.n(o),a=n(28517),s=function(){var t=(0,i.Z)(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Hj.get("/");case 2:return e=t.sent,t.abrupt("return",e.data.data.content);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,i.Z)(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Hj.post("/",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,i.Z)(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Hj.get("/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,i.Z)(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Hj.put("/",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,i.Z)(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Hj.delete("/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},21529:function(t,e,n){n.d(e,{Z:function(){return u}});var i=n(53918),o=i.default.div.withConfig({displayName:"CardExercisestyles__StyledBox",componentId:"sc-1iq3270-0"})(["width:220px;height:202px;overflow:hidden;background:#ffffff;box-shadow:0px 1.75848px 4.39621px rgba(0,0,0,0.15);border-radius:7.03394px;padding:3px;margin:0 30px 34px 0;"]),r=i.default.div.withConfig({displayName:"CardExercisestyles__StyledContentBox",componentId:"sc-1iq3270-1"})(["width:100%;height:100%;background:#f0f7ff;border-radius:7.03394px;padding:13px 2px 3px 2px;box-sizing:border-box;"]),a=i.default.div.withConfig({displayName:"CardExercisestyles__StyledImage",componentId:"sc-1iq3270-2"})(["width:118px;height:126px;margin:0 auto;border-radius:50px;background-color:#ffffff;background:url(",") no-repeat center center #ffffff;background-size:",";background-size:auto 60%;"],(function(t){return t.imgUrl}),(function(t){return t.imgWidth>t.imgHeight?"100% auto":"auto 100%"})),s=i.default.div.withConfig({displayName:"CardExercisestyles__StyledTextBox",componentId:"sc-1iq3270-3"})(["padding-top:13px;text-align:center;"]),l=i.default.p.withConfig({displayName:"CardExercisestyles__StyledName",componentId:"sc-1iq3270-4"})(['font-family:"Roboto";font-style:normal;font-weight:500;font-size:15.107px;line-height:18px;color:#000000;margin:0;padding:0;max-width:210px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;']),d=i.default.span.withConfig({displayName:"CardExercisestyles__StyledReps",componentId:"sc-1iq3270-5"})(['font-family:"Roboto";font-style:normal;font-weight:500;font-size:12.9488px;line-height:15px;color:#969696;']),c=n(55983),f=n(85893),u=function(t){var e=t.data,n=t.styles,i=void 0===n?null:n;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(o,{style:null===i||void 0===i?void 0:i.StyledBox,children:(0,f.jsxs)(r,{style:null===i||void 0===i?void 0:i.StyledContentBox,children:[(0,f.jsx)(a,{imgUrl:e.img,imgWidth:e.imgWidth,imgHeight:e.imgHeight,style:null===i||void 0===i?void 0:i.StyledImage}),(0,f.jsxs)(s,{style:null===i||void 0===i?void 0:i.StyledTextBox,children:[(0,f.jsx)(c.Hi,{}),(0,f.jsx)(l,{style:null===i||void 0===i?void 0:i.StyledName,children:e.name.toUpperCase()}),(0,f.jsx)(d,{style:null===i||void 0===i?void 0:i.StyledReps,children:"".concat(e.approachCount," X ").concat(e.repeatCount," REPS")})]})]})})})}},89798:function(t,e,n){n.d(e,{W:function(){return i}});var i=18e6},81872:function(t,e,n){n.d(e,{Z:function(){return x}});var i=n(67294),o=n(50029),r=n(87794),a=n.n(r),s=n(31955),l=n(48e3),d=n(51325),c=n(28517),f=Date.now(),u=!0,p=function(){return f=Date.now()};window.addEventListener("mousedown",p),window.addEventListener("mousemove",p),window.addEventListener("keydown",p),window.addEventListener("scroll",p),window.addEventListener("touchstart",p);var h=function(){var t=(0,o.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!u){t.next=12;break}return t.prev=1,t.next=4,c.xv.post("/");case 4:e=t.sent,(n=e.data).success&&s.Z.set(l.LA,n.data.jwtToken),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),m=function(){Date.now()-f>36e5?(u=!1,s.Z.remove(l.LA),(0,d.Z)("/user")):u=!0},g=n(85893),x=function(t){return function(){return(0,i.useLayoutEffect)((function(){var t=setInterval(h,84e4),e=setInterval(m,6e4);return function(){clearInterval(t),clearInterval(e)}}),[]),(0,g.jsx)(t,{})}}},83888:function(t,e,n){n.d(e,{s:function(){return ut}});var i=n(59499),o=n(67294),r=n(41664),a=n(11163),s=n(25675),l=n(78237),d=n(53639),c=n(53918),f=c.default.div.withConfig({displayName:"leftSideBarstyles__SidebarWrapper",componentId:"sc-1mlsrpl-0"})(["height:100vh;background-color:#f1f1f1;padding:21px 30px;position:sticky;top:0;bottom:21px;"]),u=c.default.div.withConfig({displayName:"leftSideBarstyles__Sidebar",componentId:"sc-1mlsrpl-1"})(["width:104px;height:100%;background:linear-gradient(180deg,#6d63ff 0%,#3b32c0 100%);border-radius:40px;"]),p=c.default.div.withConfig({displayName:"leftSideBarstyles__IconListWrapper",componentId:"sc-1mlsrpl-2"})(["height:95%;padding:30px 38px;display:flex;flex-direction:column;justify-content:space-between;"]),h=c.default.div.withConfig({displayName:"leftSideBarstyles__TopIconsWrapper",componentId:"sc-1mlsrpl-3"})(["display:flex;flex-direction:column;align-items:center;"]),m=c.default.div.withConfig({displayName:"leftSideBarstyles__BottomIconWrapper",componentId:"sc-1mlsrpl-4"})(["display:flex;justify-content:center;"]),g=c.default.span.withConfig({displayName:"leftSideBarstyles__Divider",componentId:"sc-1mlsrpl-5"})(["width:69px;color:white;background-color:white;border:1px solid #ffffff;margin-bottom:24px;"]),x=c.default.div.withConfig({displayName:"leftSideBarstyles__ImageWrapper",componentId:"sc-1mlsrpl-6"})(["width:34px;height:34px;border-radius:13px;display:flex;justify-content:center;align-items:center;margin-bottom:24px;cursor:pointer;:hover{background-color:#3c3693;width:34px;height:34px;}",""],(function(t){if(t.selected)return(0,c.css)(["background-color:#3c3693;width:34px;height:34px;"])})),y=(c.default.img.withConfig({displayName:"leftSideBarstyles__Image",componentId:"sc-1mlsrpl-7"})(["width:24px;height:24px;cursor:pointer;"]),n(46454)),w=n(2015),v=(n(53639),n(95352)),b=n(16399),j=[{id:1,route:"/user/statistics",name:"bell",icon:y,divider:!0},{id:2,route:"/user/statistics",name:"statistics",icon:v},{id:3,route:"/user/calendar",name:"calendar",icon:w},{id:4,route:"/user/statistics",name:"message",icon:n(24636)},{id:5,route:"/user/statistics",name:"sheet",icon:b}],_=n(85893),S=function(){var t=(0,a.useRouter)().asPath.split("/").pop(),e=j.map((function(e){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r.default,{href:e.route,passHref:!0,children:(0,_.jsx)(x,{selected:e.name===t,children:(0,_.jsx)(s.default,{src:e.icon,alt:e.name,width:"22px",height:"22px"})})},(0,l.Z)()),null!==e&&void 0!==e&&e.divider?(0,_.jsx)(g,{}):""]})}));return(0,_.jsx)(f,{children:(0,_.jsx)(u,{children:(0,_.jsxs)(p,{children:[(0,_.jsx)(h,{children:e}),(0,_.jsx)(m,{children:(0,_.jsx)(r.default,{href:"#",passHref:!0,children:(0,_.jsx)(x,{selected:"help"===t,children:(0,_.jsx)(s.default,{src:d.default.src,alt:"h",width:"24",height:"24"})})})})]})})})},I=n(16835),k=n(31955),C=n(97398),N=n(78462),A=n(76113),B=n(48885),R=n(59334),Z=n(35294),z=n(4178),E=n(25683),M=n(39029),O="/_next/static/media/SeetingsIcon.fed5fe9e.svg",U="/_next/static/media/goals.0131ac8d.svg",P="/_next/static/media/diet.b7a22828.svg",L={src:"/_next/static/media/defaultAvatar.867e58a5.png",height:100,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAvklEQVR42hWIywqCQBiF59lb9RC1K+hii4QuFBQtCgon02SoGJPM0jSNMMcEZ6a/w4Fzvg9JKYUQZzdZYXepXexLDAgSweiG11MtdUDUIYGD9StI5DnxRNnP++QZpnH0matk0t27NEKnhYNbltYw84R93zlumrhtHWY2uk9tWts5HZLFGXsxp0to3biNKGIkfFTW2dbnaQFlRvBHM0CCi2Jss8qGVTUonGJARSmQhHDB9aBUjqVy4FtfllxK+QM7FKUZA7V+sAAAAABJRU5ErkJggg=="},W="/_next/static/media/arrow.b2296483.svg",D="/_next/static/media/meter.107d3f9d.svg",G=c.default.div.withConfig({displayName:"rightSideBarstyles__MainWrapper",componentId:"sc-k5wvuz-0"})(["height:100vh;position:sticky;top:0;"]),H=c.default.div.withConfig({displayName:"rightSideBarstyles__RightSideBarWrapper",componentId:"sc-k5wvuz-1"})(["width:244px;height:100%;display:flex;flex-direction:column;background-color:white;"]),F=c.default.div.withConfig({displayName:"rightSideBarstyles__UserInfoWrapper",componentId:"sc-k5wvuz-2"})(["display:flex;margin-top:34px;&:hover{cursor:pointer;}"]),q=c.default.div.withConfig({displayName:"rightSideBarstyles__UserInfo",componentId:"sc-k5wvuz-3"})(["align-self:center;"]),T=c.default.div.withConfig({displayName:"rightSideBarstyles__WeightLoosGoalWrapper",componentId:"sc-k5wvuz-4"})(["margin:0 auto;text-align:center;"]),Q=c.default.div.withConfig({displayName:"rightSideBarstyles__Loss",componentId:"sc-k5wvuz-5"})(["margin:15px 0;"]),K=c.default.img.withConfig({displayName:"rightSideBarstyles__IconArrow",componentId:"sc-k5wvuz-6"})(["position:absolute;padding:10px 12px 10px;left:185px;box-shadow:0px 1px 4px rgba(0,0,0,0.25);border-radius:10px;width:32px;height:31px;"]),J=c.default.img.withConfig({displayName:"rightSideBarstyles__Meter",componentId:"sc-k5wvuz-7"})([""]),Y=c.default.img.withConfig({displayName:"rightSideBarstyles__Avatar",componentId:"sc-k5wvuz-8"})(["width:64px;height:65px;margin:0px 10px 0px 24px;border:2px solid #6d63ff;box-sizing:border-box;border-radius:100px;img{border-radius:35%;}"]),V=c.default.div.withConfig({displayName:"rightSideBarstyles__UserName",componentId:"sc-k5wvuz-9"})(["font-weight:500;font-size:16px;line-height:19px;letter-spacing:-0.005em;"]),X=c.default.div.withConfig({displayName:"rightSideBarstyles__LastVisitTime",componentId:"sc-k5wvuz-10"})(["font-weight:normal;font-size:13px;line-height:16px;letter-spacing:-0.005em;color:#787878;"]),$=c.default.img.withConfig({displayName:"rightSideBarstyles__Icon",componentId:"sc-k5wvuz-11"})(["width:27px;"]),tt=c.default.div.withConfig({displayName:"rightSideBarstyles__IconWrapper",componentId:"sc-k5wvuz-12"})([""]),et={elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},nt=n(48e3),it=function(t){var e=t.avatar,n=void 0===e?L:e,i=t.userName,r=void 0===i?"User":i,s=t.lastDate,d=void 0===s?new Date:s,c=(0,a.useRouter)(),f=(0,C.Z)(d,{includeSeconds:!0}),u=o.useState(null),p=(0,I.Z)(u,2),h=p[0],m=p[1],g=Boolean(h),x=function(){return m(null)};return(0,_.jsxs)(G,{children:[(0,_.jsxs)(H,{children:[(0,_.jsxs)(F,{onClick:function(t){return m(t.currentTarget)},children:[(0,_.jsx)(Y,{alt:"avatar",src:n.src}),(0,_.jsxs)(q,{children:[(0,_.jsx)(V,{children:r}),(0,_.jsxs)(X,{children:["Joined ",f]})]})]}),(0,_.jsx)(N.Z,{sx:{margin:"auto 0"},children:["Goals","Diet","Settings"].map((function(t,e){return(0,_.jsxs)(A.Z,{sx:{position:"relative",marginTop:"30px",marginLeft:"2px",padding:"24px",width:"32px",height:"32px",":hover":{transition:"1s ",backgroundColor:"#F0EFFF",width:"98%",height:"40px",padding:"24px 24px",right:"0",boxShadow:"0px 1px 4px rgba(0, 0, 0, 0.25)",borderRadius:"10px",img:{transition:"1s",border:"none",boxShadow:"none"}}},children:[(0,_.jsx)(B.Z,{children:0===e?(0,_.jsx)(tt,{children:(0,_.jsx)($,{src:U})}):1===e?(0,_.jsx)(tt,{children:(0,_.jsx)($,{src:P})}):(0,_.jsx)(tt,{children:(0,_.jsx)($,{src:O})})}),(0,_.jsx)(R.Z,{primary:t,sx:{width:"100%"}}),(0,_.jsx)(K,{src:W})]},(0,l.Z)())}))}),(0,_.jsxs)(T,{children:["Weight loos Goal",(0,_.jsxs)(Q,{children:["Loss: 5kg ",(0,_.jsx)("span",{children:"/ Month"})]}),(0,_.jsx)(J,{src:D})]})]}),(0,_.jsxs)(Z.Z,{anchorEl:h,id:"account-menu",open:g,onClick:x,PaperProps:et,onKeyDown:function(t){t.preventDefault(),"Escape"===t.key&&x()},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[(0,_.jsxs)(z.Z,{children:[(0,_.jsx)(B.Z,{children:(0,_.jsx)(E.Z,{fontSize:"small"})}),"Settings"]}),(0,_.jsxs)(z.Z,{onClick:function(){k.Z.remove(nt.LA),c.push("/user")},children:[(0,_.jsx)(B.Z,{children:(0,_.jsx)(M.Z,{fontSize:"small"})}),"Logout"]})]})]})},ot=c.default.div.withConfig({displayName:"layoutUserstyles__StyledLayoutUser",componentId:"sc-6bj1zg-0"})(["width:100%;background-color:#e5e5e5;padding:0;margin:0;"]),rt=c.default.div.withConfig({displayName:"layoutUserstyles__Container",componentId:"sc-6bj1zg-1"})(["display:grid;grid-template-columns:180px 1fr 244px;margin:0;"]),at=c.default.div.withConfig({displayName:"layoutUserstyles__Content",componentId:"sc-6bj1zg-2"})(["background-color:#f1f1f1;margin-right:30px;padding-bottom:21px;"]),st=c.default.div.withConfig({displayName:"layoutUserstyles__ContentWrapper",componentId:"sc-6bj1zg-3"})(["display:flex;flex-direction:column;background-color:#f1f1f1;"]),lt=c.default.input.withConfig({displayName:"layoutUserstyles__TopInput",componentId:"sc-6bj1zg-4"})(["width:402px;height:55px;box-shadow:0 1px 10px 1px rgba(0,0,0,0.08);border-radius:50px;outline:none;border:none;font-size:14px;color:#bebebe;padding-left:20px;margin:38px 0 47px 0;"]);function dt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?dt(Object(n),!0).forEach((function(e){(0,i.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ft=function(t){var e=t.children;return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(ot,{children:(0,_.jsxs)(rt,{children:[(0,_.jsx)(S,{}),(0,_.jsxs)(st,{children:[(0,_.jsx)(lt,{type:"text",placeholder:"Search Activities, messages"}),(0,_.jsx)(at,{children:(0,_.jsx)("main",{children:e})})]}),(0,_.jsx)(it,{avatar:void 0,userName:"kek",includeSeconds:!0})]})})})},ut=function(t){return function(e){return(0,_.jsx)(ft,{children:(0,_.jsx)(t,ct({},e))})}}},55983:function(t,e,n){n.d(e,{B2:function(){return o},Hi:function(){return r},ES:function(){return a},sg:function(){return s},sN:function(){return l}});var i=n(53918),o=(0,i.createGlobalStyle)(["@font-face{font-family:'Mulish';font-style:normal;font-weight:400;src:url('/fonts/mulish-v10-latin/mulish-v10-latin-regular.eot');}"]),r=(0,i.createGlobalStyle)(["@font-face{font-family:'Roboto';src:local('Roboto') url('/fonts/roboto/Roboto-Regular.ttf') format('truetype');font-weight:400;font-style:normal;}@font-face{font-family:'Roboto';src:local('Roboto Italic'),local('Roboto-Italic'),url('/fonts/roboto/Roboto-Italic.ttf') format('truetype');font-weight:400;font-style:italic;}@font-face{font-family:'Roboto';src:local('Roboto Medium'),local('Roboto-Medium'),url('/fonts/roboto/Robotomedium.woff2') format('woff2'),url('/fonts/roboto/Robotomedium.woff') format('woff'),url('/fonts/roboto/Robotomedium.ttf') format('truetype');font-weight:500;font-style:normal;}@font-face{font-family:'Roboto';src:local('Roboto Medium Italic'),local('Roboto-MediumItalic'),url('/fonts/roboto/Robotomediumitalic.woff2') format('woff2'),url('/fonts/roboto/Robotomediumitalic.woff') format('woff'),url('/fonts/roboto/Robotomediumitalic.ttf') format('truetype');font-weight:500;font-style:italic;}"]),a=(0,i.createGlobalStyle)(["@font-face{font-family:'Poppins';src:local('Poppins Medium'),local('Poppins-Medium'),url('/fonts/poppins/Poppins-Medium.ttf') format('truetype');font-weight:600;font-style:normal;}@font-face{font-family:'Poppins';src:local('Poppins Medium Italic'),local('Poppins-MediumItalic'),url('/fonts/poppins/Poppins-MediumItalic.ttf') format('truetype');font-weight:600;font-style:italic;}"]),s=(0,i.createGlobalStyle)(["@font-face{font-family:'Open Sans';src:local('Open Sans'),local('Open-Sans'),url('/fonts/open_sans/OpenSans-Regular.ttf') format('truetype');font-weight:400;font-style:normal;}@font-face{font-family:'Open Sans';src:local('Open Sans Italic'),local('Open-SansItalic'),url('/fonts/open_sans/OpenSans-Italic.ttf') format('truetype');font-weight:400;font-style:italic;}"]),l=(0,i.createGlobalStyle)(["@font-face{font-family:'Arima Madurai';src:local('Arima Madurai'),local('Arima-Madurai'),url('/fonts/arima_madurai/ArimaMadurai-ExtraBold.ttf') format('truetype');font-weight:800;font-style:Extrabold;}"])},78237:function(t,e){var n=function(){var t=[];return function(){for(var e=Math.floor(1e8*Math.random());;){if(!t.includes(e))return t.push(e),e;e=Math.floor(1e8*Math.random())}}}();e.Z=n},51325:function(t,e){e.Z=function(t){window.location.href="".concat(t)}},46454:function(t,e,n){n.r(e),e.default={src:"/_next/static/media/bell.693be5cd.svg",height:16,width:14}},2015:function(t,e,n){n.r(e),e.default={src:"/_next/static/media/clock.b1f36399.svg",height:23,width:25}},53639:function(t,e,n){n.r(e),e.default={src:"/_next/static/media/help.7fa47deb.svg",height:24,width:23}},95352:function(t,e,n){n.r(e),e.default={src:"/_next/static/media/home.67ba1d9f.svg",height:24,width:24}},24636:function(t,e,n){n.r(e),e.default={src:"/_next/static/media/message.004210f9.svg",height:17,width:23}},16399:function(t,e,n){n.r(e),e.default={src:"/_next/static/media/sheet.58b902b2.svg",height:24,width:20}}}]);