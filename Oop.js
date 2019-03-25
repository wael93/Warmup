// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.



var makeGame = function(){


  var object={};
  object.upper=upperbound;
  object.randInt = randInt(upper)
  object.counter = 0
  object.guessMyNumber = guessMyNumber;
  object.giveUp =giveUp
  object.guessMyNumber=guessMyNumber;
}



var  randInt = function(n) {



    return Math.floor(Math.random() * (n + 1));
}







 var guessMyNumber = function(n){
      counter++;
      if (n > this.upper) {
        return "Out of bounds! Please try a number between 0 and " + this.upperbound + ".";
      } else if (n === this.rand) {
        return "You guessed my number!";
      }
      return "Nope! That wasn't it!";




 }

 var giveUp = function(){

return this.rand;




 }


var numOfGuesses =function(){


return this.counter;



}

// function makeGame(upperbound){
//   var upper=upperbound;
//   var rand=randInt(upper)
//   var counter=0;
//   return {
//    guessMyNumber:function(n){
//      counter++;
//      if (n > upper) {
//        return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
//      } else if (n === rand) {
//        return "You guessed my number!";
//      }
//      return "Nope! That wasn't it!";
//    },
//    giveUp:function(){
//      return rand;
//    },
//    numOfGuesses:function(){
//      return counter;
//    }
//   }
// }