alert("Hola mundo2");

function compararNum() {
    const var1 = prompt("ingrese el primer número");
    const var2 = prompt("ingrese el segundo número");
    const var3 = prompt("ingrese el tercer número");
    const vector=[var1,var2,var3];
    const ordenarVector=vector.sort((a,b)=>a-b);
    const reverseVector=ordenarVector.reverse();
  
    console.log(reverseVector);
    //se compara si hay algun numero igual
    if ((var1 === var2) && (var1 === var3)) {
        document.getElementById("container1").innerHTML = `<p>Los numeros son iguales 🎉🎉🎉</p>
                <P>la secuencia es : <br>
               ${var1} ${var2} ${var3}</P>
                `;
    } else {
        //se compara si los numeros son total mente diferentes
        if ((var1 > var2) && (var1 > var3)) {
            if (var2 > var3) {
             document.getElementById("container1").innerHTML = `<p>El número mayor es ${var1}</p><p>El número del medio es ${var2}</p><p>El número menor es ${var3}</p>
             <P>la secuencia es : <br>${ordenarVector}</P>`
            } else {
                document.getElementById("container1").innerHTML = `<p>El número mayor es ${var1}</p><p>El número del medio es ${var3}</p><p>El número menor es ${var2}</p>
                 <P>la secuencia es : <br>${ordenarVector}</P>`           
            }
        } else if ((var2 > var1) && (var2 > var3)) {
            console.log(`${var2}es mayor`)
            if (var1 > var3) {
                document.getElementById("container1").innerHTML =`<p>El número mayor es ${var2}</p><p>El número del medio es ${var1}</p><p>El número menor es ${var3}
                </p><P>la secuencia a : <br>${ordenarVector} y </P>`
            } else {
                 document.getElementById("container1").innerHTML = `<p>El número mayor es ${var2}</p><p>El número del medio es ${var3}</p><p>El número menor es ${var1}</p>
                 <P>la secuencia es : <br>${ordenarVector} y </P>`
            }
        } else if ((var3 > var1) && (var3 > var2)) {
            if (var1 > var2) {
                document.getElementById("container1").innerHTML = `<p>El número mayor es ${var3}</p><p>El número del medio es ${var1}</p><p>El número menor es ${var2}</p>
                <P>la secuencia es : <br>${ordenarVector}</P>`
            } else {
                document.getElementById("container1").innerHTML = `<p>El número mayor es ${var3}</p><p>El número del medio es ${var2}</p><p>El número menor es ${var1}</p>
                <P>la secuencia es : <br>${ordenarVector}</P>`
            }
        }
    }
}