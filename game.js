module.exports = {
    getUpdatedVelocity,
}
function getUpdatedVelocity(keyCode){
    const keys = []
    keys[keyCode] = true
    if(keys[87]){
        return {x: 0, y: 3}
        //up
    }
    if(keys[83]){
        return {x: 0, y: -3}
        //down
    }
    if(keys[65]){
        return {x: 3, y: 0}
        //left
    }
    if(keys[68]){
        return {x: -3, y: 0}
        //right
    }
}