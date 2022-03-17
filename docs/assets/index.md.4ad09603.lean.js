import{d as v,r as o,u as f,o as b,w as _,a as g,c as h,b as m,m as q,e as w,f as c,g as u,h as s,i as k}from"./app.2763026c.js";const i=v({props:{open:Boolean,inline:Boolean},setup(r){const t=r,a=o(null),p=o(!1),l=f();function d(){!(a!=null&&a.value)||(t.open?a.value.show():a.value.close())}function n(){!(a!=null&&a.value)||(t.open?a.value.showModal():a.value.close())}return b(()=>{_(()=>{t.open!==p.value&&(t.inline?d():n(),p.value=t.open)})}),(e,V)=>(g(),h("dialog",q({ref_key:"dialog",ref:a,class:"v-native-dialog"},w(l)),[m(e.$slots,"default")],16))}}),T=k("",15),C=s("p",null,"This is a native dialog with a vue wrapper",-1),x=k("",4),y=s("p",null,"This is a native dialog with a vue wrapper and a backdrop behind",-1),A=k("",4),E=s("p",null,"This is a native dialog with another dialog inside",-1),O=s("p",null,"The other one",-1),S=k("",4),P='{"title":"Vue Native Dialog","description":"","frontmatter":{},"headers":[{"level":2,"title":"About","slug":"about"},{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Inline dialog","slug":"inline-dialog"},{"level":3,"title":"Backdrop dialog","slug":"backdrop-dialog"},{"level":3,"title":"Dialog inside another dialog","slug":"dialog-inside-another-dialog"},{"level":2,"title":"Github","slug":"github"}],"relativePath":"index.md"}',D={},$=Object.assign(D,{setup(r){const t=o(!1),a=o(!1),p=o(!1),l=o(!1);return(d,n)=>(g(),h("div",null,[T,c(i,{inline:"",open:t.value,style:{"z-index":"9"}},{default:u(()=>[C,s("button",{onClick:n[0]||(n[0]=e=>t.value=!1)}," Close ")]),_:1},8,["open"]),s("div",null,[s("button",{onClick:n[1]||(n[1]=e=>t.value=!0)}," Open inline dialog ")]),x,c(i,{open:a.value,style:{"z-index":"9"}},{default:u(()=>[y,s("button",{onClick:n[2]||(n[2]=e=>a.value=!1)}," Close ")]),_:1},8,["open"]),s("div",null,[s("button",{onClick:n[3]||(n[3]=e=>a.value=!0)}," Open dialog ")]),A,c(i,{open:p.value},{default:u(()=>[E,s("button",{onClick:n[4]||(n[4]=e=>p.value=!1)}," Close "),s("button",{onClick:n[5]||(n[5]=e=>l.value=!0)}," Open embed dialog "),c(i,{open:l.value},{default:u(()=>[O,s("button",{onClick:n[6]||(n[6]=e=>l.value=!1)}," Close ")]),_:1},8,["open"])]),_:1},8,["open"]),s("div",null,[s("button",{onClick:n[7]||(n[7]=e=>p.value=!0)}," Open dialog with another inside ")]),S]))}});export{P as __pageData,$ as default};
