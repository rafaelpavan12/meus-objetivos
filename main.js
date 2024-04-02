const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");
contadores[0].textContent = calculaTempo(tempoObjetivo1);
contadores[1].textContent = calculaTempo(tempoObjetivo2);
contadores[2].textContent = calculaTempo(tempoObjetivo3);
contadores[3].textContent = calculaTempo(tempoObjetivo4);
const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
contadores[0].textContent = calculaTempo(tempoObjetivo1); //Antes

contadores[0].textContent = calculaTempo(tempos[0]); // Depois
// Para cada objetivo na lista de contadores
for (let i=0; i<contadores.length;i++)
    //Calcular o tempo usando a função e associá-lo ao objetivo
            contadores[i].textContent = calculaTempo(tempos[i]);   
            function atualizaCronometro(){
                for (let i=0; i<contadores.length;i++){
                    contadores[i].textContent = calculaTempo(tempos[i]);   
                }
            }
            function comecaCronometro(){
                atualizaCronometro();
                setInterval(atualizaCronometro,1000);
            }
            
            comecaCronometro();
            return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
            if (tempoFinal > 0){
                return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
            } else {
                return "Prazo Finalizado";
            }
                                    