"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9660],{66779:function(e,r,n){var t=n(16835),i=(n(67294),n(82580)),a=n(6235),o=n(85893);r.Z=function(e){var r=e.name,n=(0,i.U$)(r),s=(0,t.Z)(n,3),u=s[0];s[1],s[2];return(0,o.jsx)("div",{children:(0,o.jsx)(a.M,{id:"article_body",init:{height:450,menubar:!1,plugins:"a11ychecker advcode casechange export formatpainter link image code autolink code lists  emoticons",toolbar:"bold italic underline | link image code | alignleft aligncenter alignright emoticons"},onEditorChange:function(e){u.onChange({target:{name:u.name,value:e}})},onBlur:u.onBlur})})}},15077:function(e,r,n){n.d(r,{Z:function(){return p}});var t=n(16835),i=n(98271),a=n(82580),o=n(53918),s=o.default.div.withConfig({displayName:"FieldListstyles__ContentWrapper",componentId:"sc-q6lou5-0"})(["padding:30px 30px 17px 30px;background:#F5F5F5;opacity:0.8;border-radius:5px;display:flex;justify-content:space-between;"]),u=o.default.div.withConfig({displayName:"FieldListstyles__TextFieldWrap",componentId:"sc-q6lou5-1"})(["display:flex;flex-direction:column;"]),c=o.default.div.withConfig({displayName:"FieldListstyles__Text",componentId:"sc-q6lou5-2"})(["font-weight:400;font-size:16px;letter-spacing:0.01em;color:#6f7482;"]),d=o.default.div.withConfig({displayName:"FieldListstyles__ErrorText",componentId:"sc-q6lou5-3"})(["font-size:12px;color:red;padding-top:5px;"]),l=n(85893),p=function(e){var r=e.values,n=e.name,o=(0,a.U$)(n),p=(0,t.Z)(o,3),m=p[0],f=p[1];p[2];return(0,l.jsx)(s,{children:(0,l.jsx)(a.F2,{name:n,render:function(){return r.nutritionValues.map((function(e,r){var t;return(0,l.jsxs)(u,{children:[(0,l.jsx)(c,{children:e.name}),(0,l.jsx)(i.Z,{name:"".concat(n,".").concat(r,".value"),value:e.value,onChange:m.onChange,sx:{width:"170px",backgroundColor:"#F8FAFC"},type:"number",error:Boolean(null===(t=f.error)||void 0===t?void 0:t[r])}),(0,l.jsx)(a.Bc,{name:"".concat(n,".").concat(r,".value"),children:function(e){return(0,l.jsx)(d,{children:e})}})]},r)}))}})})}},32977:function(e,r,n){n.d(r,{Z:function(){return s}});var t=n(16835),i=(n(67294),n(82580)),a=n(98271),o=n(85893),s=function(e){var r=e.name,n=e.placeholder,s=(0,i.U$)(r),u=(0,t.Z)(s,3),c=u[0],d=u[1];u[2];return(0,o.jsx)(a.Z,{name:r,placeholder:n,fullWidth:!0,variant:"outlined",sx:{backgroundColor:"#F8FAFC"},value:c.value,onChange:c.onChange,error:d.touched&&Boolean(d.error),helperText:d.touched&&d.error})}},74688:function(e,r,n){var t=n(16835),i=(n(67294),n(82580)),a=n(86886),o=n(87357),s=n(93946),u=n(98271),c=n(50594),d=n(41687),l=n(85893),p={name:""};r.Z=function(e){var r=e.name,n=(0,i.U$)(r),m=(0,t.Z)(n,3),f=m[0];m[1],m[2];return(0,l.jsx)(i.F2,{name:f.name,render:function(e){return(0,l.jsxs)(a.ZP,{container:!0,item:!0,alignItems:"center",my:2,xs:12,children:[f.value?f.value.map((function(r,n){return(0,l.jsx)(a.ZP,{container:!0,item:!0,direction:"row",alignItems:"center",sx:{mr:1,my:2},xs:5,children:(0,l.jsxs)(o.Z,{sx:{bgColor:"#F5F5F5",borderRadius:1.25},my:2,children:[0===n?null:(0,l.jsx)(a.ZP,{children:(0,l.jsx)(s.Z,{onClick:function(){return e.remove(n)},children:(0,l.jsx)(c.Z,{color:"error"})})}),(0,l.jsxs)(a.ZP,{container:!0,item:!0,direction:"column",sx:{p:3,m:1},children:[(0,l.jsx)(a.ZP,{item:!0,sx:{pb:2},children:(0,l.jsx)(u.Z,{fullWidth:!0,id:f.name,value:f.value.name,name:"ingredients.".concat(n,".name"),placeholder:"Name",onChange:f.onChange,variant:"outlined",sx:{input:{padding:"10px"},bgColor:"#FFF"}})}),(0,l.jsx)(a.ZP,{item:!0,children:(0,l.jsx)(u.Z,{fullWidth:!0,id:f.name,name:"ingredients.".concat(n,".description"),placeholder:"Description",onChange:f.onChange,variant:"outlined",value:f.value.description,sx:{input:{padding:"10px"},bgColor:"#FFF"}})})]})]})},n)})):null,(0,l.jsx)(a.ZP,{container:!0,item:!0,xs:!0,mr:-4,children:(0,l.jsx)(s.Z,{size:"large",onClick:function(){return e.push(p)},children:(0,l.jsx)(d.Z,{fontSize:"large"})})})]})}})}},54538:function(e,r,n){n.d(r,{Z:function(){return F}});var t=n(27812),i=n(59499),a=n(67294),o=n(32512),s=n(41749),u=n(50029),c=n(87794),d=n.n(c),l=n(24489),p=n(22318),m=n(60060),f=n(85893),h=function(e){var r=e.file,n=e.onDelete;return(0,f.jsxs)(s.Z,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,f.jsx)(s.Z,{item:!0,children:r.name}),(0,f.jsx)(s.Z,{item:!0,children:(0,f.jsx)(m.Z,{size:"small",onClick:function(){return n(r)},children:"Delete"})})]})},x=function(e){var r=e.file,n=e.onDelete,t=e.onUpload,i=(0,a.useState)(0),o=i[0],c=i[1],m=function(){var e=(0,u.Z)(d().mark((function e(){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(r,c);case 2:n=e.sent,t(r,n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){m()}),[]),(0,f.jsxs)(s.Z,{item:!0,children:[(0,f.jsx)(h,{file:r,onDelete:n}),(0,f.jsx)(l.Z,{variant:"determinate",value:o}),(0,f.jsxs)(p.Z,{children:[o,"%"]})]})},g=function(e,r){return new Promise((function(n,t){var i=new XMLHttpRequest;i.open("POST","https://api.cloudinary.com/v1_1/demo/image/upload"),i.onload=function(){var e=JSON.parse(i.responseText);n(e.secure_url)},i.onerror=function(e){return t(e)},i.upload.onprogress=function(e){if(e.lengthComputable){var n=e.loaded/e.total*100;r(Math.round(n))}};var a=new FormData;a.append("file",e),a.append("upload_preset","docs_upload_example_us_preset"),i.send(a)}))},Z=n(71423),v=n(75154),b=(0,Z.Z)((function(e){return(0,v.Z)({bar:{backgroundColor:e.palette.error.main}})}))(l.Z),j=function(e){var r=e.file,n=e.onDelete,t=e.errors;return(0,f.jsxs)(f.Fragment,{children:[console.log("error"),(0,f.jsx)(h,{file:r,onDelete:n}),(0,f.jsx)(b,{variant:"determinate",value:100}),t.map((function(e){return(0,f.jsx)(s.Z,{item:!0,children:(0,f.jsx)(p.Z,{color:"error",children:e.message})},e.code)}))]})},_=n(53918),w=_.default.div.withConfig({displayName:"fileUploadstyles__DefaultDropZone",componentId:"sc-a4njsb-0"})(["border-radius:4px;min-height:100px;box-shadow:0px 4px 4px rgba(51,51,51,0.04),0px 4px 16px rgba(51,51,51,0.08);padding:20px;"]);_.default.div.withConfig({displayName:"fileUploadstyles__isDroppingActive",componentId:"sc-a4njsb-1"})(["width:100%;background:#6e41e2;min-height:100px;box-shadow:0px 4px 4px rgba(51,51,51,0.04),0px 4px 16px rgba(51,51,51,0.08);border-radius:4px;"]),_.default.p.withConfig({displayName:"fileUploadstyles__MainParagraph",componentId:"sc-a4njsb-2"})(["font-size:16px;"]),_.default.p.withConfig({displayName:"fileUploadstyles__SecondParagraph",componentId:"sc-a4njsb-3"})(["padding-top:8px;font-size:13px;"]);function y(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function q(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?y(Object(n),!0).forEach((function(r){(0,i.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var C=0;function P(){return C+=1}var F=function(e){e.name;var r=e.updateFileUrl,n=(0,a.useState)([]),i=n[0],u=n[1],c=(0,a.useCallback)((function(e,r){var n=e.map((function(e){return{file:e,errors:[],id:P()}})),i=r.map((function(e){return q(q({},e),{},{id:P()})}));u((function(e){return[].concat((0,t.Z)(e),(0,t.Z)(n),(0,t.Z)(i))}))}),[]),d=function(e){u((function(r){return r.filter((function(r){return r.file!==e}))}))},l=function(e,n){u(function(e,r){return function(n){return n.map((function(n){return n.file===e?q(q({},n),{},{url:r}):n}))}}(e,n)),r(n)},p=(0,o.uI)({onDrop:c,accept:["image/*"],maxSize:1024e4}),m=p.getRootProps,h=p.getInputProps;p.isDragActive;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(s.Z,{item:!0,children:(0,f.jsxs)(w,q(q({},m()),{},{children:[(0,f.jsx)("input",q({},h())),(0,f.jsx)("p",{children:"Drag n drop some files here, or click to select files"}),i.map((function(e,r){return(0,f.jsx)(s.Z,{item:!0,children:e.errors.length?(0,f.jsx)(j,{file:e.file,errors:e.errors,onDelete:d}):(0,f.jsx)(x,{onDelete:d,onUpload:l,file:e.file})},r)}))]}))})})}},89150:function(e,r,n){n.d(r,{F2:function(){return i},J9:function(){return a},CY:function(){return o},CW:function(){return s},Fk:function(){return u},RD:function(){return c},_B:function(){return d},iy:function(){return l}});var t=n(74231),i=t.Ry().shape({email:t.Z_().email("Enter valid email").required("Required"),username:t.Z_().min(5,"User name must be 5 characters or less").required("Required"),password:t.Z_().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{5,20}\S$/,"Password must be more than 5 characters and not exceed 20. Must contain one uppercase, one lowercase, one special character and no spaces").required("Required"),confirmPassword:t.Z_().required("Required").test("password-match","Password must match",(function(e){return this.parent.password===e})),phone:t.Z_().required("Required").matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,"Phone number is not valid ")}),a=t.Ry().shape({username:t.Z_().min(5,"User name must be 5 characters or less").required("Required"),password:t.Z_().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{5,20}\S$/,"Password must be more than 5 characters and not exceed 20. Must contain one uppercase, one lowercase, one special character and no spaces").required("Required"),firstName:t.Z_().required("Required"),lastName:t.Z_().required("Required"),email:t.Z_().email("Enter valid email").required("Required"),phone:t.Z_().required("Required").matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,"Phone number is not valid "),age:t.Rx().required("Required"),gender:t.Z_().required("Required")}),o=t.Ry().shape({wishProducts:t.Z_(),prohibitedProducts:t.Z_(),goal:t.Z_(),quantityMeals:t.Z_()}),s=t.Ry().shape({typeOfProgramm:t.Z_(),numberOfWorkouts:t.Z_(),typeOfTrainings:t.Z_()}),u=t.Ry().shape({username:t.Z_().required("Required"),password:t.Z_().required("Required")}),c=t.Ry({username:t.Z_().required("Username is required"),password:t.Z_().min(6,"Password must be at least 6 characters").max(20,"Password must be at max 20 characters").required("Password is required")}),d=t.Ry({username:t.Z_().min(3,"Admin name must be at least 6 characters").max(20).required(),email:t.Z_().email("Email is invalid").required("Email is required"),password:t.Z_().min(6,"Password must be at least 6 characters").max(20,"Password must be at max 20 characters").required("Password is required"),repeat_password:t.Z_().oneOf([t.iH("password")],"Passwords should match").required("Repeat password is required")}),l=t.Ry({header:t.Z_().required().min(8,"Header should be of minimum 8 characters length"),description:t.Z_().required(),nutritionValues:t.IX().of(t.Ry().shape({value:t.Rx().required("Value required")})),recipe:t.Z_().required()})}}]);