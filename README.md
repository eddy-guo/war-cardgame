# War

Crush your opponent in a personal recreation of the classic childhood card game, War. This was built using JavaScript classes and introduces basic object oriented programming.

Visit the deployed site here: https://warcardgame.vercel.app/

<p align="center"><img src="https://i.imgur.com/g1J6cLF.png" alt="pageLoad"></p>

## Getting Started

On pageload, the game starts with 26 cards per player, both decks face down. Once you click on your blue deck, the game starts! Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of their deck. If both cards are the same, both players take their respective card and puts them back on the bottom of their own deck. 

Once you click the blue deck to start playing, the deck counter will update immediately and remove one card from each deck. If you win, the following message will pop up;
<p align="center"><img src="https://i.imgur.com/kwsjriL.png" height="400" alt="win"></p>

If you tie, 
<p align="center"><img src="https://i.imgur.com/Oigvr8r.png" height="400" alt="draw"></p>

If you lose...
<p align="center"><img src="https://i.imgur.com/grNXBF6.png" height="400" alt="lose"></p>

Clicking the blue deck again will end the round, and the cards on the playing field will be moved to their respective decks depending on the result of the previous round. The deck counter will then automatically update.

For example, if you won the first round, the counter will now display 27-25 instead of the original 26-26. 
<p align="center"><img src="https://i.imgur.com/ZGYlq1N.png" height="400" alt="counter_update"></p>

## Built With

## Acknowledgements

- Full rulebook can be found here: https://bicyclecards.com/how-to-play/war/
- JavaScript30 ( https://github.com/wesbos/JavaScript30 ) for implementation tutorial.
