import React from 'react';
const h = React.createElement;
const money = cents => new Intl.NumberFormat('es-AR', {style:'currency', currency:'ARS'}).format(cents/100);
export function GoalProgress({g}){
 const done=g.steps.filter(s=>s.done).length;
 const pct=g.target?Math.min(100,Math.floor(100*g.saved/g.target)):Math.floor(100*done/g.steps.length);
 return h('div',{className:'goal-progress'},h('div',{className:'row'},h('strong',null,g.target?money(g.saved)+' de '+money(g.target):done+' de '+g.steps.length+' pasos'),h('span',null,pct+' %')),h('progress',{value:pct,max:100,'aria-label':'Avance de '+g.title}),g.target&&g.steps.length>0?h('small',null,done+' de '+g.steps.length+' pasos completados'):null);
}
