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
        let superficie = 0
        if (resto<=10){
                flujo= resto*100;
            }
        else{
            if (resto<=20){
                flujo=10*100+((20-resto)*50);
            }
            else{ 
                if (resto<=30){
                flujo=10*100+(10*50)+((30-resto)*20);
                }
                else{ 
                    if (resto>30){
                    let superficie = ((resto*4)+7)/(resto+90);
                    flujo = superficie*1500;
                    }
                }
            }
        }
        return flujo;
    }
    
