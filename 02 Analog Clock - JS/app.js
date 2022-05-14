const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setClock(){
    const date = new Date();

    const seconds = date.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    minuteHand.style.transform=`rotate(${secondsDegrees}deg)`
    
    const minutes = date.getMinutes();
    const minuteDegrees = ((minutes/60)*360) +((seconds/60)*6)+90;
    secondHand.style.transform = `rotate(${minuteDegrees}deg)`;
    
    const hour = date.getHours();
    const hourDegrees = ((hour/12)*360) + ((minutes/60)*30)  +90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`


}
setInterval(setClock,1000)
setClock();