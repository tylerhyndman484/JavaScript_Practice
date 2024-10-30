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