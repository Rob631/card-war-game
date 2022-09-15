//values
let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
let suit = ['clubs', 'diamonds', 'hearts', 'spades'];
let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//class for cards
class Card{
    constructor(value, suit, rank){
        this.value = value;
        this.suit = suit;
        this.rank = rank;
    }
}

//class for the deck
class Deck{
    constructor(){
        this.deck = [];
    }
    buildDeck(){
        for(let i = 0; i < value.length; i++){
            for(let s = 0; s < suit.length; s++){
                this.deck.push(new Card(value[i], suit[s], rank[i]));
            }
        }
    }
    
    shuffleCards(){
        for(let i = 0; i < this.deck.length; i++){
            let randomI = Math.floor(Math.random() * 52);
            let tempDeck = this.deck[i];
            this.deck[i] = this.deck[randomI];
            this.deck[randomI] = tempDeck;
        }
        return;
    }
    
    //method to deal and slice card into player hands
    dealDeck(){
        player1.hand = (this.deck.slice(0,26));
         //console.log(player1.hand);
        player2.hand = (this.deck.slice(26,52));
         //console.log(player2.hand);
      }
      
      //function to start the game
       StartGame(){
           for(let i = 0; i < 26; i++){
               
              if(player1.hand[i].rank > player2.hand[i].rank){
              console.log("Player 1 wind the round");
              console.log(player1.hand[i]);
              console.log(player2.hand[i]);
              player1.score = player1.score + 1
              console.log(player1.score);
          } else if(player2.hand[i].rank > player1.hand[i].rank){
              console.log("Player 2 wind the round");
              console.log(player1.hand[i]);
              console.log(player2.hand[i]);
              player2.score = player2.score +1;
              console.log(player2.score);
              
          } else{
              console.log("Tie");
              console.log(player1.hand[i]);
              console.log(player2.hand[i]);
          }
      }
  }
}        

//classes forthe Players
class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
    
    //method to get score
    getScore(){
    return this.score;
    }
}

//Variables to call players       
let player1 = new Player("Roberto");
let player2 = new Player('Kamila');
//loging out the players with cards
console.log(player1, player2);

//variable to build the deck of cards shuffelled and seperated
let newDeck = new Deck;
newDeck.buildDeck();
newDeck.shuffleCards();
newDeck.dealDeck();
//calling for the game to start
newDeck.StartGame();
//logging out the scores of each player
console.log('Player 1 final Score', player1.getScore());
console.log('Player 2 final Score', player2.getScore());




        

        
        

    

   



    



    
 








