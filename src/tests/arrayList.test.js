const { assert } = require ('chai');
const list = require('../ArrayList.js');

describe('ArrayLIST', () => {
    describe('Pop method', () => {
        it ('Should return 5', () => {
            const arg = [1, 2, 3, 4, 5];
            expected = 5;
            const actual = list.removeLastElement(arg);
            assert.strictEqual(actual, expected);
        });

        it ('Should return "Not array"', () => {
            const arg = '';
            expected = 'Not array';
            const actual = list.removeLastElement(arg);
            assert.strictEqual(actual, expected);
        });






    });
});