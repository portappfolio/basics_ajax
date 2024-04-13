const Http = new XMLHttpRequest();
const url='https://rickandmortyapi.com/api/character?page=1';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    
    //recorremos el array y
    // escribimos el HTML
    let stringHTML = ""

    JSON.parse(Http.responseText).results.forEach(objeto => {
        stringHTML += "".concat("<li>",objeto.name," (",objeto.species,")</li>")
    });

    //Accedemos al objeto tipo ul
    // con id "lista"
    const ul = document.getElementById('lista')

    //El objeti InnerHTML lo midificamos por el string
    //con los nuevos datos de la lista
    ul.innerHTML = stringHTML

}