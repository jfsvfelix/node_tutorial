const _ = require('lodash');

const itens =[1, [2, [3, [4, [5]]]]]  
console.log(itens);
const newItens = _.flattenDeep(itens);
console.log(newItens);
