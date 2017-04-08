function generateTable() {
    let body = document.getElementsByTagName("body")[0];
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
    for (let i = 0; i < 10; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(Math.round(Math.random() * 100));
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell.style.height = '50px';
            cell.style.width = '50px';
            if ((i % 2) === 0 && (j % 2) === 0) {
                cell.style.background = "black";
                cell.style.color = "white";
            } else if ((i % 2 !== 0) && (j % 2 !== 0)) {
                cell.style.background = "black";
                cell.style.color = "white";
            }
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");
}
function generateInner(){
    let res = " ";
    res += "<table border=\"2\">";
    for (let i = 0; i < 10; i++){
        res += "<tr>";
        for (let j = 0; j < 10; j++){
            if ((i % 2) === 0 && (j % 2) === 0) {
                res += "<td style=\"height: 50px; width: 50px; background: black; color: white\">";
                res += "smth";
                res += "</td>";
            } else if ((i % 2 !== 0) && (j % 2 !== 0)) {
                res += "<td style=\"height: 50px; width: 50px; background: black; color: white\">";
                res += "smth";
                res += "</td>";
            }else {
                res += "<td style=\"height: 50px; width: 50px\">";
                res += "smth";
                res += "</td>";
            }
        }
        res += "</tr>";
    }
    res += "</table>";
    document.body.innerHTML = res;
}
function search(smth){
    let el = document.getElementsByClassName("main active super-active")[0];
    let str = el.getAttribute("class");
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === smth) {
            return true;
        }
    }
    return false;
}