let cardcount = 0;

function cc(card) {
  if (cardcount > 0) return cardcount + " Bet";
    return cardcount + " Hold";
  
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

