import{o as c,g as r,h as o,_ as k,d,e as w,f as y,l as b,i as x,F as D,j as V,x as A,s as K,w as M,v as B,H as C,B as F,y as H}from"./index-CSTKgCyW.js";function I(f,u){return c(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"})])}const S={class:"h-screen grid place-content-center place-items-center"},L={class:"col-span-1 bg-white grid gap-14 p-8 rounded-md shadow-lg"},N={class:"grid gap-3"},P={class:"bg-slate-100 mx-auto mb-4 p-8 rounded-full"},j={class:"flex space-x-5 mx-auto"},q=["onUpdate:modelValue","onInput","onKeydown"],E={key:0},O={key:1,class:"sk-chase w-9 h-9 mx-auto"},T={__name:"MFAView",setup(f){const u=d("KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD"),l=d(!1),s=d(["","","","","",""]),v=w.useToast(),p=y(()=>s.value.join("")),m=async()=>{if(!(p.value.length<s.value.length))try{l.value=!0,await F.post("/auth/mfa/verify",{token:p.value,secret:u.value}),l.value=!1,v.open({message:"Bienvenido de nuevo 👋🏽👋🏽👋🏽",type:"success",duration:4e3,pauseOnHover:!0}),H.replace({name:"inicio"})}catch(t){l.value=!1;const e=t.response.data.message;v.open({message:e,type:"error",duration:4e3,pauseOnHover:!0})}},g=(t,e)=>{e.target.value.length===1&&t<s.value.length-1&&document.querySelectorAll("input")[t+1].focus()},h=t=>{s.value[t]===""&&t>0&&document.querySelectorAll("input")[t-1].focus()},_=t=>{const i=t.clipboardData.getData("text").split("").slice(0,6);i.forEach((n,a)=>{s.value[a]=n||""}),document.querySelectorAll("input")[i.length-1].focus(),t.preventDefault()};return(t,e)=>(c(),r("main",S,[o("form",L,[o("div",N,[o("div",P,[b(x(I),{class:"size-20"})]),e[1]||(e[1]=o("h1",{class:"mfa__title text-5xl text-center font-bold"}," Confirma el Código de Autenticación ",-1)),e[2]||(e[2]=o("h2",{class:"mfa__subtitle text-center"}," Introduce el código de 6 dígitos generado en la app de autenticación. ",-1))]),o("div",j,[(c(!0),r(D,null,V(s.value,(i,n)=>M((c(),r("input",{key:n,type:"text",class:"border rounded text-center w-10",maxlength:"1","onUpdate:modelValue":a=>s.value[n]=a,onInput:a=>g(n,a),onPaste:e[0]||(e[0]=a=>_(a)),onKeydown:C(a=>h(n),["backspace"])},null,40,q)),[[B,s.value[n]]])),128))]),o("button",{class:"btn btn-primary flex place-content-center place-items-center",onClick:A(m,["prevent"])},[l.value?(c(),r("div",O,e[3]||(e[3]=[K('<div class="sk-chase-dot" data-v-55fb7fe6></div><div class="sk-chase-dot" data-v-55fb7fe6></div><div class="sk-chase-dot" data-v-55fb7fe6></div><div class="sk-chase-dot" data-v-55fb7fe6></div><div class="sk-chase-dot" data-v-55fb7fe6></div><div class="sk-chase-dot" data-v-55fb7fe6></div>',6)]))):(c(),r("span",E," Verificar código de autenticación "))])])]))}},Z=k(T,[["__scopeId","data-v-55fb7fe6"]]);export{Z as default};