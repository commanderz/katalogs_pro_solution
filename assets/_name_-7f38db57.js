import{q as v,v as p,x as _,d as k,u as x,a as N,y as h,r as y,o as c,c as l,e,t as r,f as s,F as b,z as g,i as w,b as C,w as S,l as V,g as B}from"./app-18bdd4dd.js";const L=v("user",()=>{const t=p(""),a=p(new Set),m=_(()=>Array.from(a.value)),o=_(()=>m.value.filter(u=>u!==t.value));function n(u){t.value&&a.value.add(t.value),t.value=u}return{setNewName:n,otherNames:o,savedName:t}}),R=e("div",{"text-4xl":""},[e("div",{"i-carbon-pedestrian":"","inline-block":""})],-1),j={"text-sm":"","opacity-75":""},q={key:0,"text-sm":"","mt-4":""},E={"opacity-75":""},F=k({__name:"[name]",props:{name:{type:String,required:!0}},setup(t){const a=t,m=x(),o=L(),{t:n}=N();return h(()=>{o.setNewName(a.name)}),(u,d)=>{const f=y("RouterLink");return c(),l("div",null,[R,e("p",null,r(s(n)("intro.hi",{name:a.name})),1),e("p",j,[e("em",null,r(s(n)("intro.dynamic-route")),1)]),s(o).otherNames.length?(c(),l("p",q,[e("span",E,r(s(n)("intro.aka"))+":",1),e("ul",null,[(c(!0),l(b,null,g(s(o).otherNames,i=>(c(),l("li",{key:i},[C(f,{to:`/hi/${i}`,replace:""},{default:S(()=>[V(r(i),1)]),_:2},1032,["to"])]))),128))])])):w("v-if",!0),e("div",null,[e("button",{btn:"",m:"3 t6","text-sm":"",onClick:d[0]||(d[0]=i=>s(m).back())},r(s(n)("button.back")),1)])])}}}),$=B(F,[["__file","C:/_nextjsprojects/_Upwork/katalogs_landing2/src/pages/hi/[name].vue"]]);export{$ as default};
