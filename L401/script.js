function minNum(num1, num2, num3) {
    let min2nums = num1 >= num2 ? num2 : num1;
    let finalValue = num3 >= min2nums ? min2nums : num3;

    return finalValue;
}