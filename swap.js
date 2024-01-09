document.getElementById('swapButton').addEventListener('click', function () {
    let input1 = document.getElementById('input1').value.trim();
    let input2 = document.getElementById('input2').value.trim();
    let firstvalue = document.getElementById('firstVal');
    let secondVal = document.getElementById('secondVal');
    let defaultVal = document.getElementById('default');

    if (input1 === '' || input2 === '') {
        defaultVal.innerHTML = 'Enter The Appropriate Value';
    } else {
        input1 = parseInt(input1);
        input2 = parseInt(input2);

        if (isNaN(input1) || isNaN(input2)) {
            defaultVal.innerHTML = 'Invalid Input. Enter Numeric Values.';
        } else {
            let temp = input1;
            input1 = input2;
            input2 = temp;

            firstvalue.innerHTML = `After Swapping First Value is ${input1}`;
            secondVal.innerHTML = `After Swapping Second Value is ${input2}`;
            defaultVal.innerHTML = ''; // Clear any previous error messages
        }
    }
});

document.getElementById('clearButton').addEventListener('click', function () {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('firstVal').innerHTML = '';
    document.getElementById('secondVal').innerHTML = '';

})