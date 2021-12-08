(function(){
    const pictures = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
    ];
    const buttons = document.querySelectorAll('.btn')
    const imageDIV = document.querySelector('.img-container')
    let counter = 0
    console.log(buttons)
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            console.log(e);
            if(button.classList.contains('btn-left')){
                counter--
                if(counter < 0 ){
                    counter = pictures.length -1
                }
                imageDIV.style.backgroundImage = `url('img/${pictures[counter]}.jpg')`
            }
            if(button.classList.contains('btn-right')){
                counter++
                if(counter > pictures.length -1){
                    counter =0
                }
                imageDIV.style.backgroundImage = `url('img/${pictures[counter]}.jpg')`
            }
        })
    })
})();
