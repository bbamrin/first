function areArraysEqual(A,B){
  var counter = 0;
  var lna = A.length;
  var lnb = B.length;
  if(lna === lnb)
  {
    for(var i = 0; i<lna;++i)
    {
      if(A[i]===B[i])
      {
        counter++;
      }
    }
    if(counter === lna)
    {
      return true;
    }
    else {
      return false;
    }
  }
  else{
    return false;
  }
}
var arr1 = ["1",2,3];
var arr2 = [1,2,3];
alert(areArraysEqual(arr1,arr2));
