class Function_box{

constructor(){
this.filter_buttons = [];
this.render_buttons = [];
this.buttons_names = ["Stara m.","miedz","braz","R. Cienia","Srebro","Adamant.","Złoto","Agapit","Mythril","Veryt","Merkit","Meytyth.","Durcynox","Valoryt","Numyth"]
this.render_names = ["Grid","Rect","Dot"]
let y = 5;
let x = 780;
for(let i = 0; i <= 14; i++){
if(i == 7){y = 22,x = 320}
  this.filter_buttons[i] = new Costom_Buttons({
  x: x + i *62,
  y: y,
  w: 60,
  h: 15,
  style: "rect",
  round: 0,
  drag: false,
  fontSize: 12,
  pressedLook: true,
  background: buttons_style,
  inactive: false,
  fill: color(200,100,70),
  text: this.buttons_names[i]
})}
for(let i = 0; i <= 2; i++){
  this.render_buttons[i] = new Costom_Buttons({
  x: 400 + i * 65,
  y: 20,
  w: 60,
  h: 15,
  style: "rect",
  round: 0,
  drag: false,
  fontSize: 12,
  pressedLook: true,
  background: buttons_style,
  inactive: false,
  fill: color(200,100,70),
  text: this.render_names[i]
})}
}

render(){
//this.box.background(255,200);
fill(100)
rect(windowWidth/4,0,900,40,0,0,40,40)
for(let i = 0; i <= this.filter_buttons.length-1; i++){
   this.filter_buttons[i].mouseFunctions();
 if(this.filter_buttons[i].mouseClicked(LEFT)){
   switch(i){
     case 0:  metal_arrey[0][0] =  !metal_arrey[0][0];
     break;
     case 1: metal_arrey[1][0] =  !metal_arrey[1][0];
     break;
        case 2: metal_arrey[2][0] =  !metal_arrey[2][0];
     break;
     case 3: metal_arrey[3][0] =  !metal_arrey[3][0];
  break;
  case 4: metal_arrey[4][0] =  !metal_arrey[4][0];
break;
case 5: metal_arrey[5][0] =  !metal_arrey[5][0];
break;
case 6: metal_arrey[6][0] =  !metal_arrey[6][0];
break;
case 7: metal_arrey[7][0] =  !metal_arrey[7][0];
break;
case 8: metal_arrey[8][0] =  !metal_arrey[8][0];
break;
case 9: metal_arrey[9][0] =  !metal_arrey[9][0];
break;
case 10: metal_arrey[10][0] =  !metal_arrey[10][0];
break;
case 11: metal_arrey[11][0] =  !metal_arrey[11][0];
break;
case 12: metal_arrey[12][0] =  !metal_arrey[12][0];
break;
case 13: metal_arrey[13][0] =  !metal_arrey[13][0];
break;
case 14: metal_arrey[14][0] =  !metal_arrey[14][0];
break;
   }
 }
}
fill(255)
textSize(12)
text("Renderowanie:",450,15)
text("Filtrowanie:",690,23)
for(let i = 0; i <= 2; i++){
    this.render_buttons[i].mouseFunctions();
    if(this.render_buttons[i].mouseClicked(LEFT)){
   switch(i){
     case 0: render_grid = !render_grid;
     break;
     case 1: render_rects = !render_rects;
     break;
     case 2: render_dots = !render_dots;
     break;
   }
    }
}
}




}
