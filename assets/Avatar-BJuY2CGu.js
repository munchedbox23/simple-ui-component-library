import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{r as n}from"./index-CTjT7uj6.js";import{d as t}from"./styled-components.browser.esm-CkoGXpq8.js";import{m as c}from"./motion-BDu5tg2V.js";const p={sm:"height: 2rem; width: 2rem;",md:"height: 3rem; width: 3rem;",lg:"height: 4rem; width: 4rem;"},h={true:"border-radius: 0;",false:"border-radius: 9999px;"},b={true:"border: 0;",false:"border: 2px solid #007ac0;"},v=t.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  overflow: hidden;
  ${({size:e})=>p[e]}
  ${({square:e})=>h[e?"true":"false"]}
  ${({noBorder:e})=>b[e?"true":"false"]}
`,x=t.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,s=n.forwardRef(({alt:e="",noBorder:d=!1,size:o="md",square:l=!1,src:r="",children:i,className:u,...f},m)=>a.jsx(v,{ref:m,"data-testid":"avatar",className:u,size:o,square:l,noBorder:d,...f,children:r?a.jsx(x,{src:r,alt:e}):i}));c(s);s.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{alt:{defaultValue:{value:'""',computed:!1},required:!1},noBorder:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},square:{defaultValue:{value:"false",computed:!1},required:!1},src:{defaultValue:{value:'""',computed:!1},required:!1}}};export{s as A};
