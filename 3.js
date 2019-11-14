// 3 - filter methodunu kullanarak aşağıdaki dizideki elemanlardan sadece 
// 15 den küçük olanlarlıyla oluşan bir dizi oluşturun.

var numbers = [12, 5, 20, 130, 44, 9, 240]
console.log(numbers);

var newNumbers = numbers.filter((number) => 
{
    return number>15;
})
console.log(newNumbers);