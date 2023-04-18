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
  for(let i =0; i < 5; i++){
    ponerMinasTablero()
  }
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
  num1 = floor(random()*FILAS);
  num2 = floor(random()*COLUMNAS);
  ponerMinaCasillero(num2,num1)
  // Modificar/completar
}

function mostrarMinas()
{
  // Modificar/completar
  for(let x =0; x < 10; i++){
    for(let y =0; y < 10; i++){
      if(tieneMinaCasillero(x,y)){
        pintarCasillero(x,y,COLOR_CASILLERO_CON_MINA);
      }
    }
  }
}

function contarMinasAlrededor(columna, fila)
{
  return 9;   //Esto hace que SIEMPRE cuente 9 minas alrededor. Modificar/completar
}
