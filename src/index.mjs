import "./styles.css";

document.getElementById("app").innerHTML = `
<h4>See the console</h4>
`;

// Find largest numbers
let arrL = [1, 8, 7, 56, 100, 90];
// const largest = (arrL) => {
//   let max = 0;
//   for (let i = 0; i < arrL.length; i++) {
//     if (max < arrL[i]) {
//       max = arrL[i];
//     }
//   }
//   console.log(max);
// };

// Alternative Solution
// const largest = (aarL) => {
//   const max = Math.max(...aarL);
//   console.log(max);
// };

// using reduce method
const largest = () => {
  const max = arrL.reduce((acc, curr) => (acc > curr ? acc : curr));
  console.log(max);
};

largest(arrL);

// Find Negative Numbers
let arrN = [-10, -8, -30, -5];

const negative = () => {
  let max = arrN[0];
  for (let i = 0; i < arrN.length; i++) {
    if (max < arrN[i]) {
      max = arrN[i];
    }
  }
  console.log(max);
};

negative(arrN);
