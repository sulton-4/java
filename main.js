var client = +prompt("son kiriting")

while (isNaN(client) || client == 0){
    client = +prompt("bu son emas, iltimos son kiriting")
}
if (client % 2 == 1 && client !== 0) {
    console.log("siz toq son kiritingiz");
}
else if (client % 2 == 0 && client !== 0) {
    console.log("siz juft son kiritingiz");
}