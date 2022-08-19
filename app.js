function findUserByUsername(userArr,username){
    return userArr.find(function(user){
        return user.username === username;

    })

}

function removeUser(usersArr,username){
    let foundIndex = usersArr.findIndex(function(user){
        return user.username === username;
    })
    if(foundIndex === -1){
        return undefined;
    }
    return usersArr.splice(foundIndex,1)[0];
}