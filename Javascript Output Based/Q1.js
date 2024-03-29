// find common elements in both objects
const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, c: 12, f: 6, d: 10 };

function getCommon(obj1, obj2) {
  let ans = {};
  for (key in obj1) {
    if (obj1[key] === obj2[key]) {
      ans[key] = obj1[key];
    }
  }
  return ans;
}

console.log(getCommon(input1, input2));
