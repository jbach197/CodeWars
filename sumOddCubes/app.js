function cubeOdd(arr) {

    if (arr.every(ele => typeof (ele) === 'number')) {

        return arr.map(num => Math.pow(num, 3)).filter(num => num % 2 !== 0).reduce((acc, cur) => acc + cur, 0);

    } else {

        return undefined;
    }
};