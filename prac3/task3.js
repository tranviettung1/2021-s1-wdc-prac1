function incMcount() {
    var num = document.getElementById("mcount").innerText;
    if (num === '') {
        num = 0;
    } else {
        num = parseInt(num, 10);
    }
    document.getElementById("mcount").innerText = num + 1;
}