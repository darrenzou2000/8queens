var attacklist=[]
var location;

function queenmovement(location){
    location=location
    if(location<1||location>board.length){
        alert('YOUR QUEEN LOCATION IS OUT OF BOUND')
    }
 attacklist=[]
//this will find side to side
var sidesquare=location%length
if(sidesquare==0){
    sidesquare=length
}

for(var i=location-sidesquare+1;i<=location+length-sidesquare;i++){
    attacklist.push(i)
   
}
//sidesquare is also bottom
for(var i=0;i<length;i++){
    attacklist.push(sidesquare+(length)*i)
}
//diagonal now
var attackblock=location
var count=1
var row=1
var lastAttackrow=2

while(Math.abs(row-lastAttackrow)==1){
    attacklist.push(attackblock)
    lastAttackrow=rowof(attackblock)
    attackblock=location+count*(length+1)
    row=rowof(attackblock)
    count++ 
    if(attackblock<1||attackblock>length**2){
        break;
    }
}
count=1
attackblock=location
lastAttackrow=2
row=1
while(Math.abs(row-lastAttackrow)==1){
    attacklist.push(attackblock)
    lastAttackrow=rowof(attackblock)
    attackblock=location+count*(length-1)
    row=rowof(attackblock)
    count++ 
    if(attackblock<1||attackblock>length**2){
        break;
    }
}
count=1
attackblock=location
lastAttackrow=2
row=1
while(Math.abs(row-lastAttackrow)==1){
    attacklist.push(attackblock)
    lastAttackrow=rowof(attackblock)
    attackblock=location-count*(length+1)
    row=rowof(attackblock)
    count++ 
    if(attackblock<1||attackblock>length**2){
        break;
    }
}
count=1
attackblock=location
lastAttackrow=2
row=1
while(Math.abs(row-lastAttackrow)==1){
    attacklist.push(attackblock)
    lastAttackrow=rowof(attackblock)
    attackblock=location-count*(length-1)
    row=rowof(attackblock)
    count++ 
    if(attackblock<1||attackblock>length**2){
        break;
    }
}



animate(location,attacklist)
setTimeout("solve8queen(attacklist)", 1);
}
function rowof(location){
    var sidesquare=(location-1)%length
    return Math.floor((location-sidesquare)/(length))
}
function animate(location,attacklist){
    document.getElementById(`${location}`).style.backgroundImage = "url('queen.png')";
for(var i=0;i<attacklist.length;i++){
    document.getElementById(`${attacklist[i]}`).style.backgroundColor='lightgreen';
}
}




var queencount=0
var moveablelist=board
var t0
$(window).on('load', function(){ 
    t0 = performance.now();
    solve8queen_start()
});
function solve8queen_start(){
    var startingsquare=Math.floor((Math.random() * length) + 1);
    queenmovement(startingsquare)
    queencount++
}

var success=0
function solve8queen(atk){
    moveablelist=moveablelist.filter(n => !atk.includes(n));
    if(queencount==length){
        console.log('success!')

        var t1 = performance.now();
        var time=(t1 - t0)/1000 
        success++
        recorddata(time)
        console.log(success)
        if(success==20){
        $('#reset').toggle()
        }else{
            resetboard()
        }
    }else{
        if(moveablelist.length!=0){   
var random_location=Math.floor((Math.random() * (moveablelist.length-1)) + 0);
random_location=moveablelist[random_location]
    queenmovement(random_location)
    queencount++

    }
    if(queencount<length&&moveablelist.length==0){
        console.log('failed')
        resetboard()
    }
    }
}
function resetboard(){
    var elem = document.querySelector('table');
elem.parentNode.removeChild(elem);
makeboard()
queencount=0
moveablelist=board
solve8queen_start()
}
var timetook=[]

function recorddata(time){
timetook.push(time)
if(success==20){
     console.log('length:',length,' average time:',timetook[19]/20)
}
   



}
$('#reset').click(function(){
    $('#reset').toggle()
    success=0
    t0=performance.now();
})


