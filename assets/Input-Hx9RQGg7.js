import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{b as y,r as d}from"./index-CTjT7uj6.js";import{C as w,a as j,c as C,i as f}from"./createSvgIcon-COlC2yWg.js";import{c as S,d as P,i as E,o as M,a as R,s as q,u as N,b as O,e as $,f as z,g as F,h as V,I as k}from"./InputBase-BFtnHH_i.js";import{d as a}from"./styled-components.browser.esm-CkoGXpq8.js";import{m}from"./motion-BDu5tg2V.js";function D(e,t){return()=>null}function G(e,t){return()=>null}function T(e,t,i,u,l){return null}const A={configure:e=>{w.configure(e)}},B=Object.freeze(Object.defineProperty({__proto__:null,capitalize:j,createChainedFunction:S,createSvgIcon:C,debounce:P,deprecatedPropType:D,isMuiElement:E,ownerDocument:M,ownerWindow:R,requirePropFactory:G,setRef:q,unstable_ClassNameGenerator:A,unstable_useEnhancedEffect:N,unstable_useId:O,unsupportedProp:T,useControlled:$,useEventCallback:z,useForkRef:F,useIsFocusVisible:V},Symbol.toStringTag,{value:"Module"}));var n={},o={};const L=y(B);var p;function v(){return p||(p=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=L}(o)),o}var W=f;Object.defineProperty(n,"__esModule",{value:!0});var b=n.default=void 0,Y=W(v()),H=r;b=n.default=(0,Y.default)((0,H.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility");var s={},J=f;Object.defineProperty(s,"__esModule",{value:!0});var h=s.default=void 0,K=J(v()),Q=r;h=s.default=(0,K.default)((0,Q.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff");const U=a.div`
  position: relative;
  width: max-content;
  height: 2.5rem;
`,X=a(k)`
  && {
    width: 100%;
    outline: none;
    border-radius: ${({variant:e})=>e==="rounded"?"0.5rem":"0"};
    &::before,
    &::after {
      content: none !important;
    }

    input {
      width: 100%;
      border-radius: inherit;
      padding: 5px 15px 5px 15px;
      border: 2px solid #091e4224;
      line-height: 20px;
      outline: none;
      text-overflow: ellipsis;
      background-color: rgb(240, 242, 245);
      font-size: 1rem;
      transition: border 0.6s ease;

      &:focus {
        border-color: #007ac0;
      }
    }
  }
`,Z=a(m.div)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  z-index: 100px;
  right: 7px;
  transform: translateY(-50%);
  color: var(--steel-gray---600);
`,x=d.forwardRef(({className:e,type:t,variant:i="rounded",...u},l)=>{const[c,g]=d.useState(!1),_=()=>{g(I=>!I)};return r.jsxs(U,{children:[r.jsx(X,{ref:l,type:t==="password"?c?"text":"password":t,className:e,variant:i,...u}),t==="password"&&r.jsx(Z,{onClick:_,initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:.5},children:c?r.jsx(b,{style:{width:"20px",height:"20px",color:"gray"}}):r.jsx(h,{style:{width:"20px",height:"20px",color:"gray"}})})]})});m(x);x.__docgenInfo={description:"",methods:[],displayName:"Input",props:{variant:{defaultValue:{value:'"rounded"',computed:!1},required:!1}}};export{x as I};
