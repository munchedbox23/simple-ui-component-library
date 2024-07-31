import{j as n}from"./jsx-runtime-Cw0GR0a5.js";import{r as s}from"./index-CTjT7uj6.js";import{d as i}from"./styled-components.browser.esm-CkoGXpq8.js";import{m as d}from"./motion-BDu5tg2V.js";const c={sm:"padding: 0.5rem 1rem; font-size: 0.875rem;",md:"padding: 1rem 1.5rem; font-size: 1rem;",lg:"padding: 1.2rem 2rem; font-size: 1.125rem;"},m={primary:"background-color: #007ac0; color: white;",secondary:"border: 2px solid #0055cc; color: #0ea5e9; background-color: white;",ghost:"color: #0ea5e9; background-color: white; transition: all 0.3s ease;"},l=i.button`
  width: max-content;
  border-radius: 0.375rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.7s ease;
  border: none;
  ${({size:o})=>c[o]}
  ${({variant:o})=>m[o]}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.6;
  }
`,r=s.forwardRef(({children:o,type:e="button",...t},a)=>n.jsx(l,{ref:a,type:e,...t,children:o}));d(r);r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:'"button"',computed:!1},required:!1}}};export{r as B};
