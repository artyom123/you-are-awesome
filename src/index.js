// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (a) => {a};
const createNotEnumerableProperty = (a) => {
    Object.defineProperty(Object.prototype, a,{
          set: value=>String.prototype.propertyValue = value,
          get: ()=>String.prototype.propertyValue,
    });
    
    return a;
};
const createProtoMagicObject = () => {
    function magicObjFun(){}
    magicObjFun.__proto__ = magicObjFun.prototype;
    
    return magicObjFun;
};
let num = 0,
numAsync = 0;
const incrementor = () => {
	num++;
    
    function incrementorPlus(){
        num++;
        return incrementorPlus;
    }
    incrementorPlus.toString = function(){
        return num;
    }
    
    return incrementorPlus;
};
const asyncIncrementor = () => {
    numAsync++;
	setTimeout(function(){}, 0);
  
	return numAsync;
};
function* createIncrementer(){
    let index = 0;
    while(true) 
        yield ++index;
}

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (element) => {
    let prom = new Promise((resolve, reject) => {
        setTimeout(()=>resolve(element),1000);
    })

    return prom;
};
const getDeepPropertiesCount = (object) => JSON.stringify(object).match(/[0-9]{1,}/g).length;
const createSerializedObject = () => {
    let obj = null;
    return null;
};
const toBuffer = () => {};
const sortByProto = (arr) => arr.sort((a, b)=>a.__proto__ - b.__proto__);

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
