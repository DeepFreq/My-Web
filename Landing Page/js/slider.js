
(function(){
    
    const sliders = [...document.querySelectorAll('.test__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTest = document.querySelector('.test__body--show').dataset.id;
        value = Number(currentTest);
        value+= add;


        sliders[Number(currentTest)-1].classList.remove('test__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('test__body--show');

    }

})();