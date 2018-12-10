/*
* Créez une page html contenant une balise "p" avec comme id "horloge".

* Créez une fonction "temps" qui affichera la date dans la balise "p"
et faites en sorte qu'elle se mette à jour à chaque seconde.
*/
function temps() {

    var d = new Date();
    console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
    document.getElementById("horloge").innerHTML = d.getFullYear()+" "+d.getDate()+" "+d.getMonth()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

}
setInterval(temps, 1000);
