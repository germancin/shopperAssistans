"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209],{1209:function(e,n,t){t.d(n,{Z:function(){return R}});var r=t(3366),o=t(7462),i=t(7294),a=t(4780),l=t(9420),s=t(3703),u=t(9948),c=t(2690),d=t(5893);function f(e){return e.substring(2).toLowerCase()}function m(e){let{children:n,disableReactTree:t=!1,mouseEvent:r="onClick",onClickAway:o,touchEvent:a="onTouchEnd"}=e,l=i.useRef(!1),m=i.useRef(null),g=i.useRef(!1),p=i.useRef(!1);i.useEffect(()=>(setTimeout(()=>{g.current=!0},0),()=>{g.current=!1}),[]);let h=(0,s.Z)(n.ref,m),v=(0,u.Z)(e=>{let n=p.current;p.current=!1;let r=(0,c.Z)(m.current);if(g.current&&m.current&&(!("clientX"in e)||!(r.documentElement.clientWidth<e.clientX)&&!(r.documentElement.clientHeight<e.clientY))){if(l.current){l.current=!1;return}(e.composedPath?e.composedPath().indexOf(m.current)>-1:!r.documentElement.contains(e.target)||m.current.contains(e.target))||!t&&n||o(e)}}),Z=e=>t=>{p.current=!0;let r=n.props[e];r&&r(t)},E={ref:h};return!1!==a&&(E[a]=Z(a)),i.useEffect(()=>{if(!1!==a){let e=f(a),n=(0,c.Z)(m.current),t=()=>{l.current=!0};return n.addEventListener(e,v),n.addEventListener("touchmove",t),()=>{n.removeEventListener(e,v),n.removeEventListener("touchmove",t)}}},[v,a]),!1!==r&&(E[r]=Z(r)),i.useEffect(()=>{if(!1!==r){let e=f(r),n=(0,c.Z)(m.current);return n.addEventListener(e,v),()=>{n.removeEventListener(e,v)}}},[v,r]),(0,d.jsx)(i.Fragment,{children:i.cloneElement(n,E)})}var g=t(437),p=t(948),h=t(2734),v=t(1657),Z=t(8216),E=t(6514),b=t(8206),k=t(1588),w=t(4867);function x(e){return(0,w.Z)("MuiSnackbar",e)}(0,k.Z)("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);let C=["onEnter","onExited"],L=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],O=e=>{let{classes:n,anchorOrigin:t}=e,r={root:["root",`anchorOrigin${(0,Z.Z)(t.vertical)}${(0,Z.Z)(t.horizontal)}`]};return(0,a.Z)(r,x,n)},y=(0,p.ZP)("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:t}=e;return[n.root,n[`anchorOrigin${(0,Z.Z)(t.anchorOrigin.vertical)}${(0,Z.Z)(t.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:n})=>(0,o.Z)({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},"top"===n.anchorOrigin.vertical?{top:8}:{bottom:8},"left"===n.anchorOrigin.horizontal&&{justifyContent:"flex-start"},"right"===n.anchorOrigin.horizontal&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:(0,o.Z)({},"top"===n.anchorOrigin.vertical?{top:24}:{bottom:24},"center"===n.anchorOrigin.horizontal&&{left:"50%",right:"auto",transform:"translateX(-50%)"},"left"===n.anchorOrigin.horizontal&&{left:24,right:"auto"},"right"===n.anchorOrigin.horizontal&&{right:24,left:"auto"})}));var R=i.forwardRef(function(e,n){let t=(0,v.Z)({props:e,name:"MuiSnackbar"}),a=(0,h.Z)(),s={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{action:c,anchorOrigin:{vertical:f,horizontal:p}={vertical:"bottom",horizontal:"left"},autoHideDuration:Z=null,children:k,className:w,ClickAwayListenerProps:x,ContentProps:R,disableWindowBlurListener:S=!1,message:M,open:P,TransitionComponent:T=E.Z,transitionDuration:j=s,TransitionProps:{onEnter:z,onExited:N}={}}=t,B=(0,r.Z)(t.TransitionProps,C),_=(0,r.Z)(t,L),F=(0,o.Z)({},t,{anchorOrigin:{vertical:f,horizontal:p},autoHideDuration:Z,disableWindowBlurListener:S,TransitionComponent:T,transitionDuration:j}),I=O(F),{getRootProps:A,onClickAway:D}=function(e={}){let{autoHideDuration:n=null,disableWindowBlurListener:t=!1,onClose:r,open:a,resumeHideDuration:l}=e,s=i.useRef();i.useEffect(()=>{if(a)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){e.defaultPrevented||"Escape"!==e.key&&"Esc"!==e.key||null==r||r(e,"escapeKeyDown")}},[a,r]);let c=(0,u.Z)((e,n)=>{null==r||r(e,n)}),d=(0,u.Z)(e=>{r&&null!=e&&(clearTimeout(s.current),s.current=setTimeout(()=>{c(null,"timeout")},e))});i.useEffect(()=>(a&&d(n),()=>{clearTimeout(s.current)}),[a,n,d]);let f=()=>{clearTimeout(s.current)},m=i.useCallback(()=>{null!=n&&d(null!=l?l:.5*n)},[n,l,d]),p=e=>n=>{let t=e.onBlur;null==t||t(n),m()},h=e=>n=>{let t=e.onFocus;null==t||t(n),f()},v=e=>n=>{let t=e.onMouseEnter;null==t||t(n),f()},Z=e=>n=>{let t=e.onMouseLeave;null==t||t(n),m()};return i.useEffect(()=>{if(!t&&a)return window.addEventListener("focus",m),window.addEventListener("blur",f),()=>{window.removeEventListener("focus",m),window.removeEventListener("blur",f)}},[t,m,a]),{getRootProps:(n={})=>{let t=(0,o.Z)({},(0,g._)(e),(0,g._)(n));return(0,o.Z)({role:"presentation"},n,t,{onBlur:p(t),onFocus:h(t),onMouseEnter:v(t),onMouseLeave:Z(t)})},onClickAway:e=>{null==r||r(e,"clickaway")}}}((0,o.Z)({},F)),[W,$]=i.useState(!0),H=(0,l.y)({elementType:y,getSlotProps:A,externalForwardedProps:_,ownerState:F,additionalProps:{ref:n},className:[I.root,w]});return!P&&W?null:(0,d.jsx)(m,(0,o.Z)({onClickAway:D},x,{children:(0,d.jsx)(y,(0,o.Z)({},H,{children:(0,d.jsx)(T,(0,o.Z)({appear:!0,in:P,timeout:j,direction:"top"===f?"down":"up",onEnter:(e,n)=>{$(!1),z&&z(e,n)},onExited:e=>{$(!0),N&&N(e)}},B,{children:k||(0,d.jsx)(b.Z,(0,o.Z)({message:M,action:c},R))}))}))}))})},8206:function(e,n,t){t.d(n,{Z:function(){return k}});var r=t(3366),o=t(7462),i=t(7294),a=t(512),l=t(4780),s=t(1796),u=t(948),c=t(1657),d=t(629),f=t(1588),m=t(4867);function g(e){return(0,m.Z)("MuiSnackbarContent",e)}(0,f.Z)("MuiSnackbarContent",["root","message","action"]);var p=t(5893);let h=["action","className","message","role"],v=e=>{let{classes:n}=e;return(0,l.Z)({root:["root"],action:["action"],message:["message"]},g,n)},Z=(0,u.ZP)(d.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>{let n="light"===e.palette.mode?.8:.98,t=(0,s._4)(e.palette.background.default,n);return(0,o.Z)({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(t),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:t,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),E=(0,u.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),b=(0,u.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8});var k=i.forwardRef(function(e,n){let t=(0,c.Z)({props:e,name:"MuiSnackbarContent"}),{action:i,className:l,message:s,role:u="alert"}=t,d=(0,r.Z)(t,h),f=v(t);return(0,p.jsxs)(Z,(0,o.Z)({role:u,square:!0,elevation:6,className:(0,a.Z)(f.root,l),ownerState:t,ref:n},d,{children:[(0,p.jsx)(E,{className:f.message,ownerState:t,children:s}),i?(0,p.jsx)(b,{className:f.action,ownerState:t,children:i}):null]}))})}}]);