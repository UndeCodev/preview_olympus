import{_ as Z,f as u,g as ee,h as te,d as se,a as o,b as e,s as K,m,x as w,j as c,v as T,n as g,k as n,F as k,l as $,t as i,K as D,q,A as oe,B as V,o as r,i as O}from"./index-BA70g2yz.js";import{c as B,r as H,u as re}from"./index-BGm0Do8Y.js";import{r as ae}from"./EyeIcon-DZF_stPR.js";import{r as le}from"./PencilSquareIcon-Cr9hkgAx.js";import{r as ne}from"./TrashIcon-CymSBGLx.js";const ie={key:0,class:"container mx-auto p-4"},de={class:"flex justify-between items-center mb-4"},ue={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},ce={class:"bg-white rounded-lg shadow-lg p-6 overflow-y-auto max-md:w-2/3 w-1/3"},ve={class:"mb-4"},me={key:0},pe={class:"mb-4"},fe={key:0},be={class:"mb-4"},ge=["min"],ye={key:0},xe={class:"bg-white rounded-lg shadow-xl w-full md:w-9/12 lg:w-1/3 max-h-[80vh] lg:h-max-2/3"},he={class:"p-6 space-y-6 h-full"},we={class:"text-3xl font-bold text-gray-800 border-b pb-2"},ke={class:"space-y-4 grid place-content-between h-full grid-cols-1"},$e={class:"w-full"},Ce={class:"text-gray-600 bg-gray-50 p-4 rounded-md"},Te={class:"grid grid-cols-1 md:grid-cols-3 gap-4 pb-20"},_e={class:"bg-blue-50 p-3 rounded-md"},De={class:"text-lg text-blue-900"},Ee={class:"bg-green-50 p-3 rounded-md"},Ve={class:"text-lg text-green-900"},Me={class:"bg-purple-50 p-3 rounded-md"},ze={class:"text-lg text-purple-900"},Se={class:"bg-white rounded-lg shadow-lg p-6 overflow-y-auto max-md:w-2/3 w-1/3"},Ae={class:"mb-4"},je={key:0},Fe={class:"mb-4"},Ue={key:0},Le={class:"mb-4"},Ne=["min"],qe={key:0},Oe={class:"mb-4"},Be={class:"flex items-center"},He={class:"flex justify-start items-center mb-4"},Ie={class:"flex items-center space-x-4"},Pe={class:"min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden"},Re={key:0},Ke={class:"py-2 px-4 border-b border-gray-200"},Xe={class:"py-2 px-4 border-b border-gray-200 truncate max-w-xs"},Ye={class:"py-2 px-4 border-b border-gray-200 truncate max-w-xs"},Ge={class:"py-2 px-4 border-b border-gray-200 truncate max-w-xs"},Je={class:"py-2 px-4 border-b border-gray-200"},Qe={class:"py-2 px-4 border-b border-gray-200"},We={class:"py-2 px-4 border-b border-gray-200 max-w-xs"},Ze=["onClick"],et=["onClick","disabled"],tt=["onClick","disabled"],st={class:"text-4xl mt-12 text-center"},ot={key:1,class:"h-screen mt-32"},rt={__name:"TermsAndConditions",setup(at){const M=u(!1),z=u(!1),S=u(!1),y=u(null),v=u(!1),p=u(""),f=u(""),b=u(""),I=new Date().toISOString().split("T")[0],h=u([]),C=u(!1),_=u(!1),X={termsTitle:{$autoDirty:!0,required:B.withMessage("Este campo es obligatorio",H)},termsContent:{$autoDirty:!0,required:B.withMessage("Este campo es obligatorio",H)},termsEffectiveDate:{$autoDirty:!0,required:B.withMessage("Este campo es obligatorio",H)}},E=ee.useToast(),l=re(X,{termsTitle:p,termsContent:f,termsEffectiveDate:b}),x=u("all"),Y=async a=>{try{if(!confirm("¿Estás seguro de que deseas eliminar esta política?"))return;v.value=!0;const s=await V.delete(`/dr/terms-and-conditions/${a}`,{status:"eliminada"});console.log("Política marcada como eliminada exitosamente:",s.data);const d=h.value.findIndex(N=>N.id===a);d!==-1&&(h.value[d].status="eliminada"),v.value=!1}catch(t){v.value=!1,console.error("Error al eliminar la política de privacidad:",t.message)}},G=async()=>{var a,t;if(l.value.$touch(),!l.value.$invalid)try{v.value=!0;const s={title:p.value,content:f.value,effectiveDate:b.value,isCurrent:C.value==="true"},d=await V.put(`/dr/terms-and-conditions/${y.value.id}`,s);console.log("Términos actualizados con éxito:",d.data),await U(),v.value=!1,E.open({message:d.data.message,type:"success",duration:4e3,pauseOnHover:!0}),j()}catch(s){v.value=!1;const d=((t=(a=s.response)==null?void 0:a.data)==null?void 0:t.message)||"Error al actualizar los términos y condiciones.";E.open({message:d,type:"error",duration:4e3,pauseOnHover:!0})}},J=a=>{y.value=a,p.value=a.title,f.value=a.content;const t=new Date(a.effectiveDate),s=t.getFullYear(),d=String(t.getMonth()+1).padStart(2,"0"),N=String(t.getDate()).padStart(2,"0");b.value=`${s}-${d}-${N}`,M.value=!0},A=()=>{z.value=!1,p.value="",f.value="",b.value="",l.value.$reset()},P=()=>{S.value=!1,y.value=null},j=()=>{p.value="",f.value="",b.value="",C.value="false",M.value=!1,l.value.$reset()},Q=a=>{y.value=a,S.value=!0},W=async()=>{if(l.value.$touch(),!l.value.$invalid)try{v.value=!0;const{data:a}=await V.post("/dr/terms-and-conditions",{title:p.value,content:f.value,effectiveDate:b.value});console.log(a),await U(),v.value=!1,E.open({message:a.message,type:"success",duration:4e3,pauseOnHover:!0}),A()}catch(a){v.value=!1;const t=a.response.data.message;E.open({message:t,type:"error",duration:4e3,pauseOnHover:!0})}},F=()=>{},R=te(()=>x.value==="all"?h.value:h.value.filter(a=>a.status===x.value)),U=async()=>{try{_.value=!0,h.value=[];const a=await V.get("/dr/terms-and-conditions");h.value=a.data,_.value=!1}catch(a){_.value=!1,console.error("Error al obtener los términos y condiciones:",a)}},L=a=>{const t={year:"numeric",month:"long",day:"numeric"};return new Date(a).toLocaleDateString("es-MX",t)};return se(async()=>{await U()}),(a,t)=>_.value?(r(),o("div",ot,t[36]||(t[36]=[K('<div class="sk-chase w-24 h-24 mx-auto" data-v-86669498><div class="sk-chase-dot before:bg-slate-900" data-v-86669498></div><div class="sk-chase-dot before:bg-slate-900" data-v-86669498></div><div class="sk-chase-dot before:bg-slate-900" data-v-86669498></div><div class="sk-chase-dot before:bg-slate-900" data-v-86669498></div><div class="sk-chase-dot before:bg-slate-900" data-v-86669498></div><div class="sk-chase-dot before:bg-slate-900" data-v-86669498></div></div>',1)]))):(r(),o("div",ie,[e("div",de,[t[12]||(t[12]=e("h1",{class:"text-2xl font-bold"},"Listado de Términos y Condiciones",-1)),e("button",{onClick:t[0]||(t[0]=s=>z.value=!0),class:"bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"}," + Agregar Términos y Condiciones ")]),v.value?(r(),o("div",ue,t[13]||(t[13]=[K('<div class="sk-chase w-24 h-24" data-v-86669498><div class="sk-chase-dot" data-v-86669498></div><div class="sk-chase-dot" data-v-86669498></div><div class="sk-chase-dot" data-v-86669498></div><div class="sk-chase-dot" data-v-86669498></div><div class="sk-chase-dot" data-v-86669498></div><div class="sk-chase-dot" data-v-86669498></div></div>',1)]))):m("",!0),z.value?(r(),o("div",{key:1,onClick:w(A,["self"]),class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},[e("div",ce,[t[18]||(t[18]=e("h2",{class:"text-2xl font-bold mb-4"},"Agregar Términos y Condiciones",-1)),e("form",{onSubmit:w(W,["prevent"])},[e("div",ve,[t[14]||(t[14]=e("label",{for:"termsTitle",class:"block text-gray-700 font-medium"},"Título",-1)),c(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>p.value=s),id:"termsTitle",type:"text",class:g([{"form-control--error":n(l).termsTitle.$error},"w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"])},null,2),[[T,p.value]]),n(l).termsTitle.$error?(r(),o("span",me,[(r(!0),o(k,null,$(n(l).termsTitle.$errors,s=>(r(),o("p",{key:s.$uid,class:"text-error"},i(s.$message),1))),128))])):m("",!0)]),e("div",pe,[t[15]||(t[15]=e("label",{for:"termsContent",class:"block text-gray-700 font-medium"},"Contenido",-1)),c(e("textarea",{"onUpdate:modelValue":t[2]||(t[2]=s=>f.value=s),id:"termsContent",class:g(["w-full p-2 h-40 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600 overflow-y-scroll resize-none",{"form-control--error":n(l).termsContent.$error}])},null,2),[[T,f.value]]),n(l).termsContent.$error?(r(),o("span",fe,[(r(!0),o(k,null,$(n(l).termsContent.$errors,s=>(r(),o("p",{key:s.$uid,class:"text-error"},i(s.$message),1))),128))])):m("",!0)]),e("div",be,[t[16]||(t[16]=e("label",{for:"termsEffectiveDate",class:"block text-gray-700 font-medium"},"Fecha de Vigencia",-1)),c(e("input",{"onUpdate:modelValue":t[3]||(t[3]=s=>b.value=s),min:n(I),id:"termsEffectiveDate",type:"date",class:g(["w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600",{"form-control--error":n(l).termsEffectiveDate.$error}])},null,10,ge),[[T,b.value]]),n(l).termsEffectiveDate.$error?(r(),o("span",ye,[(r(!0),o(k,null,$(n(l).termsEffectiveDate.$errors,s=>(r(),o("p",{key:s.$uid,class:"text-error"},i(s.$message),1))),128))])):m("",!0)]),e("div",{class:"flex justify-between items-center"},[e("button",{type:"button",onClick:A,class:"text-red-600 hover:text-red-800"}," Cancelar "),t[17]||(t[17]=e("button",{type:"submit",class:"bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"}," Crear Términos y Condiciones ",-1))])],32)])])):m("",!0),S.value?(r(),o("div",{key:2,onClick:w(P,["self"]),class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"},[e("div",xe,[e("div",he,[e("h2",we,i(y.value.title),1),e("div",ke,[e("div",$e,[t[19]||(t[19]=e("h3",{class:"text-lg font-semibold text-gray-700 mb-2"},"Contenido:",-1)),e("p",Ce,i(y.value.content),1)]),e("div",Te,[e("div",_e,[t[20]||(t[20]=e("p",{class:"text-sm font-medium text-blue-800"},"Fecha de Vigencia",-1)),e("p",De,i(L(y.value.effectiveDate)),1)]),e("div",Ee,[t[21]||(t[21]=e("p",{class:"text-sm font-medium text-green-800"},"Fecha de Creación",-1)),e("p",Ve,i(L(y.value.createdAt)),1)]),e("div",Me,[t[22]||(t[22]=e("p",{class:"text-sm font-medium text-purple-800"},"Última Actualización",-1)),e("p",ze,i(L(y.value.updatedAt)),1)])])])]),e("div",{class:"bg-gray-50 flex justify-end p-4"},[e("button",{onClick:P,class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:scale-105"}," Cerrar ")])])])):m("",!0),M.value?(r(),o("div",{key:3,onClick:w(j,["self"]),class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},[e("div",Se,[t[30]||(t[30]=e("h2",{class:"text-2xl font-bold mb-4"},"Editar Términos y Condiciones 123",-1)),e("form",{onSubmit:w(G,["prevent"])},[e("div",Ae,[t[23]||(t[23]=e("label",{for:"termsTitle",class:"block text-gray-700 font-medium"},"Título",-1)),c(e("input",{"onUpdate:modelValue":t[4]||(t[4]=s=>p.value=s),id:"termsTitle",type:"text",class:g([{"form-control--error":n(l).termsTitle.$error},"w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"])},null,2),[[T,p.value]]),n(l).termsTitle.$error?(r(),o("span",je,[(r(!0),o(k,null,$(n(l).termsTitle.$errors,s=>(r(),o("p",{key:s.$uid,class:"text-error"},i(s.$message),1))),128))])):m("",!0)]),e("div",Fe,[t[24]||(t[24]=e("label",{for:"termsContent",class:"block text-gray-700 font-medium"},"Contenido",-1)),c(e("textarea",{"onUpdate:modelValue":t[5]||(t[5]=s=>f.value=s),id:"termsContent",class:g(["w-full p-2 h-40 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600 overflow-y-scroll resize-none",{"form-control--error":n(l).termsContent.$error}])},null,2),[[T,f.value]]),n(l).termsContent.$error?(r(),o("span",Ue,[(r(!0),o(k,null,$(n(l).termsContent.$errors,s=>(r(),o("p",{key:s.$uid,class:"text-error"},i(s.$message),1))),128))])):m("",!0)]),e("div",Le,[t[25]||(t[25]=e("label",{for:"termsEffectiveDate",class:"block text-gray-700 font-medium"},"Fecha de Vigencia",-1)),c(e("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>b.value=s),min:n(I),id:"termsEffectiveDate",type:"date",class:g(["w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600",{"form-control--error":n(l).termsEffectiveDate.$error}])},null,10,Ne),[[T,b.value]]),n(l).termsEffectiveDate.$error?(r(),o("span",qe,[(r(!0),o(k,null,$(n(l).termsEffectiveDate.$errors,s=>(r(),o("p",{key:s.$uid,class:"text-error"},i(s.$message),1))),128))])):m("",!0)]),e("div",Oe,[t[28]||(t[28]=e("label",{class:"block text-gray-700 font-medium"},"¿Esta versión es vigente?",-1)),e("div",Be,[c(e("input",{"onUpdate:modelValue":t[7]||(t[7]=s=>C.value=s),type:"radio",value:"true",id:"current-yes",class:"mr-2"},null,512),[[D,C.value]]),t[26]||(t[26]=e("label",{for:"current-yes",class:"mr-4"},"Sí",-1)),c(e("input",{"onUpdate:modelValue":t[8]||(t[8]=s=>C.value=s),type:"radio",value:"false",id:"current-no",class:"mr-2"},null,512),[[D,C.value]]),t[27]||(t[27]=e("label",{for:"current-no"},"No",-1))])]),e("div",{class:"flex justify-between items-center"},[e("button",{type:"button",onClick:j,class:"text-red-600 hover:text-red-800"}," Cancelar "),t[29]||(t[29]=e("button",{type:"submit",class:"bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"}," Actualizar Términos y Condiciones ",-1))])],32)])])):m("",!0),e("div",He,[t[34]||(t[34]=e("label",{class:"mr-4 text-gray-700 font-medium"},"Filtrar por estado:",-1)),e("div",Ie,[e("label",null,[c(e("input",{type:"radio",value:"all","onUpdate:modelValue":t[9]||(t[9]=s=>x.value=s),onChange:F},null,544),[[D,x.value]]),t[31]||(t[31]=q(" Todos "))]),e("label",null,[c(e("input",{type:"radio",value:"no vigente","onUpdate:modelValue":t[10]||(t[10]=s=>x.value=s),onChange:F},null,544),[[D,x.value]]),t[32]||(t[32]=q(" No vigente "))]),e("label",null,[c(e("input",{type:"radio",value:"eliminada","onUpdate:modelValue":t[11]||(t[11]=s=>x.value=s),onChange:F},null,544),[[D,x.value]]),t[33]||(t[33]=q(" Eliminada "))])])]),e("table",Pe,[t[35]||(t[35]=e("thead",null,[e("tr",{class:"bg-gray-100 text-left"},[e("th",{class:"py-2 px-4 border-b border-gray-200"},"Fecha de Creación"),e("th",{class:"py-2 px-4 border-b border-gray-200"},"Versión"),e("th",{class:"py-2 px-4 border-b border-gray-200"},"Título"),e("th",{class:"py-2 px-4 border-b border-gray-200"},"Contenido"),e("th",{class:"py-2 px-4 border-b border-gray-200"},"Estado"),e("th",{class:"py-2 px-4 border-b border-gray-200"},"Fecha de vigencia"),e("th",{class:"py-2 px-4 border-b border-gray-200"},"Acciones")])],-1)),R.value.length>0&&!v.value?(r(),o("tbody",Re,[(r(!0),o(k,null,$(R.value,s=>(r(),o("tr",{key:s.id,class:g(["hover:bg-gray-50",s.status==="vigente"?"bg-gray-200":""])},[e("td",Ke,i(new Date(s.createdAt).toLocaleDateString()),1),e("td",Xe,i(s.version),1),e("td",Ye,i(s.title),1),e("td",Ge,i(s.content),1),e("td",Je,[e("span",{class:g([{"bg-green text-green-600":s.status==="vigente","text-yellow-600":s.status==="no vigente","text-red-600":s.status==="eliminada"},"capitalize"])},i(s.status),3)]),e("td",Qe,i(new Date(s.effectiveDate).toLocaleDateString()),1),e("td",We,[e("button",{onClick:d=>Q(s),class:"text-slate-600 hover:text-slate-800 mr-2"},[O(n(ae),{class:"size-8"})],8,Ze),e("button",{onClick:w(d=>J(s),["prevent"]),class:g(["text-blue-600 hover:text-blue-800 mr-2",{"opacity-50 cursor-not-allowed":s.status==="eliminada"}]),disabled:s.status==="eliminada"},[O(n(le),{class:"size-8"})],10,et),e("button",{onClick:w(d=>Y(s.id),["prevent"]),class:g(["text-red-600 hover:text-red-800",{"opacity-50 cursor-not-allowed":s.status==="eliminada"}]),disabled:s.status==="eliminada"},[O(n(ne),{class:"size-8"})],10,tt)])],2))),128))])):m("",!0)]),c(e("h1",st," Aún no hay registros de términos y condiciones, agrega uno para empezar a listar. ",512),[[oe,!_.value&&h.value.length===0]])]))}},ct=Z(rt,[["__scopeId","data-v-86669498"]]);export{ct as default};
