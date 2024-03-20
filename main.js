let productos=document.getElementsByTagName("input");
let boton=document.querySelector("button");
console.log(productos);
// function funcion1(){
//     let listaProduct1=[];
//     for(let i=0;i<productos.length;i++){
//         let valor=productos[i].value;

//         listaProduct1.push(valor);
            
        
//     }
//     console.log(listaProduct1);
//     return listaProduct1;
//}
boton.addEventListener("click",function(event){
    event.preventDefault();
    let listaProduct1=[];
    for(let i=0;i<productos.length;i++){
        let valor=productos[i].value;
        if(i%2==1){

        

        listaProduct1.push(valor);
        }
        
    }
    console.log(listaProduct1);
    let sum=0;
    for(let i=0;i<listaProduct1.length;i++){
        sum=sum+parseFloat(listaProduct1[i]);
    }
    console.log(sum);
    let nuevoEscrito=document.createElement("h2");
    let nuevoElemento=document.createElement("h1");
    nuevoEscrito.textContent="suma total";
    nuevoElemento.textContent=sum;
    document.body.appendChild(nuevoEscrito);
    document.body.appendChild(nuevoElemento);
    return sum;
});