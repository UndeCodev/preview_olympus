import{d,E as f,e as g,g as a,h as s,w as k,v as y,n as w,i as c,F as h,j as E,k as $,s as F,x as _,q as R,o as t,t as S,B as V}from"./index-BSOmwl3O.js";import{_ as M}from"./undraw_mailbox_re_dvds-D0cFtK3L.js";import{c as v,r as j,e as q,u as C}from"./index-BSA5OD9w.js";const N={class:"form-group"},B={key:0},P={type:"submit",class:"btn btn-primary"},T={key:0},D={key:1,class:"sk-chase w-8 h-8 mx-auto"},z={key:1,class:"bg-white shadow p-8 max-w-4xl text-center mx-8"},H={class:"text-slate-700"},U={__name:"SendEmailResetPasswordPage",setup(I){const i=d(""),u=d(!0),n=d(!1),m=f("inputEmail"),x={emailForm:{$autoDirty:!0,required:v.withMessage("Este campo es obligatorio",j),email:v.withMessage("Correo electrónico inválido",q)}},o=C(x,{emailForm:i}),p=g.useToast(),b=async()=>{if(o.value.$touch(),!o.value.$invalid)try{n.value=!0;const{status:l,data:e}=await V.post("/auth/send-password-reset-instructions",{email:i.value});if(l!==200)return;p.open({message:e.message,type:"success",duration:4e3,pauseOnHover:!0}),u.value=!1,n.value=!1}catch(l){n.value=!1;const e=l.response.data.message;m.value.focus(),p.open({message:e,type:"error",duration:4e3,pauseOnHover:!0})}};return(l,e)=>u.value?(t(),a("form",{key:0,class:"grid gap-8 max-w-3xl mx-4 bg-white shadow p-8 rounded-sm",onSubmit:_(b,["prevent"])},[e[4]||(e[4]=s("div",{class:"grid gap-4"},[s("h1",{class:"text-4xl text-slate-800 font-semibold"},"Recuperar contraseña"),s("p",{class:"text-slate-700"}," Ingresa tu correo electrónico para que te enviemos las instrucciones de cómo restablecer tu contraseña. Recibirás un enlace para crear una nueva contraseña que será válido por 15 minutos. ")],-1)),s("div",N,[e[2]||(e[2]=s("label",{for:"email"},"Correo electrónico:",-1)),k(s("input",{type:"email",class:w(["form-control",{"form-control--error":c(o).emailForm.$error}]),placeholder:"janedoe@outlook.com","onUpdate:modelValue":e[0]||(e[0]=r=>i.value=r),ref_key:"inputEmail",ref:m,id:"email"},null,2),[[y,i.value]]),c(o).emailForm.$error?(t(),a("span",B,[(t(!0),a(h,null,E(c(o).emailForm.$errors,r=>(t(),a("p",{key:r.$uid,class:"text-error"},S(r.$message),1))),128))])):$("",!0)]),s("button",P,[n.value?(t(),a("div",D,e[3]||(e[3]=[F('<div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div>',6)]))):(t(),a("span",T," Enviar instrucciones "))])],32)):(t(),a("div",z,[e[6]||(e[6]=s("img",{src:M,alt:"Mailbox",class:"size-60 mx-auto mb-4"},null,-1)),e[7]||(e[7]=s("h1",{class:"text-3xl text-slate-900 font-semibold mb-3"},"Revisa tu bandeja de entrada",-1)),e[8]||(e[8]=s("p",{class:"text-slate-700 mb-12"}," En unos momentos recibirás un correo con las instrucciones para restablecer tu contraseña. Si no lo ves en tu bandeja de entrada, revisa también la carpeta de spam o correo no deseado. ",-1)),s("p",H,[e[5]||(e[5]=R(" ¿No recibiste ningún correo electrónico?, revisa tu bandeja de spam o ")),s("span",{class:"text-link cursor-pointer",onClick:e[1]||(e[1]=r=>u.value=!0)},"intenta con otro correo electrónico")])]))}};export{U as default};
