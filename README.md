# svg
svg util
```
svg.buf //buffer
svg.cls.id //class,timeout
svg.txt.id //text
svg.src.id //src
```

```
let fn={}
fn.gi=document.getElementById
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
 return svg.buf[k].textContent=v,o[k]=v
}
svg.handsrc=(o,k,v)=>{
 if(!svg.buf[k])svg.buf[k]=fn.gi(k)
 if(!svg.buf[k])return console.log('id notfound',k,v)
 return svg.buf[k].src=v||svg._src,o[k]=v
}
svg._src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII="
svg.buf={}
svg.cls=new Proxy({},svg.handcls)
svg.txt=new Proxy({},svg.handtxt)
svg.src=new Proxy({},svg.handsrc)


```
