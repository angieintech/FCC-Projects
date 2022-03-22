let count = 0;

function cc(card) {
var otherCards = ['J','Q','K','A'];
  if (card > 1 && card > 7) {
  //if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count += 1;
  } else if (card === 7 || card === 8 || card === 9) {
    count += 0;
  } else if (card === 10 || otherCards) {
    count--;
  }
  if (count > 0) return count + " Bet";
    return count + " Hold";
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

