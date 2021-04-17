


const frase = "https://quote-garden.herokuapp.com/api/v3/quotes";

const buscador = document.querySelector('#buscador');
const boton = document.querySelector('#boton');
const resultados = document.querySelector('#resultados');

const filtrar = () =>{
  resultados.innerHTML = '';
  console.log(buscador.value)
  const texto = buscador.value.toLowerCase();
  for (let busqueda of frase){
    let nombre = frase.data.quotes.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
        resultados.innerHTML +=  '<li> ${busqueda.nombre} - valor: ${busqueda.valor} </li>'     
      
         
        
    }
  }
  if(resultados.innerHTML === ''){
    resultados.innerHTML +=  '<li>Busqueda no encontrada </li>'
  }
}
boton.addEventListener('click', filtrar);

window.addEventListener('load',random); 

function random(){
    let primer = document.getElementById('primer');
    let segundo = document.getElementById('segundo');
    let tercero = document.getElementById('tercero');
    let cuarto = document.getElementById('cuarto');
    
    let autor = document.getElementById('autor');
    let genre1 = document.getElementById('genero1');
    let genre2 = document.getElementById('genero2');
    let genre3 = document.getElementById('genero3');
    let genre4= document.getElementById('genero4');
    fetch(frase)
    .then(res => res.json())
    .then(quotes => {
        
        console.log(quotes)
        
            var i = Math.floor(Math.random()*quotes.data.length);
            

        autor.innerHTML = quotes.data[i].quoteAuthor
        primer.innerHTML = quotes.data[i].quoteText
        genre1.innerHTML = quotes.data[i].quoteGenre
    
        segundo.innerHTML = quotes.data[i+1].quoteText
        genre2.innerHTML = quotes.data[i].quoteGenre
    
        tercero.innerHTML = quotes.data[i+2].quoteText
        genre3.innerHTML = quotes.data[i].quoteGenre
    
        cuarto.innerHTML = quotes.data[i+3].quoteText
        genre4.innerHTML = quotes.data[i].quoteGenre
        
    
    })
    } 

    function autocompletado () {
        document.getElementById("boton").innerHTML = '';
  
       
  
        var pal = document.getElementById("buscador").value;
        var tam = pal.length;
        for(indice in frases){
          var nombre = preguntas[indice];
          var str = nombre.substring(0,tam);
          if(pal.length <= nombre.length && pal.length != 0 && nombre.length != 0){
            if(pal.toLowerCase() == str.toLowerCase()){
              var node = document.createElement("LI");
              var textnode = document.createTextNode(preguntas[indice]);
              node.appendChild(textnode);
              document.getElementById("demo").appendChild(node);
            } else {
              alert('no')
            }
          }
        }
      }