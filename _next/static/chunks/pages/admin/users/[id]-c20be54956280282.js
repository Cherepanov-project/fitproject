(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{21023:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var a=r(n(64938)),o=n(85893),i=(0,a.default)((0,o.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.Z=i},41733:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var a=r(n(64938)),o=n(85893),i=(0,a.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},77957:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var a=r(n(64938)),o=n(85893),i=(0,a.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=i},64938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(76031)},69661:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(63366),a=n(87462),o=n(67294),i=n(86010),s=n(94780),c=n(11496),u=n(33616),l=n(82066),d=n(85893),f=(0,l.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),p=n(34867);function A(e){return(0,p.Z)("MuiAvatar",e)}(0,n(1588).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const h=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})((({theme:e,ownerState:t})=>(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,a.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]})))),m=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),x=(0,c.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});var v=o.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiAvatar"}),{alt:c,children:l,className:f,component:p="div",imgProps:v,sizes:w,src:Z,srcSet:b,variant:j="circular"}=n,C=(0,r.Z)(n,h);let y=null;const _=function({crossOrigin:e,referrerPolicy:t,src:n,srcSet:r}){const[a,i]=o.useState(!1);return o.useEffect((()=>{if(!n&&!r)return;i(!1);let a=!0;const o=new Image;return o.onload=()=>{a&&i("loaded")},o.onerror=()=>{a&&i("error")},o.crossOrigin=e,o.referrerPolicy=t,o.src=n,r&&(o.srcset=r),()=>{a=!1}}),[e,t,n,r]),a}((0,a.Z)({},v,{src:Z,srcSet:b})),I=Z||b,k=I&&"error"!==_,N=(0,a.Z)({},n,{colorDefault:!k,component:p,variant:j}),E=(e=>{const{classes:t,variant:n,colorDefault:r}=e,a={root:["root",n,r&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(a,A,t)})(N);return y=k?(0,d.jsx)(m,(0,a.Z)({alt:c,src:Z,srcSet:b,sizes:w,ownerState:N,className:E.img},v)):null!=l?l:I&&c?c[0]:(0,d.jsx)(x,{className:E.fallback}),(0,d.jsx)(g,(0,a.Z)({as:p,ownerState:N,className:(0,i.Z)(E.root,f),ref:t},C,{children:y}))}))},76031:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return a.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return i.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return u.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return p},unstable_ClassNameGenerator:function(){return Z},unstable_useEnhancedEffect:function(){return A.Z},unstable_useId:function(){return h.Z},unsupportedProp:function(){return g},useControlled:function(){return m.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return v.Z},useIsFocusVisible:function(){return w.Z}});var r=n(37078),a=n(98216),o=n(49064).Z,i=n(82066),s=n(57144);var c=function(e,t){return()=>null},u=n(71579),l=n(8038),d=n(5340);n(87462);var f=function(e,t){return()=>null},p=n(7960).Z,A=n(58974),h=n(27909);var g=function(e,t,n,r,a){return null},m=n(49299),x=n(2068),v=n(51705),w=n(18791);const Z={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},49299:function(e,t,n){"use strict";var r=n(8925);t.Z=r.Z},27909:function(e,t,n){"use strict";var r=n(57579);t.Z=r.Z},8925:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(67294);function a({controlled:e,default:t,name:n,state:a="value"}){const{current:o}=r.useRef(void 0!==e),[i,s]=r.useState(t);return[o?e:i,r.useCallback((e=>{o||s(e)}),[])]}},57579:function(e,t,n){"use strict";var r;n.d(t,{Z:function(){return s}});var a=n(67294);let o=0;const i=(r||(r=n.t(a,2))).useId;function s(e){if(void 0!==i){const t=i();return null!=e?e:t}return function(e){const[t,n]=a.useState(e),r=e||t;return a.useEffect((()=>{null==t&&(o+=1,n(`mui-${o}`))}),[t]),r}(e)}},32907:function(e,t,n){"use strict";n.d(t,{lE:function(){return s},l1:function(){return c},tD:function(){return u},JS:function(){return l}});var r=n(50029),a=n(87794),o=n.n(a),i=n(28517),s=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZL.get("?size=99");case 2:return t=e.sent,e.abrupt("return",t.data.data.content);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZL.post("/",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZL.put("/",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZL.delete("/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},88659:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});n(67294);var r=n(53918).default.span.withConfig({displayName:"colorfulTegstyles__Tegs",componentId:"sc-1b9celf-0"})(["margin:0;padding:5px 12px;max-height:24px;letter-spacing:0.5px;text-transform:uppercase;background-color:",";color:",";border-radius:",";"],(function(e){return e.backgroundColor}),(function(e){return e.color}),(function(e){return e.brRad})),a=n(85893),o=function(e){var t=e.text,n=e.color,o=void 0===n?"#FFFFFF":n,i=e.brRad,s=void 0===i?"100px":i,c=e.backgroundColor,u=void 0===c?"#29CC97":c;return(0,a.jsx)(r,{color:o,brRad:s,backgroundColor:u,children:t})}},51601:function(e,t,n){"use strict";n.d(t,{l:function(){return a},F:function(){return o}});var r=n(9677),a=["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],o={id:0,username:"",password:"",firstName:"",lastName:"",email:"",phone:"",age:0,gender:"",coach:!1,avatar:r.Z}},96727:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(51929),a=n(50029),o=n(87794),i=n.n(o),s=n(25675),c=n(41664),u=n(69661),l=n(83321),d=n(21023),f=n(41733),p=n(77957),A=n(9677),h=n(88659),g=n(53918),m=(g.default.div.withConfig({displayName:"pageUserstyles__ContentWrapper",componentId:"sc-1n7izwj-0"})(["width:100%;border:1px solid #dfe0eb;border-radius:8px;margin:0 auto;background-color:#ffffff;"]),g.default.div.withConfig({displayName:"pageUserstyles__Footer",componentId:"sc-1n7izwj-1"})(["display:flex;align-items:center;"]),g.default.div.withConfig({displayName:"pageUserstyles__ContentWrapperUser",componentId:"sc-1n7izwj-2"})(["padding:20px;border:1px solid #dfe0eb;border-radius:8px;background-color:#ffffff;"])),x=g.default.h4.withConfig({displayName:"pageUserstyles__TitleHeader",componentId:"sc-1n7izwj-3"})(["font-weight:400;font-size:21px;line-height:24px;color:#252733;"]),v=g.default.div.withConfig({displayName:"pageUserstyles__UsersContainer",componentId:"sc-1n7izwj-4"})(["display:flex;align-items:center;border-top:1px solid #dfe0eb;border-bottom:1.5px solid #dfe0eb;height:80px;"]),w=g.default.p.withConfig({displayName:"pageUserstyles__UserName",componentId:"sc-1n7izwj-5"})(["font-weight:700;font-size:21px;line-height:24px;color:#6e41e2;"]),Z=g.default.h3.withConfig({displayName:"pageUserstyles__Title",componentId:"sc-1n7izwj-6"})(["font-weight:700;border-bottom:1px solid #dfe0eb;padding:15px 0;margin:0;"]),b=g.default.div.withConfig({displayName:"pageUserstyles__InfoItem",componentId:"sc-1n7izwj-7"})(["display:flex;align-items:center;border-bottom:1px solid #dfe0eb;"]),j=g.default.p.withConfig({displayName:"pageUserstyles__TextInfo",componentId:"sc-1n7izwj-8"})(["width:150px;color:rgba(17,17,17,0.48);line-height:35px;"]),C=g.default.div.withConfig({displayName:"pageUserstyles__BtnContainer",componentId:"sc-1n7izwj-9"})(["display:flex;padding-top:20px;"]),y=(g.default.a.withConfig({displayName:"pageUserstyles__StyledLink",componentId:"sc-1n7izwj-10"})(["text-decoration:none;color:green;"]),n(67294)),_=n(32907),I=n(11163),k=n(51601),N=n(96641),E=n(85893),z=function(e){var t=(0,I.useRouter)(),n=(0,y.useState)(k.F),r=n[0],o=n[1];(0,y.useEffect)((function(){var e=(0,N.h)(decodeURI(window.location.search)).data;o((function(){return JSON.parse(e)}))}),[]);var g=function(){var e=(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_.JS)(r.id);case 2:e.sent,t.back();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,E.jsxs)(m,{children:[(0,E.jsx)(x,{children:"(Role) Profile"}),(0,E.jsxs)(v,{children:[(0,E.jsx)(u.Z,{sx:{height:"50px",width:"50px",marginRight:"10px"},children:(0,E.jsx)(s.default,{src:A.Z,alt:"avatar"})}),(0,E.jsx)(w,{children:r.username})]}),(0,E.jsx)(Z,{children:"User information"}),(0,E.jsxs)("div",{className:"InfoList",children:[(0,E.jsxs)(b,{children:[(0,E.jsx)(j,{children:"Name"}),(0,E.jsx)("span",{children:r.firstName?r.firstName+r.lastName:"Name is not specified"})]}),(0,E.jsxs)(b,{children:[(0,E.jsx)(j,{children:"Email"}),(0,E.jsx)("span",{children:r.email?r.email:"Email is not specified"})]}),(0,E.jsxs)(b,{children:[(0,E.jsx)(j,{children:"Phone"}),(0,E.jsx)("span",{children:r.phone?r.phone:"Phone is not specified"})]}),(0,E.jsxs)(b,{children:[(0,E.jsx)(j,{children:"Age"}),(0,E.jsx)("span",{children:r.age?r.age:"Age is not specified"})]}),(0,E.jsxs)(b,{children:[(0,E.jsx)(j,{children:"Gender"}),(0,E.jsx)("span",{children:r.gender?r.gender:"Gender is not specified"})]}),(0,E.jsxs)(b,{children:[(0,E.jsx)(j,{children:"Role"}),r.coach?(0,E.jsx)(h.Z,{backgroundColor:"#F12B2C",text:"admin"}):(0,E.jsx)(h.Z,{text:"user"})]})]}),(0,E.jsxs)(C,{children:[(0,E.jsx)(c.default,{href:"/admin/users/",passHref:!0,children:(0,E.jsx)(l.Z,{variant:"outlined",startIcon:(0,E.jsx)(d.Z,{}),children:"Back"})}),(0,E.jsx)(l.Z,{onClick:g,sx:{margin:"0 30px"},variant:"outlined",color:"error",startIcon:(0,E.jsx)(f.Z,{}),children:"delete"}),(0,E.jsx)(c.default,{href:{pathname:"/admin/users/edit-form/".concat(r.id),query:{data:JSON.stringify(r)}},passHref:!0,children:(0,E.jsx)(l.Z,{variant:"outlined",startIcon:(0,E.jsx)(p.Z,{}),color:"success",children:"Edit"})})]})]})},M=(0,r.X)((function(){return(0,E.jsx)(z,{})}))},96641:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});var r=n(16835),a=function(e){return e?(/^[?#]/.test(e)?e.slice(1):e).split("&").reduce((function(e,t){var n=t.split("="),a=(0,r.Z)(n,2),o=a[0],i=a[1];return e[o]=i?decodeURIComponent(i.replace(/\+/g," ")):"",e}),{}):{}}},35300:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users/[id]",function(){return n(96727)}])},9677:function(e,t){"use strict";t.Z={src:"/_next/static/media/avatarUser.c912d1b9.jpg",height:44,width:44,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAowF//8QAHBAAAgICAwAAAAAAAAAAAAAAAgMEEQABMkFx/9oACAEBAAE/ABJJTWQwYsiCrrrdcfc//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECMnL/2gAIAQIBAT8Ai7aP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJCcv/aAAgBAwEBPwBpyf/Z"}},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},function(e){e.O(0,[1144,4135,2874,6417,1929,9774,2888,179],(function(){return t=35300,e(e.s=t);var t}));var t=e.O();_N_E=t}]);