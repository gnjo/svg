;(function(root){
 let fn={}
 fn.gi=(d)=>document.getElementById(d)
 //document.setAttributeNS("http://www.w3.org/2000/svg", "align", "center"); 
 
 ;
 let svg={}
 svg.handcls=(o,k,v)=>{
  if(!svg.buf[k])svg.buf[k]=fn.gi(k)
  if(!svg.buf[k])return console.log('id notfound',k,v) 
  v=(v||'').replace('.','')
  if(/\,/.test(v)){
   let a=v.split(','),timeout=parseFloat(a[1])
   v=a[0]
   setTimeout(()=>{ svg.cls[k]='' },timeout)
  }
  if(!v)return svg.buf[k].classList.remove(o[k]),o[k]=v
  return svg.buf[k].classList.add(v),o[k]=v
 }
 svg.handtxt=(o,k,v)=>{
  if(!svg.buf[k])svg.buf[k]=fn.gi(k)
  if(!svg.buf[k])return console.log('id notfound',k,v) 
  //console.log(k,v)
  return svg.buf[k].textContent=v,o[k]=v
 }
 svg.handsrc=(o,k,v)=>{
  if(!svg.buf[k])svg.buf[k]=fn.gi(k)
  if(!svg.buf[k])return console.log('id notfound',k,v)
  return svg.buf[k].src=v||svg._src,o[k]=v
 }
 svg._src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII="
 svg.buf={}
 svg.cls=new Proxy({},{set:svg.handcls})
 svg.txt=new Proxy({},{set:svg.handtxt})
 svg.src=new Proxy({},{set:svg.handsrc})
 //
 svg.init=((w,h,query)=>{
  query=query||'svg'
  let el=fn.q(query)
  el.setAttributeNS("http://www.w3.org/2000/svg", "width",w); 
  el.setAttributeNS("http://www.w3.org/2000/svg", "height",h);
  svg.el=el
 })
 //
 
 root.svg=svg
/*usage
svg.txt.xyz='bbbbb'
svg.cls.xyz='orange,5000'
setTimeout(()=>{svg.txt.xyz='cccc'},1000)

svg.src.kkk=''
*/ 
})(this);
