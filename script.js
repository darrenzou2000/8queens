
var board=[]
makeboard()
fillboard()

function makeboard(){
    var table = document.createElement("table");
for (var i = 0; i < length; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j < length+1; j++) {
        var td = document.createElement('td');
        if (i%2 != j%2) {
            td.className = "white";
            td.id=`${j+i*length}`
        } else {
            td.className = "black";
            td.id=`${j+i*length}`
        }
        tr.appendChild(td);
    } 
    table.appendChild(tr);
}
document.body.appendChild(table);
    
}
function fillboard(){
    for(var i=0;i<length*length;i++){
        board[i]=i+1
        }
}
