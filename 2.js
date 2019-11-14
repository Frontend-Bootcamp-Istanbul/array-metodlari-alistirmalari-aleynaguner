// 2 - map methodunu kullanarak "triples" isimli diziyi; yani aşağıdaki dizinin elemanlarının 
// 3 ile çarpımıyla elde edilen diziyi oluşturun.

var numbers = [1, 4, 9];
console.log(numbers);

var triples = numbers.map(number => 
    {return number*3}
    );
console.log(triples);
