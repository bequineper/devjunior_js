let i = 1;
const startTime = Date.now();

while (i < 1000000000) {
    i++;
}

const endTime = Date.now();
console.log(`Tempo total: ${(endTime - startTime) / 1000} segundos`);

// 146.821,31845544 por segundo com console log
// 76.923.076,92307693 por segundo sem console log

