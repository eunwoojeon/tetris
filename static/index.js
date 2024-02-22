const matrix = document.querySelector("#matrix > ul");

console.log(matrix);

for (let i = 0; i < 20; i++) {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    li.prepend(ul);

    for (let j = 0; j < 10; j++) {
        const li2 = document.createElement("li");
        ul.prepend(li2);
    }
    matrix.prepend(li);
}