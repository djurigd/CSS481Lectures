function createTable(){
    const table = document.querySelector("body");
    let output = "<table>"
    let multTable = [];
    for (let i = 1; i <= 10; i++){
        let multRow = [];
        output += "<tr>"
        for (let j = 1; j <= 10; j++){
            multRow.push("");
            if (i === j){

            } else {

            }
        }
        multTable.push(multRow);
        multRow = [];
    }
}

