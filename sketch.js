let mapa;
let cell;
let cells = [];
let curent_cell;
let filtering;
let render_grid = false, render_rects = false, render_dots = false;
let mapaY = -250;
let save_json = {}
let menu_cell;
let boxF;
let metal_arrey = [
  [false,"Stara m."],
  [false,"miedz"],
  [false,"braz"],
  [false,"R. Cienia"],
  [false,"Srebro"],
  [false,"Adamant."],
  [false,"Złoto"],
  [false,"Agapit"],
  [false,"Mythril"],
  [false,"Veryt"],
  [false,"Merkit"],
  [false,"Meytyth."],
  [false,"Durcynox"],
  [false,"Valoryt"],
  [false,"Numyth"]
]


function preload(){
mapa = loadImage("gotowa_kopalnia45.png")
button1 = loadImage("Files/button1.png");
button2 = loadImage("Files/button2.png");
button3 = loadImage("Files/button3.png");
load_file = loadJSON("ores.json");
buttons_style = [button1,button2,button3]

}
function setup() {
  frameRate(30)
  sceen = createCanvas(windowWidth,windowHeight,P2D);
  sceen.style('display', 'block');
  save_json["position"] = [];
  save_json["absolute_position"] = [];
  save_json["game_position"] = [];
  save_json["metal_type"] = [];
  meter = new FPSMeter();
  boxF = new Function_box();

  //tworzenie pustej mapy (nie uruchamiac bez powodu)
 // for (let y = 0; y < 61; y++){
 //    for (let x = 0; x <33; x++){
 // cells.push(new Cell({x:x*44+27,y:y*44,gx:x,gy:y,abs_x:x*44+27,abs_y:y*44}))}}

//wczytywanie mapy rudy
 load_ore_map();
}

function draw() {
  background(0);
  image(mapa,-956,mapaY,3000,3000);

//sprawdza czy jest uruchomiony jakikolwiek filtr
  for (let j = 0; j < metal_arrey.length; j++){
    if(metal_arrey[j][0] == true){
      filtering = true
    break;
  }
  else if(j == metal_arrey.length-1){
      filtering = false
  }
}

//filtrowanie
if (filtering == true){
  for (let i = 0; i < cells.length; i++){
    if (render_grid == true){
        cells[i].render_grid();}
    for (let j = 0; j < metal_arrey.length; j++){
      if(cells[i].metal_type == metal_arrey[j][1] && metal_arrey[j][0] == true){
        if (render_rects == true){
          cells[i].render_rects();}
        if (render_dots == true){
          cells[i].render_dots();}}
    }
  }
}

//renderowanie bez filtrow
if (filtering == false){
  for (let i = 0; i < cells.length; i++){
    if (render_grid == true){
        cells[i].render_grid();}
    if(cells[i].metal_type != undefined){
      if (render_rects == true){
         cells[i].render_rects();}
      if (render_dots == true){
         cells[i].render_dots();}

   }
 }
}
//sprawdzanie kliku poza guziki wyboru rudy (wylaczenie wyboru)
if(cells.length != 0){
  if(render_grid){
    for (let i = 0; i < cells.length; i++){
      if(cells[i].Pressed(LEFT) && mouseY > 40 && i != menu_cell && menu_cell != undefined){
        if (mouseX < cells[menu_cell].render_buttons[0].render.x ||
            mouseX > cells[menu_cell].render_buttons[0].render.x + cells[menu_cell].render_buttons[0].render.w ||
            mouseY < cells[menu_cell].render_buttons[0].render.y ||
            mouseY > cells[menu_cell].render_buttons[14].render.y + cells[menu_cell].render_buttons[14].render.h){
          if(i != menu_cell){
              cells[menu_cell].activ = false
              menu_cell = undefined;
          }
        }
      }
      else if(cells[i].Pressed(RIGHT) && mouseY > 40 && menu_cell == undefined){
          menu_cell = i
          cells[i].activ = !cells[i].activ;
      }
    }
  }
  for (let i = 0; i < cells.length; i++){
    if (render_grid){
        cells[i].render_picker();
          if (keyIsDown(CONTROL) && cells[i].mouse_on_cell()){
              cells[i].data_info(i);
      }
    }
  }
}


boxF.render(); // renderowanie okienka na gorze ekranu  z filtrami itp
meter.show(); // pokazywanie licznika FPS
meter.tick(); // Cykl licznika

}

function mousePressed(){

}
function mouseWheel(event){
  if(menu_cell == undefined){
    mapaY -= event.delta
    for (let i = 0; i < cells.length; i++){
      cells[i].position.y -= event.delta};
  }
}

function save_file(){
  for (let i = 0; i < cells.length; i++){
    save_json["position"][i] = cells[i].position;
    save_json["absolute_position"][i] = cells[i].absolute_position;
    save_json["metal_type"][i] = cells[i].metal_type;
    save_json["game_position"][i] = cells[i].game_position;
  }
  saveJSON(save_json, 'ores.json')
}

function load_ore_map(){
  for (let i = 0; i < load_file["position"].length; i++){
    cells.push(new Cell({x:load_file["absolute_position"][i].x,
                         y:load_file["absolute_position"][i].y,
                         gx:load_file["game_position"][i].gameX,
                         gy:load_file["game_position"][i].gameY,
                         metal_type: load_file["metal_type"][i],
                         abs_x: load_file["absolute_position"][i].x,
                         abs_y: load_file["absolute_position"][i].y
                       }))
  }
}
