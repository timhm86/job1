if (5==5) {
    console.log("Eee");
} else {
    console.log("Nooo");
}

const str = "timushev";
console.log(str.slice(2,6));

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "asd";

console.log(oldArray);
console.log(newArray);

const   video = ['youtube', 'vimeo', 'rutube'],
        blogs = ['qwe', 'eqw', 'tre'],
        internet = [...video, ...blogs, 'vk', 'ploi'];

console.log(internet);

function sum (a, b, c) {
return a+b+c;
}

const num = ["2", "3", "67"];

console.log( sum(...num));


const arr = ['a', 'b'];

const ar2 = [...arr];