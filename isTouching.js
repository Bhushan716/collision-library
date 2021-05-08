function isTouching(stuff,puff){
    if (stuff.x - puff.x < puff.width/2 + stuff.width/2
      && puff.x - stuff.x < puff.width/2 + stuff.width/2
      && stuff.y - puff.y < puff.height/2 + stuff.height/2
      && puff.y - puff.y < puff.height/2 + stuff.height/2) {
      
      return true;
    }
    else {
      return false;
    } 
  }