import{d as u,b as q,f as N,e as O,a as R,y as $,g as c,h as e,w as y,p as _,n as d,i as l,c as g,F as C,j as x,k as z,l as F,m as G,T,s as Z,x as j,G as H,B as M,o as r,t as p,A as W,z as Y}from"./index-QQNkQ_GA.js";import{c as m,r as I,s as J,u as K}from"./index-Hc6UlUvy.js";import{r as S}from"./EyeIcon-BkCCf06Y.js";import{r as V}from"./EyeSlashIcon-CCIpjh9g.js";const Q="/preview_olympus/assets/Olympus-GYM-Logo-CBsmDC7r.png",X={class:"form-group"},ss={class:"password-container"},es=["type"],as={key:0},os={class:"strength-meter mb-8"},rs={class:"form-group"},ts={class:"password-container"},ns=["type"],ls={key:0},is={type:"submit",class:"btn btn-primary mt-3"},cs={key:0},us={key:1,class:"sk-chase w-8 h-8 mx-auto"},fs={__name:"ResetPasswordPage",setup(ds){const A=m.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{12,}$/),h=u(""),w=u(!1),t=q({newPassword:"",confirmPassword:""}),o=u({lowercaseUppercase:!1,number:!1,specialChar:!1,minLength:!1}),b=u(""),P=u(0),v=u(!1),f=u(!1),B={newPassword:{$autoDirty:!0,required:m.withMessage("Este campo es obligatorio",I),password:m.withMessage("Por favor agrega todos los carácteres necesarios.",A)},confirmPassword:{$autoDirty:!0,required:m.withMessage("Este campo es obligatorio",I),sameAs:m.withMessage("Las contraseñas no coinciden",J(N(()=>t.newPassword)))}},i=K(B,t),k=O.useToast(),L=H();R(()=>{if(h.value=L.query.token.toString(),h.value.length<20)return $.replace("inicio-sesion")});const D=()=>{const a=t.newPassword;o.value.lowercaseUppercase=/[a-z]/.test(a)&&/[A-Z]/.test(a),o.value.number=/\d/.test(a),o.value.specialChar=/[!@#$%^&*]/.test(a),o.value.minLength=a.length>=12;const s=Object.values(o.value).filter(Boolean).length;P.value=s/4*100},U=async()=>{if(!(!t.newPassword||i.value.newPassword.$error))try{const a=await M.post("/auth/check-pswd",{password:t.newPassword});console.log(a);const s=a.data==="Comprometida";b.value=s?"Contraseña comprometida, por favor utiliza otra.":""}catch(a){console.error("Error verificando la contraseña:",a),b.value="Error verificando la contraseña"}},E=async()=>{if(i.value.$touch(),!i.value.$invalid)try{w.value=!0;const{status:a,data:s}=await M.put("/auth/reset-password",{newPassword:t.newPassword},{params:{token:h.value}});if(a!==200)return;k.open({message:s.message,type:"success",duration:4e3,pauseOnHover:!0}),w.value=!1,$.replace({name:"inicio-sesion"})}catch(a){const s=a.response.data.message;k.open({message:s,type:"error",duration:4e3,pauseOnHover:!0}),w.value=!1}};return(a,s)=>(r(),c("form",{onSubmit:j(E,["prevent"]),class:"grid gap-6 bg-white shadow p-8 rounded-sm max-w-xl"},[s[7]||(s[7]=e("div",{class:"form-information mb-3"},[e("img",{src:Q,alt:"Logo Olympus GYM",class:"size-40 bg-slate-900 rounded-full mb-6"}),e("h1",{class:"text-3xl font-semibold mb-3 text-slate-900"},"Crea una contraseña nueva"),e("p",{class:"text-slate-600"}," Ingresa una nueva contraseña para tu cuenta. Asegúrate de que sea segura y fácil de recordar. ")],-1)),e("div",X,[s[4]||(s[4]=e("label",{for:"password"},"Contraseña nueva:",-1)),e("div",ss,[y(e("input",{type:v.value?"text":"password",class:d([{"form-control--error":l(i).newPassword.$error},"form-control"]),placeholder:"Introduce tu nueva contraseña","onUpdate:modelValue":s[0]||(s[0]=n=>t.newPassword=n),onInput:D,onBlur:U,autocomplete:"new-password"},null,42,es),[[_,t.newPassword,void 0,{trim:!0}]]),e("button",{type:"button",onClick:s[1]||(s[1]=n=>v.value=!v.value),class:"toggle-btn bg-blue-100"},[v.value?(r(),g(l(V),{key:1,class:"icon-password size-8"})):(r(),g(l(S),{key:0,class:"icon-password size-8"}))])]),l(i).newPassword.$error?(r(),c("span",as,[(r(!0),c(C,null,x(l(i).newPassword.$errors,n=>(r(),c("p",{key:n.$uid,class:"text-error"},p(n.$message),1))),128))])):z("",!0),F(T,null,{default:G(()=>[y(e("div",null,[e("div",os,[e("div",{class:"strength-meter-fill",style:Y({width:P.value+"%"})},null,4)]),e("ul",null,[e("li",{class:d({passed:o.value.lowercaseUppercase})},p(o.value.lowercaseUppercase?"✔":"✖️")+" Incluye mayúsculas y minúsculas ",3),e("li",{class:d({passed:o.value.number})},p(o.value.number?"✔":"✖️")+" Incluye un número ",3),e("li",{class:d({passed:o.value.specialChar})},p(o.value.specialChar?"✔":"✖️")+" Incluye un carácter especial (!@#$%^&*) ",3),e("li",{class:d({passed:o.value.minLength})},p(o.value.minLength?"✔":"✖️")+" Debe contener al menos 12 carácteres ",3)])],512),[[W,t.newPassword]])]),_:1})]),e("div",rs,[s[5]||(s[5]=e("label",{for:"password"},"Confirma tu contraseña:",-1)),e("div",ts,[y(e("input",{type:f.value?"text":"password",class:d([{"form-control--error":l(i).confirmPassword.$error},"form-control"]),placeholder:"Confirma tu contraseña","onUpdate:modelValue":s[2]||(s[2]=n=>t.confirmPassword=n),autocomplete:"new-password"},null,10,ns),[[_,t.confirmPassword,void 0,{trim:!0}]]),e("button",{type:"button",onClick:s[3]||(s[3]=n=>f.value=!f.value),class:"toggle-btn bg-blue-100"},[f.value?(r(),g(l(V),{key:1,class:"icon-password size-8"})):(r(),g(l(S),{key:0,class:"icon-password size-8"}))])]),l(i).confirmPassword.$error?(r(),c("span",ls,[(r(!0),c(C,null,x(l(i).confirmPassword.$errors,n=>(r(),c("p",{key:n.$uid,class:"text-error"},p(n.$message),1))),128))])):z("",!0)]),e("button",is,[w.value?(r(),c("div",us,s[6]||(s[6]=[Z('<div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div><div class="sk-chase-dot"></div>',6)]))):(r(),c("span",cs," Cambiar contraseña "))])],32))}};export{fs as default};
