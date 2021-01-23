document.querySelector('.scrollTop').addEventListener('click', function(){
    var scrolled = window.pageYOffset;
    scrollTop(scrolled,1);
});

function scrollTop(endPos,i){
    setTimeout(function(){
        if(parseInt(endPos) > 0) {
            var y = parseInt(endPos) - 5 * parseInt(i);
            window.scroll(0, y); //Устанавливаем новую позицию вертикального скрола
            scrollTop(y,parseInt(i)+2);//Рекурсивный вызов функции
        }
    },10);

}