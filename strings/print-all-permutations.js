var pers=[];
function permute(s,l,r){
  if(l==r) pers.push(s);
  else {
    for(var i=l;i<=r;i++) {
      s=s.swap(l,i);
      permute(s,l+1,r);
      s=s.swap(l,i);
    }
  }
}
String.prototype.swap=function(l,r) {
  return this.split('').map((a,i)=>i==l?this[r]:i==r?this[l]:a).join('');
}
permute('abc',0,2);
console.log(pers);