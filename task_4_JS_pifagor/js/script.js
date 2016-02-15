(function () {
    var container = document.getElementById("container");
    var cols = 9;
    var rows = 9;

    for(var i = 1; i <= cols; i++) {
        var divCol = document.createElement("div");
        container.appendChild(divCol);
        for (var j = 1; j <= rows; j++) {
            var divRow = document.createElement("div");
            divRow.setAttribute("class", 'row');
            divRow.innerHTML = i*j;
            divCol.appendChild(divRow);
        }

    }
})();