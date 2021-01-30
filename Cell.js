class Cell{


constructor({x,y,gx,gy,metal_type,abs_x,abs_y}){
this.position = {x: x, y: y}
this.absolute_position = {x: abs_x, y: abs_y}
this.metal_type = metal_type || undefined;
this.game_position = {gameX:gx,gameY:gy}
this.render_buttons = []

for(let i = 0; i < 15; i++){
  this.render_buttons[i] = new Costom_Buttons({
  x: this.absolute_position.x,
  y: this.absolute_position.y,
  w: 60,
  h: 15,
  style: "rect",
  round: 0,
  drag: false,
  fontSize: 12,
  pressedLook: false,
  inactive: false,
  fill: color(200,100,70),
  text: metal_arrey[i][1]
})}
this.activ = false;
}


render_grid(){

  stroke(255)
  strokeWeight(1)
  noFill();
rect(this.position.x,this.position.y,44,44);
}

render_picker(){
if(this.activ){
for(let i = 0; i <= this.render_buttons.length-1; i++){
  this.render_buttons[i].mf({x:this.position.x+30,y:this.position.y+i*15+15});
if(this.render_buttons[i].mouseClicked(LEFT)){

  switch(i){
    case 0: this.metal_type = "Stara m."
    menu_cell = undefined;
            this.activ = false;
    break;
    case 1: this.metal_type = "miedz"
    menu_cell = undefined;
    this.activ = false;
  break;
    case 2: this.metal_type = "braz"
    menu_cell = undefined;
    this.activ = false;
  break;
    case 3: this.metal_type = "R. Cienia"
    menu_cell = undefined;
    this.activ = false;
  break;
    case 4: this.metal_type = "Srebro"
    menu_cell = undefined;
    this.activ = false;
  break;
    case 5: this.metal_type = "Adamant."
    menu_cell = undefined;
    this.activ = false;
  break;
    case 6: this.metal_type = "Złoto"
    menu_cell = undefined;
    this.activ = false;
  break;
    case 7: this.metal_type = "Agapit"
    menu_cell = undefined;
    this.activ = false;
  break;
    case 8:  this.metal_type = "Mythril"
    menu_cell = undefined;
    this.activ = false;
  break;
    case 9: this.metal_type = "Veryt"
    menu_cell = undefined;
    this.activ = false;
  break;
    case 10: this.metal_type = "Merkit"
    menu_cell = undefined;
    this.activ = false;
  break;
    case 11: this.metal_type = "Meytyth."
    menu_cell = undefined;
    this.activ = false;
  break;
    case 12: this.metal_type = "Durcynox"
    menu_cell = undefined;
    this.activ = false;
  break;
    case 13: this.metal_type = "Valoryt"
    menu_cell = undefined;
    this.activ = false;
  break;
    case 14: this.metal_type = "Numyth"
    menu_cell = undefined;
    this.activ = false;
    break;
  }

}
}}
}

render_dots(){
  push();
this.color_picker();

if(this.metal_type != undefined){
if(this.fill != undefined){
  noStroke();
  fill(this.fill)
  ellipseMode(CENTER)
  ellipse(this.position.x+22,this.position.y+22,10,10)
}}
pop();
}

render_rects(){
  push();
this.color_picker();
  if(this.metal_type != undefined){
  if(this.fill != undefined){
  stroke(this.fill)
  strokeWeight(2)
  noFill();
rect(this.position.x+2,this.position.y+2,40,40)
pop();
}}
}

mouse_on_cell(){
    if (mouseX > this.position.x && mouseX < this.position.x+44 &&
        mouseY > this.position.y && mouseY < this.position.y+44){
          return true;
  }
}

Pressed(key){
  if (this.mouse_on_cell()){
    if (mouseWentUp(key)){

      return true;
    }
  }
}

Pressed_right(){
  if (this.mouse_on_cell()){
    if (mouseWentUp(RIGHT)){
return true
    }
  }
}

color_picker(){
  switch(this.metal_type){
    case "Stara m.": this.fill = color(102, 153, 153)
    break;
    case "miedz": this.fill = color(204, 153, 0)
  break;
    case "braz": this.fill = color(102, 51, 0)
  break;
    case "R. Cienia": this.fill = color(38, 38, 38)
  break;
    case "Srebro": this.fill = color(102, 143, 153)
  break;
    case "Adamant.": this.fill = color(71, 71, 107)
  break;
    case "Złoto": this.fill = color(255, 255, 26)
  break;
    case "Agapit": this.fill = color(255, 153, 230)
  break;
    case "Mythril":  this.fill = color(77, 0, 77)
  break;
    case "Veryt": this.fill = color(0,255,0)
  break;
    case "Merkit": this.fill = color(128, 0, 0)
  break;
    case "Meytyth.": this.fill = color(0, 51, 0)
  break;
    case "Durcynox": this.fill = color(102, 0, 51)
  break;
    case "Valoryt": this.fill = color(0, 153, 255)
  break;
    case "Numyth": this.fill = color(255)
    break;
  }
}

data_info(i){
  let metal;
  if(this.metal_type != undefined){
  metal = this.metal_type}
  else {
    metal = "Brak"}
  fill(255);
rect(this.position.x+22,this.position.y+22,100,80,20)
fill(0)
textSize(12)
text("Kratka: " + i, this.position.x+32,this.position.y+52)
text("Metal: " + metal, this.position.x+32,this.position.y+72)

}
}
