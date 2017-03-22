function foo(mat){
  var s='';
  for(var i=0;i<mat.length;i++) {
    s+=mat[i].join(',')+'\n';
  }
  console.log(s);
}
function bar(mat) {
  var res=[];
  for(var i=0;i<mat[0].length;i++) {
    var t_arr=[];
    for(var j=0;j<mat.length;j++) {
      t_arr.push(mat[j][i])
    }
    res.push(t_arr);
  }
  return res;
}
var mat=[[1,2,3],[4,5,6]];
foo(bar(mat));
/*
"1\s2\s3\n
4\s5\s6\n
7\s8s9"
 */