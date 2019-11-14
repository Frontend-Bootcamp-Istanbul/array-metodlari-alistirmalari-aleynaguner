// 1 - forEach methodunu kullanarak copy dizisini items 
// dizisinin bir copyası haline getirin.

const items = ['item1', 'item2', 'item3'];
console.log(items);

const copy = [];
console.log(copy);

items.forEach((item) =>
{
    return copy.push(item);
})

console.log(copy);