
const laws=[];
for(let i=1;i<=50;i++){laws.push({id:i,title:`มาตรา ${i}`,detail:`รายละเอียดมาตรา ${i}`})}
function render(q=''){
document.getElementById('laws').innerHTML=laws.filter(x=>(x.title+x.detail).includes(q))
.map(x=>`<div class="card"><h3>${x.title}</h3><p>${x.detail}</p></div>`).join('');
}
document.getElementById('search').addEventListener('input',e=>render(e.target.value));
render();
