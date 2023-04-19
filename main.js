//Constantes del juego
const COLUMNAS = 10;
const FILAS = 10;
const CANTIDAD_MINAS = 5;

//Variables con colores para los casilleros (NO se pudieron declarar como constantes ya que  la fn color sólo está definida para el setup y el draw)
var COLOR_CASILLERO_CON_MINA;
var COLOR_CASILLERO_SIN_MINA;
var COLOR_CASILLERO_MARCADO;

//Variables controladas al hacer click con el mouse: mousePressed()
var columnaPresionada;
var filaPresionada;
var hizoClick = false;

//Otras variables
var casillerosSinDescubrir;


function setup()
{
  createCanvas(500, 500);   //crea un lienzo o panel donde estará el juego. El primer parámetro es el ancho y el segundo el alto del lienzo.
  laMagiaDeLosProfes();
  

  //Asigno colores que se utilizarán. La fn color solo está definida para el setup y el draw
  COLOR_CASILLERO_CON_MINA = color("#FF0000");
  COLOR_CASILLERO_SIN_MINA = color("#1CC932");
  COLOR_CASILLERO_MARCADO = color("#278EF2");


  // Modificar/completar
  
  casillerosSinDescubrir=FILAS*COLUMNAS;

  ponerMinasTablero();
}


function draw() {
  if (hizoClick == true)
  {
    if(mouseButton == LEFT)
    {
      pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_SIN_MINA); //pinta el casillero clickeado. Modificar/completar
      
      if(tieneMinaCasillero(columnaPresionada, filaPresionada))
      {
        mostrarMinas();
        perder();
      } 
      else 
      {
        pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_SIN_MINA);
        descubrirCasillero(columnaPresionada, filaPresionada);
        if(ganoElJuego() == true){
          ganar();
        }
      }    
    }
    if(mouseButton == RIGHT)
    {
      pintarCasillero(columnaPresionada, filaPresionada, COLOR_CASILLERO_MARCADO);
    }
  hizoClick = false;  //Indico que ya "procesé" el click del usuario. NO modificar
}
}

function ganoElJuego()
{
  if(casillerosSinDescubrir==CANTIDAD_MINAS)
  {
    return true;
  }
  else
  {
  return false;   //Esto hace que NUNCA gane el juego. Modificar/completar
  }
}

function ponerMinasTablero()
{
    
    let cant = 0;
    while(cant < CANTIDAD_MINAS){
      num1 = Math.floor(Math.random()*FILAS);
      num2 = Math.floor(Math.random()*COLUMNAS);
      if(!tieneMinaCasillero(num2,num1)){
        ponerMinaCasillero(num2, num1);
        cant ++;
      }  
     
    }

}

function mostrarMinas()
{
  // Modificar/completar
  for(let x =0; x < COLUMNAS; x++){
    for(let y =0; y < FILAS; y++){
      if(tieneMinaCasillero(x,y)){
        pintarCasillero(x,y,COLOR_CASILLERO_CON_MINA);
      }
    }
  }
}

function contarMinasAlrededor(columna, fila)
{
  let cont = 0;
  let a1 = [-1,0,1,-1,0,1,-1,0,1];
  let a2 = [-1,-1,-1,0,0,0,1,1,1];
  for(let i = 0; i < 9; i++){
    if (tieneMinaCasillero(columna+a1[i],fila+a2[i])){
      cont++;
    }
  }
  return cont;   
}
