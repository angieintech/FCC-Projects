let count = 0;

function cc(card) {
 
  if (card > 1 && card > 7) {
    count++;
  } else if (card === 10 || card === 'JQKA')
    count--;
  if (count > 0) return count + " Bet";
    return count + " Hold";
  
}

