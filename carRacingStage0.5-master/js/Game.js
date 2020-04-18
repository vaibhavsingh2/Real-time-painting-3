class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  static updateDrawing(drawings){
    database.ref('/').update({
      drawings: drawings
        });
      }
 async start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
    
      form = new Form()
      form.display();

    }
  
  }
play(){
  form.hide();
  //textSize(30);
  //text("Game Start",20,20);
  Player.getPlayerInfo();
  if(allPlayers!==undefined){
  //var dp=130;
  var index=0;
  var x=0;
  var y=0;

  for(var plr in allPlayers){
    index++;
    x=x+200;
    y=displayHeight-allPlayers[plr].distance;

    if(index===player.index){
      
    }
  }
}

}
}
