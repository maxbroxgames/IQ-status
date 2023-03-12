function imt() {
    let w = document.getElementById('w') .value;
    let imt = w;
    if (imt <= 24){
        document.getElementById('status').innerText = 'глубокая умственная отсталость';
    }
    else if (imt <= 39){
        document.getElementById('status').innerText = 'тяжелая умственная отсталость';
    }
    else if (imt <= 54){
        document.getElementById('status').innerText = ' умеренная умственная отсталость';
    }
    else if (imt <= 69 ){
        document.getElementById('status').innerText = 'лёгкая умственная отсталость';
    }  
    else if (imt <= 84){
        document.getElementById('status').innerText = 'пограничная умственная отсталость';
    }
    else if (imt <= 114){
        document.getElementById('status').innerText = 'средний'; }
    else if (imt <= 129){
            document.getElementById('status').innerText = 'выше среднего'; }
    else if (imt <= 144){
                document.getElementById('status').innerText = ' умеренно одарённый'; }
    else if (imt <= 159){
                 document.getElementById('status').innerText = 'одарённый'; }
    else if (imt <= 179 ){
                 document.getElementById('status').innerText = 'исключительно одарённый'; }
    else if (imt => 180){
        document.getElementById('status').innerText = 'глубоко одарённый';
    }
    document.getElementById("result").innerText = imt;

}