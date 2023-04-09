body = document.body;
let circleArray = [];
function increaseSize(myDiv) {
    let width = myDiv.circle.clientWidth + myDiv.speed;
    let height = myDiv.circle.clientHeight+ myDiv.speed;
    if (width <2){
        myDiv.speed = 5;
    }
    
    else if(width >= window.innerWidth/3 )
    {
        myDiv.speed = -7;
    }
    else  {

        myDiv.circle.style.width = width + "px";
        myDiv.circle.style.height = height + "px";
        myDiv.circle.style.transform = `rotateZ(${width/2}deg)`;
        myDiv.circle.style.top = (window.innerHeight - height)/2 +"px";
        myDiv.circle.style.left = (window.innerWidth - width)/2 + "px";
       
      }
  }
  
for(let i =0;i<15;i++)
{

    circle = document.createElement("div");
    circle.style.width = 2 + i*20 + "px";
    circle.style.height = 2 + i*20 + "px";
    circle.classList.add('circle');
    body.append(circle);
    circleArray.push({circle, speed: 9});
}
setInterval(function(){

    circleArray.forEach((ele)=>{
        increaseSize(ele);
    })
}, 18);