let mapa;
let scale;
let cell;
let cells = [];
let curent_cell;
let filtering;
let render_grid = false;
let render_rects = false;
let render_dots = false;
let mapaY = -250;
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
let save_json = {}
let menu_cell;
let boxF;
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

 meter = new FPSMeter();
 boxF = new Function_box();
 // for (let y = 0; y < 66; y++){
 //    for (let x = 0; x <33; x++){
 // cells.push(new Cell({x:x*44+27,y:y*44,gx:x,gy:y,abs_x:x*44+27,abs_y:y*44}))}}
load_ore_map();

cells[40].metal_type = "Veryt"
}

function draw() {
  background(0);
  image(mapa,-956,mapaY,3000,3000);


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
if(cells.length != 0){
  if(render_grid == true){
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




//   if(i != menu_cell){
//     cells[menu_cell].activ = false
//     menu_cell = undefined;
//   }
//  console.log(i);
}
  else if(cells[i].Pressed(RIGHT) && mouseY > 40 && menu_cell == undefined){
    menu_cell = i
    console.log(i)
    cells[i].activ = !cells[i].activ;
  }
}
}
for (let i = 0; i < cells.length; i++){
  if (render_grid == true){
      cells[i].render_picker();
      if (keyIsDown(CONTROL) && cells[i].mouse_on_cell()){
    cells[i].data_info(i);
      }}}
}
boxF.render();
meter.show();
meter.tick();


}

function mousePressed(){


}
function mouseWheel(event) {
  if(menu_cell == undefined){
  mapaY -= event.delta
  for (let i = 0; i < cells.length; i++){
       cells[i].position.y -= event.delta};
}
}

function save_file(){
save_json.arrey = cells;
saveJSON(save_json, 'ores.json')


}

function load_ore_map(){
  for (let i = 0; i < load_file["arrey"].length; i++){
    cells.push(new Cell({x:load_file["arrey"][i].absolute_position.x,
                         y:load_file["arrey"][i].absolute_position.y,
                         gx:load_file["arrey"][i].game_position.x,
                         gy:load_file["arrey"][i].game_position.y,
                         metal_type: load_file["arrey"][i].metal_type,
                         abs_x: load_file["arrey"][i].absolute_position.x,
                         abs_y: load_file["arrey"][i].absolute_position.y
                       }))}
}
