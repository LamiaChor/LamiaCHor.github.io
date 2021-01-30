class Costom_Buttons{

constructor({x,y,w,h,style,drag,fontSize,text,round,background,fill,pressedLook,pressedLook_color,inactive_color,inactive,fontType,text_color}){
this.render = {
x: x || width/2,
y: y || height/2,
w: w || 20,
h: h || 20
}
this.scale = this.render.w/6.5
this.style = style;
this.drag = drag;
this.size = fontSize || this.scale;
//this.size = 15;
this.font_type = fontType;
this.text = text;
this.round = round || 0;
this.fill = fill;
this.fill_mouse_on = color(this.fill.levels[0]-75,this.fill.levels[1]-75,this.fill.levels[2]-75)
this.pressed = false;
this.background = background;
this.pressedLook = pressedLook;
this.preseedLook_color = pressedLook_color || color(0,150,0)
this.inactive = inactive ||  false;
this.inactive_color = inactive_color || color(51, 51, 77);
this.text_color = text_color || 255

}
show(){

  switch(this.style){
    case "rect":
        push();
          if(!this.background){
            if(this.pressedLook == true && this.pressed == true){
                fill(this.preseedLook_color);}
            else if (this.mouseON() && !this.inactive){
                fill(this.fill_mouse_on);}
            else if (this.inactive){
                fill(this.inactive_color)}
            else{
                fill(this.fill);}
            rect(this.render.x,this.render.y,this.render.w,this.render.h,this.round,this.round,this.round,this.round);
            if (this.text){
                  if(this.font_type == "fat"){stroke(this.text_color)}else{noStroke();}
                  fill(this.text_color);
                textSize(this.size);
                textAlign(CENTER,CENTER);
                text(this.text,this.render.x+this.render.w/2,this.render.y+this.render.h/2)
            }
          }
          if(this.background){
            if(Array.isArray(this.background)){
            // kiedy guzik jest nieaktywny
              if(this.pressed){
                image(this.background[2],this.render.x,this.render.y,this.render.w,this.render.h)
                if (this.text){
                  if(this.font_type == "fat"){stroke(this.text_color)}else{noStroke();}
                    fill(this.text_color);
                    textSize(this.size);
                    textAlign(CENTER,CENTER);
                    text(this.text,this.render.x+this.render.w/2,this.render.y+this.render.h/2)
                }
              }
            // kiedy guzik jest wcisniety lewym myszy ale nie puszczony
              else if (this.mouseON() && mouseDown(LEFT)){
                  image(this.background[1],this.render.x,this.render.y,this.render.w,this.render.h)
                  if (this.text){
                    if(this.font_type == "fat"){stroke(this.text_color)}else{noStroke();}
                      fill(this.text_color);
                      textSize(this.size);
                      textAlign(CENTER,CENTER);
                      text(this.text,this.render.x+this.render.w/2+2,this.render.y+this.render.h/2+2)
                  }
                }
            // guzik w stanie spoczynku(nie nacisniety)
              else{
                this.background[0];
                  image(this.background[0],this.render.x,this.render.y,this.render.w,this.render.h)
                  if (this.text){
                    if(this.font_type == "fat"){stroke(this.text_color)}else{noStroke();}
                      fill(this.text_color);
                      textSize(this.size);
                      textAlign(CENTER,CENTER);
                      text(this.text,this.render.x+this.render.w/2,this.render.y+this.render.h/2)
                  }
                }
            }
          }

        pop();
    break;
  }

}



mouseFunctions(){
  this.show();

}

mf({x,y}){
  this.render.x = x;
  this.render.y = y;
  this.show();
}



mouseON(){
  if (mouseX > this.render.x && mouseX < this.render.x+this.render.w &&
      mouseY > this.render.y && mouseY < this.render.y+this.render.h){
        return true;
  }
}

mouseClicked(key){
  if (!this.inactive){
    if (this.mouseON() && mouseWentUp(key)){
      this.pressed = !this.pressed;
      return true;}
    else {return false}
  }
}



}
