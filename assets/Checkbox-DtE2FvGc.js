import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{d as o}from"./styled-components.browser.esm-CkoGXpq8.js";import{m as c}from"./motion-BDu5tg2V.js";const u={sm:"width: 0.75rem; height: 0.75rem;",md:"width: 1rem; height: 1rem;",lg:"width: 1.5rem; height: 1.5rem;"},t={default:"background-color: #3b82f6;",primary:"background-color: #10b981;",secondary:"background-color: #ef4444;"},f=o.input`
  appearance: none;
  border: 1px solid #d1d5db; // gray-300
  border-radius: 0.25rem;
  outline: none;
  ${({size:e="md"})=>u[e]}
  ${({variant:e="default"})=>t[e]}
  &:checked {
    ${({variant:e="default"})=>t[e]}
  }
`,p=o.label`
  display: inline-flex;
  align-items: center;
`,h=o.span`
  margin-left: 0.5rem;
  color: #374151; // gray-700
`,a=m.forwardRef(({label:e,size:d="md",variant:s="default",className:l,...i},n)=>r.jsxs(p,{children:[r.jsx(f,{ref:n,type:"checkbox",size:d,variant:s,className:l,...i}),e&&r.jsx(h,{children:e})]}));c(a);a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{size:{defaultValue:{value:'"md"',computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};export{a as C};
