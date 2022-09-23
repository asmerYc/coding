// practise reduce
const arr = [];
function transformData(arr) {
    return arr.reduce((acc,cur) => acc += cur,0)
}
console.log(transformData(arr))

const getMax = (a,b) => Math.max(a,b);
console.log([1, 100].reduce(getMax, 50))
console.log([100].reduce(getMax, 50))

const num = [1,2,3,4,5];
console.log(num.reduce((acc,cur) => acc += cur))

// 二维数组转换为一维数组
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(previousValue, currentValue) {
      return previousValue.concat(currentValue)
    },
    []
)
console.log(flattened, 'flattened');

// 计算数组中出现相同名称的次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countNames = names.reduce((allNames, name) => {
    if(name in allNames) {
        allNames[name]++
    } else {
        allNames[name] = 1
    }
    return allNames;
},{})

console.log(countNames, 'countNames');

// 按照属性对object分类
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];

  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }


let groupedPeople = groupBy(people, 'age')
console.log(groupedPeople, 'groupedPeople');
