const prcnt = document.getElementById("pourc");
const nombre = document.getElementById("nombr");
const rslt = document.getElementById("result");

function calculPcnt() {
    const porcntValue = prcnt.value;
    const nombrreValue = nombre.value;
    const totalValue = (nombrreValue*porcntValue)/100;

    document.getElementById("tot").innerHTML =  porcntValue+ " % de " +nombrreValue+ " = "+totalValue;
    //alert("La reponse est "+totalValue)
    
}
rslt.addEventListener("click",calculPcnt);