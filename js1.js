    let num = 0;
    let total = 0;
while( num != -1 ) {
    num = +prompt("Enter a number: ");
    alert("Choosen number: " + num);
    total += num;
}
document.writeln(total);