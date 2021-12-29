export function reSeedArr(len = 5) {
    const arr = [];
    while (arr.length < len) {
        const randomNumber = parseInt(Math.random() * 20);
        if (!arr.includes(randomNumber)) {
            arr.push(randomNumber)
        }
    }
    return arr;
}