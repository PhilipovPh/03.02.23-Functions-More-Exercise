function test(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);

    let testResult1 = Number.isInteger(test(x1, y1, 0, 0));
    if (testResult1 === true) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let testResult2 = Number.isInteger(test(x2, y2, 0, 0));
    if (testResult2 === true) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let testResult3 = Number.isInteger(test(x1, y1, x2, y2));
    if (testResult3 === true) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function test(x1, y1, x2, y2) {
        let testResult = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return testResult;
    }

}

test([3, 0, 0, 4]);
console.log('-----------------');
test([2, 1, 1, 1]);


