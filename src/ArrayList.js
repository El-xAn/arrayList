
    function removeLastElement(numbers) {
        if (!Array.isArray(numbers) || numbers == null) {
            return 'Not array';
        } else {
            let newArr ;

            for (let i = 0; i < numbers.length - 1; i++){
                newArr = numbers[i];
                console.log(newArr);
            }

            return numbers[numbers.length - 1];
        }
    }

        removeLastElement([1, 2, 3, 4, 5]);

module.exports = {
    removeLastElement,
};

