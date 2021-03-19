class Game{
    constructor()
}
readState=Database.ref('gameState');
                readState.on(value,function(data)){
                    gameState=data.val();
                } 
                if(gameState!="hungry"){
                feed.hide();
                addFood.hide();
                dog.remove();
                else{
                    feed.show();
                    addFood.show();
                    dog.addImage(sadDog);
                }
                }
                function update(state){
                    database.ref('/').update({
                        gameState:state
                    });
                }
    