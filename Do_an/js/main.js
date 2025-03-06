function search() {
    var k = document.getElementById('kw');
    if (k != null) {
        k = k.value

        var items = document.querySelectorAll("div.img > a")
        for (var i = 0; i <= items.length; i++) {
            var name = items[i].getElementsByClassName("caption")[0].innerText;

            if (name.toLowerCase().indexOf(k) >= 0) {
                items[i].parentElement.style.height = "480px";
                items[i].parentElement.style.display = "inline-block";
            }
            else
                items[i].parentElement.style.display = "none";
        }
    }
}