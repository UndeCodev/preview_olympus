import{_ as d,e as l,h as m,d as _,a as f,b as a,t as o,B as x,o as p}from"./index-JSM4PwRk.js";const g={class:"bg-white shadow-lg rounded-xl p-8 mb-8 max-w-4xl mx-auto"},h={class:"text-2xl font-semibold text-gray-900 mb-4"},u={class:"text-gray-700 text-lg leading-relaxed mb-6 space-y-4"},y=["innerHTML"],v={class:"text-gray-500 italic text-right"},D={__name:"TermsAndConditions",setup(b){const t=l({title:"",content:"",effectiveDate:""}),s=async()=>{try{const{data:e}=await x.get("/dr/term-and-condition"),{title:n,content:i,effectiveDate:r}=e;t.title=n,t.content=i,t.effectiveDate=r}catch(e){console.log(e)}},c=m(()=>{if(t.effectiveDate){const e=new Date(t.effectiveDate);return new Intl.DateTimeFormat("es-MX",{day:"2-digit",month:"long",year:"numeric"}).format(e)}return""});return _(async()=>{await s()}),(e,n)=>(p(),f("div",g,[n[0]||(n[0]=a("h1",{class:"text-4xl font-bold text-center text-indigo-600 mb-6"},"Términos y condiciones",-1)),a("h2",h,o(t.title),1),a("div",u,[a("p",{innerHTML:t.content},null,8,y)]),a("p",v,"Fecha de vigencia: "+o(c.value),1)]))}},T=d(D,[["__scopeId","data-v-084c2924"]]);export{T as default};