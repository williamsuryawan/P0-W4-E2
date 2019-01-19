function fpb(angka1, angka2) {
  // you can only write your code here!
  var faktor1 =[];
  var faktor2 =[];
  var faktor3=[];
  var faktorMax=Number;
  for (var i=2; i<=angka1; i++){
    if(angka1%i===0){
      faktor1.push(i);
    }
  }
  for (var j=2; j<=angka2; j++){
    if(angka2%j===0){
      faktor2.push(j);
    }
  }
  // console.log(faktor1)
  // console.log(faktor2)
  for (var k=0; k<faktor1.length; k++){
    for (var l=0; l<faktor2.length;l++){
      if(faktor1[k]===faktor2[l]){
        faktor3.push(faktor1[k]);
      }
    }
  }
  // console.log(faktor3)
  faktorMax= faktor3[faktor3.length-1]
  if (!faktorMax){
    return 1
  } else {
    return faktorMax
  }
  // console.log(faktorMax)
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1