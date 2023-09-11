const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
    }) 
    function calcFlujo(peso){
        let resto = peso;
        let flujo = 0;
        if (resto<=10){
                flujo= resto*100;
            }
        else{
            if (resto<=20){
                flujo=10*100+((resto-10)*50);
            }
            else{ 
                if (resto<=30){
                flujo=10*100+(10*50)+((resto-20)*20);
                }
            }
        }
        return flujo;
    }   
CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').valueAsNumber
        if (DATO > 0 && DATO <= 30){
            ERROR.style.display = 'none'
            let flujo = calcFlujo(DATO);
            let mantenimiento = flujo*1.5;
            FLU.innerHTML = flujo + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        }
         else if (DATO>30){
            let SuperficieCorporal = ( (DATO * 4) + 7) / (DATO + 90);
            FLU.innerHTML = SuperficieCorporal*1500 + ' cc/hr' ;
            MAN.innerHTML = SuperficieCorporal*2000 + ' cc/hr' ;
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        } 
            else {
                ERROR.style.display = 'block';
                FLU.style.display = 'none';
                MAN.style.display = 'none';       
            }
    })
    
