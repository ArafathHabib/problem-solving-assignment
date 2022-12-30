function tinyFriend(names){
    var tinyFriend = names[0];
    if (names.length == 0){
        return "Names input can't be empty"
    }else{
        for(i = 0; i < names.length; i++){
            var element = names[i];
            var letter = element.length;
            if(letter < tinyFriend.length){
                tinyFriend = element;
            }
        }
    }
return tinyFriend;
    }

var names = ["Arafath", "Shakib", "Saumik", "Talha", "Om"];
var result = tinyFriend(names);
console.log(result);