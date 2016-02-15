(function(){
    var months = [
        {
            value: 0,
            month: "january"
        },
        {
            value: 1,
            month: "february"
        },
        {
            value: 2,
            month: "mart"
        },
        {
            value: 3,
            month: "april"
        },
        {
            value: 4,
            month: "may"
        },
        {
            value: 5,
            month: "juny"
        },
        {
            value: 6,
            month: "july"
        },
        {
            value: 7,
            month: "august"
        },
        {
            value: 8,
            month: "september"
        },
        {
            value: 9,
            month: "october"
        },
        {
            value: 10,
            month: "november"
        },
        {
            value: 11,
            month: "december"
        }
    ];


    var button = document.getElementById('button');
    var exclusion;
    var result;

    button.addEventListener('click', getResults);

    function getResults (){
        var inputStr = document.getElementById('exclusion').value;
        exclusion = inputStr.split(',');
        result = months.filter(function(obj){
            return exclusion.every(function(excl){
                return excl != obj.value
            });
        });
        console.log(result);
    };
})();

