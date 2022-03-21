let count = 0;

function cc(card) {
  var otherCards = ['J','Q','K','A'];
  if (card > -1 && card < 8) {
    count++;
  } else if (card === 10 || otherCards) {
    count--;
  }
  if (count > 0) return count + " Bet";
    return count + " Hold";
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

