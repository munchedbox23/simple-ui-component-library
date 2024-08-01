import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{d as o}from"./styled-components.browser.esm-CkoGXpq8.js";import"./Checkbox-DtE2FvGc.js";import{I as d}from"./Input-Dv408uZg.js";import"./Avatar-BJuY2CGu.js";import{B as l}from"./Button-Dx4DtVGu.js";import{T as c}from"./Text-BwWwD3Xy.js";import"./Select-Cmb0Yaeh.js";import{S as u}from"./Stack-BxmkiX9i.js";import"./Table-BfjM7euF.js";import"./Hourglass-DqAJOQPh.js";import"./index-CTjT7uj6.js";import"./motion-BDu5tg2V.js";import"./createSvgIcon-BU3noEfY.js";import"./extends--LBhUn2A.js";import"./InputBase-rp_DHMN_.js";import"./inheritsLoose-CMy1E8oj.js";import"./index-9r8iugjR.js";const g=o.form`
  border: 2px solid #d1d5db;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`,r=o(c)`
  margin-bottom: 0.5rem;
`,m=o(d)`
  margin-bottom: 1rem;
`,x=o(l)`
  margin-top: 0.5rem;
`,p=({onSubmit:s})=>e.jsx(g,{onSubmit:s,children:e.jsxs(u,{direction:"column",align:"center",justify:"center",children:[e.jsx(r,{as:"h2",weight:"bold",align:"center",size:"3xl",children:"Login"}),e.jsx(r,{as:"span",emphasis:"low",size:"sm",align:"center",children:"Please enter your credentials to login"}),e.jsx(r,{as:"label",htmlFor:"username",size:"sm",weight:"medium",children:"Username"}),e.jsx(m,{type:"text",id:"username",placeholder:"Username"}),e.jsx(r,{as:"label",htmlFor:"password",size:"sm",weight:"medium",children:"Password"}),e.jsx(m,{id:"password",type:"password",placeholder:"Password"}),e.jsx(x,{size:"md",type:"submit",variant:"primary",children:"Sign in"})]})});p.__docgenInfo={description:"",methods:[],displayName:"Form",props:{onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: FormEvent<HTMLFormElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLFormElement"}],raw:"FormEvent<HTMLFormElement>"},name:"e"}],return:{name:"void"}}},description:""}}};const M={title:"Examples/Form",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onSubmit:{action:"submitted"}}},t={args:{onSubmit:s=>{s.preventDefault(),console.log("Form submitted")}}};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    onSubmit: e => {
      e.preventDefault();
      console.log("Form submitted");
    }
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,M as default};
