//https://www.acmicpc.net/problem/2798
//
//

function getRandomArbitray(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const MAX_CARD = 3;
const MAX_NUM = 100000;

function corruptCards(count, maxNumber) {
  let cards = [];
  const max = maxNumber > MAX_NUM ? MAX_NUM : maxNumber;
  for (let i = 0; i < count; i++) {
    const card = getRandomArbitray(1, max);
    cards.push(card);
  }

  return cards;
}

const sumFunc = (list) => {
  const initValue = 0;
  const result = list.reduce((initValue, curVal) => {
    return initValue + curVal;
  });

  return result;
};

function blackJack() {
  const nVal = getRandomArbitray(3, 100);
  const mVal = getRandomArbitray(10, 300000);

  const cards = corruptCards(5, 21);

  console.log(nVal);
  console.log(mVal);

  cards.sort((a, b) => {
    return b - a;
  });

  console.log(cards);

  let selectedCards = [];
  let flag = false;

  for (let firstNum = 0; firstNum < cards.length; firstNum++) {
    const one = cards[firstNum];
    selectedCards.push(one);
    console.log(one);
    for (let secondNum = 0; secondNum < cards.length; secondNum++) {
      if (firstNum === secondNum) {
        continue;
      }
      selectedCards.push(cards[secondNum]);
      for (let thirdNum = 0; thirdNum < cards.length; thirdNum++) {
        if (firstNum === thirdNum || secondNum === thirdNum) {
          continue;
        }
        selectedCards.push(cards[thirdNum]);

        const sum = sumFunc(cards);
        console.log("list:", selectedCards);

        if (sum <= 21) {
          console.log("selectedCard: ", selectedCards, " sum:", sum);
          break;
        }
        selectedCards = [];
      }
    }
  }
}

blackJack();
