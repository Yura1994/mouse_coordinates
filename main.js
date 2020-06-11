const cord = document.querySelector('.container'); // querySelectorAll - взять все елементы
 //console.log(cord);

 cord.addEventListener('mousemove', startRotate ); //mousemove - наведена мышка
    


function startRotate(event) {
     //console.log('Mouse');
    const namCord = this.querySelector('.nam_cord');
    
    namCord.innerText = "X coordinate - " + event.offsetX + "; \n Y coordinate - " + event.offsetY; //(координаты мышки)    
    
}