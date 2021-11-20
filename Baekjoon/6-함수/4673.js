let noSelfNums = [];

function funcD(num) {
  let sum = num;
  // 자릿수를 다 더하는 것은 이렇게 사용해보자
  // num을 string화 시킴 요소 하나하나 사용할 수 있도록
  let stringNum = String(num);

  for (let i = 0; i < stringNum.length; i++) {
    sum += parseInt(stringNum[i]); // 요소를 이용하여 모든 자릿수를 다 더함
  }

  return sum;
}

for (let i = 1; i <= 10000; i++) {
  if (!noSelfNums.includes(funcD(i))) {
    noSelfNums.push(funcD(i));
  }
}

for (let i = 1; i <= 10000; i++) {
  if (!noSelfNums.includes(i)) {
    console.log(i);
  }
}

// 내가 푼 것.
// function funcD(num) {
//     let sum = num % 10;
//     for (let i = 0; i < 5; i++) {
//       // console.log(Math.pow(10, i));
//       // console.log(Math.floor(num / Math.pow(10, i)));
//       sum += Math.floor(num / Math.pow(10, i));
//     }

//     // console.log(sum);
//     return sum;
//   }

//   let noSelfNums = [];

//   for (let i = 1; i <= 10000; i++) {
//     if (!noSelfNums.includes(funcD(i))) {
//       noSelfNums.push(funcD(i));
//     }
//   }

//   for (let i = 1; i <= 100; i++) {
//     if (!noSelfNums.includes(i)) {
//       console.log(i);
//     }
//   }
