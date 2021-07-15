module.exports = function FastPlayerLoad(dispatch) {
    
    dispatch.hook('S_SPAWN_USER', 15, (event) => {
        
        event.appearance = 0;
        
        //event.weapon = 0;
        event.body = 0;
        event.hand = 0;
        event.feet = 0;
        event.underwear = 0;
        event.head = 0;
        event.face = 0;
        event.mount = 0;
        
        event.showStyle = 0;
        event.styleHead = 0;
        event.styleFace = 0;
        event.styleBack = 0;
        event.styleWeapon = 0;
        event.styleBody = 0;
        event.styleFootprint = 0;
        
        return true;
    });
    
}
