module.exports = numbers => {
    if(isNaN(numbers)) return false;
    numbers=typeof numbers=="number"?(numbers-0).toString():numbers;
    if(numbers.length != 3) return false;
    if(numbers[0] == numbers[1]||numbers[0] == numbers[2]||numbers[1] == numbers[2]) return false;
    return true;
}