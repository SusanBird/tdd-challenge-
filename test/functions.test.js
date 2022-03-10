// IMPORT MODULES under test here:
import { 
    addExclamationPoints, multiplyBySeven, multiplyBy12ThenHalve, divideThenMultiply, returnAsAnArray, 
    returnAsAString, makeLuckyGreeting, getSecondItem, getLastItem, getRandomNumber
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

test('this test should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = 845;

    const actual = returnAsAString(8, 4, 5); 

    expect.equal(actual, expected);

    const expected2 = 198;

    const actual2 = returnAsAString(1, 9, 8);

    expect.equal(actual2, expected2);
});

test('this test should take in two numbers and return a greeting announcing that the sum of those numbers is todays lucky number', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4); 

    expect.equal(actual, expected);

    const expected2 = 'Hello! Your lucky number for the day is 15.';

    const actual2 = makeLuckyGreeting(7, 8);

    expect.equal(actual2, expected2);
});

test('this test should take an array and return the second item in the array', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']); 

    expect.equal(actual, expected);

    const expected2 = 'banana';

    const actual2 = getSecondItem(['kiwi', 'banana', 'orange', 'plum']);

    expect.equal(actual2, expected2);
});

test('this test should take an array and return the LAST item in the array, no matter the arrays length', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']); 

    expect.equal(actual, expected);

    const expected2 = 'banana';

    const actual2 = getLastItem(['kiwi', 'apple', 'orange', 'plum', 'banana']);

    expect.equal(actual2, expected2);
});

test('this test should return a random number between 0 and 5', (expect) => {
    
    const answer = getRandomNumber();
    
    // const expected = answer === 1 || answer === 2 || answer === 3 || answer === 4 || answer === 5 ||
    //  [0, 1, 2, 3, 4, 5];

    // const actual = getRandomNumber(); 

    expect.deepEqual(typeof answer, 'number');

});







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

