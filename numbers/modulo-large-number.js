/**
 * b%a
 * @param a
 * @param b
 */
function modulo(a,b) {
  var mod=0;
  for(var i=0;i<b.length;i++) mod=(mod*10+ +b.charAt(i))%a;
  return mod;
}
var n=1313131313;
console.log(n%21==modulo(21,String(n)));