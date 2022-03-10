// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, returnAsAString, makeLuckyGreeting, getSecondItem, getLastItem, getRandomNumber
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should add exclamation points to the argument', (expect) => {
    const expected = '' + '!!!';

    const actual = addExclamationPoints(''); 

    expect.equal(actual, expected);

    const expected2 = 'bunny rabbit' + '!!!';

    const actual2 = addExclamationPoints('bunny rabbit');

    expect.equal(actual2, expected2);
});

test('this test should take in a number and multiply it by seven', (expect) => {
    const expected = 28;

    const actual = multiplyBySeven(4); 

    expect.equal(actual, expected);

    const expected2 = 49;

    const actual2 = multiplyBySeven(7);

    expect.equal(actual2, expected2);
});

test('this test should take in a number and multiply it by twelve then cut the result in half', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4); 

    expect.equal(actual, expected);

    const expected2 = 36;

    const actual2 = multiplyBy12ThenHalve(6);

    expect.equal(actual2, expected2);
});

test('this test should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 10;

    const actual = divideThenMultiply(8, 4, 5); 

    expect.equal(actual, expected);

    const expected2 = 21;

    const actual2 = divideThenMultiply(9, 3, 7);

    expect.equal(actual2, expected2);
});

test('this test should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5); 

    expect.deepEqual(actual, expected);

    const expected2 = [9, 5, 2];

    const actual2 = returnAsAnArray(9, 5, 2);

    expect.deepEqual(actual2, expected2);
});

test('this test should add exclamation points to the argument', (expect) => {
    const expected = '' + '!!!';

    const actual = addExclamationPoints(''); 

    expect.equal(actual, expected);

    const expected2 = 'bunny rabbit' + '!!!';

    const actual2 = addExclamationPoints('bunny rabbit');

    expect.equal(actual2, expected2);
});

// test('this test should add exclamation points to the argument', (expect) => {
//     const expected = '' + '!!!';

//     const actual = addExclamationPoints(''); 

//     expect.equal(actual, expected);

//     const expected2 = 'bunny rabbit' + '!!!';

//     const actual2 = addExclamationPoints('bunny rabbit');

//     expect.equal(actual2, expected2);
// });

// test('this test should add exclamation points to the argument', (expect) => {
//     const expected = '' + '!!!';

//     const actual = addExclamationPoints(''); 

//     expect.equal(actual, expected);

//     const expected2 = 'bunny rabbit' + '!!!';

//     const actual2 = addExclamationPoints('bunny rabbit');

//     expect.equal(actual2, expected2);
// });








// test('this test should pass', (expect) => {
//     const expected = true;

//     const actual = myFunction();

//     expect.equal(actual, expected);
// });


// //skip('this test should be skipped', (expect) => {
//     const expected = true;

//     const actual = true;

//     expect.equal(actual, expected);
// });

