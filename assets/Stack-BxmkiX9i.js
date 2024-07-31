import{j as l}from"./jsx-runtime-Cw0GR0a5.js";import{r as m}from"./index-CTjT7uj6.js";import{d as f}from"./styled-components.browser.esm-CkoGXpq8.js";import{m as d}from"./motion-BDu5tg2V.js";const p={none:"",sm:"gap: 0.5rem;",md:"gap: 1rem;",lg:"gap: 1.5rem;",xl:"gap: 2rem;"},y={row:"flex-direction: row;",column:"flex-direction: column;"},u={start:"align-items: flex-start;",center:"align-items: center;",end:"align-items: flex-end;",stretch:"align-items: stretch;"},x={start:"justify-content: flex-start;",center:"justify-content: center;",end:"justify-content: flex-end;",between:"justify-content: space-between;",around:"justify-content: space-around;",evenly:"justify-content: space-evenly;"},g=f.div`
  display: flex;
  ${({spacing:t="none"})=>p[t]}
  ${({direction:t="column"})=>y[t]}
  ${({align:t="stretch"})=>u[t]}
  ${({justify:t="start"})=>x[t]}
`,e=m.forwardRef(({children:t,spacing:n,direction:s,align:o,justify:r,className:c,...i},a)=>l.jsx(g,{ref:a,spacing:n,direction:s,align:o,justify:r,className:c,...i,children:t}));d(e);e.__docgenInfo={description:"",methods:[],displayName:"Stack"};export{e as S};
