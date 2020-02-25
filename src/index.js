module.exports = function reverse (n) {
    let myArr = n.toString().split('');
    let a = myArr.length;
            if (myArr[0] === '-') {
                myArr=myArr.slice(1);
            } else if (myArr[a] === '0') {
                myArr=myArr.slice(0, a-1);
            } else {
                myArr = myArr;
            }
    return Number(myArr.reverse().join('')); 
}