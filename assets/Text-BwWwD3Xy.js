import{j as p}from"./jsx-runtime-Cw0GR0a5.js";import{r as c}from"./index-CTjT7uj6.js";import{d as x}from"./styled-components.browser.esm-CkoGXpq8.js";const d={low:"color: #718096; font-weight: light;"},g={sm:"font-size: 0.875rem;",base:"font-size: 1rem;",lg:"font-size: 1.125rem;",xl:"font-size: 1.25rem;","2xl":"font-size: 1.5rem;","3xl":"font-size: 1.875rem;"},h={thin:"font-weight: 100;",normal:"font-weight: 400;",medium:"font-weight: 500;",semibold:"font-weight: 600;",bold:"font-weight: 700;",black:"font-weight: 900;"},w={left:"text-align: left;",center:"text-align: center;",right:"text-align: right;"},u=x.span`
  width: 100%;
  ${({emphasis:t})=>t&&d[t]}
  ${({size:t})=>t&&g[t]}
  ${({weight:t})=>t&&h[t]}
  ${({align:t})=>t&&w[t]}
  ${({italic:t})=>t&&"font-style: italic;"}
  ${({underline:t})=>t&&"text-decoration: underline; text-underline-offset: 2px;"}
`,y=c.forwardRef(({as:t,align:o,size:n,emphasis:r,italic:s,underline:i,weight:f,className:l,...m},a)=>{const e=t||"span";return e?p.jsx(u,{as:e,ref:a,emphasis:r,size:n,weight:f,align:o,italic:s,underline:i,className:l,...m}):null});y.__docgenInfo={description:"",methods:[],displayName:"Text",props:{ref:{required:!1,tsType:{name:'ReactComponentPropsWithRef["ref"]',raw:'React.ComponentPropsWithRef<C>["ref"]'},description:""}}};export{y as T};
