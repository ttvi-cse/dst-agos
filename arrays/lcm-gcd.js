function lcm(a,b) {
  return a*b/gcd(a,b);
}
function gcdArr(arr) {
  var ans=arr[0];
  for(var i=1;i<arr.length-1;i++) {
    ans=gcd(ans,arr[i+1]);
  }
  return ans;
}
function gcd(a,b){
  if(b==0) return a;
  else return gcd(b,a%b);
}
function lcmArr(arr) {
  var ans=arr[0];
  for(var i=1;i<arr.length;i++) {
    ans=(ans*arr[i])/gcd(arr[i],ans);
  }
  return ans;
}
console.log(gcdArr([9,27,18,6]));