var count = 0;
for (var i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        count++
    }
}
console.log(count);