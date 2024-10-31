// Meal Maker //

let menu = {
    _meal: '',
    _price: 0,
  
      set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
          this._meal = mealToCheck;
        }
      },
      set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
          this._price = priceToCheck;
        }
      },
  
      get todaysSpecial() {
        if (menu._meal && menu._price) {
          return `Today's special is ${menu._meal} for $${menu._price}!`;
        } else if (!menu._meal || !menu._price) {
          return "Meal or price was not set correctly";
        }
      },
  };
  
  menu.meal = 8;
  menu.price = 'Pizza';
  
  console.log(menu.todaysSpecial);

  // Meal Maker //



  // Team Stats //

  const team = {
    _players: 
      [{firstName: 'Tyler', lastName: 'Hyndman', age: 27},
      {firstName: 'Cara', lastName: 'Hyndman', age: 27},
      {firstName: 'Eve', lastName: 'Hyndman', age: 1}],
    _games: 
      [{opponent: 'Eagles', teamPoints: 30, opponentPoints: 40},
      {opponent: 'Vikings', teamPoints: 20, opponentPoints: 15},
      {opponent: 'Rams', teamPoints: 45, opponentPoints: 5}],
  
      get players() {
        return this._players;
      },
  
      get games() {
        return this._games;
      },
  
      addPlayer(newFirstName, newLastName, newAge) {
        const player = {
          firstName: newFirstName,
          lastName: newLastName,
          age: newAge
        };
        this._players.push(player);
      },
  
      addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
          opponent: newOpponent,
          teamPoints: newTeamPoints,
          opponentPoints: newOpponentPoints
        };
        this._games.push(game);
      }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Chiefs', 30, 9);
  
  console.log(team._players);
  console.log(team._games);
  

// Team Stats //  
  
  
  
  
  