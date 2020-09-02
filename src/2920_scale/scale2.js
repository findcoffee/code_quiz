//https://www.acmicpc.net/problem/2920
// 다장조는 c d e f g a b C, 총 8개 음으로 이루어져있다.이 문제에서 8개 음은 다음과 같이 숫자로 바꾸어 표현한다.c는 1로, d는 2로, ..., C를 8로 바꾼다.
// 1부터 8까지 차례대로 연주한다면 ascending, 8부터 1까지 차례대로 연주한다면 descending, 둘 다 아니라면 mixed 이다.
// 연주한 순서가 주어졌을 때, 이것이 ascending인지, descending인지, 아니면 mixed인지 판별하는 프로그램을 작성하시오.

const ASC = "ascending";
const DESC = "descending";
const MIXED = "mixed";

const MIN = 1;
const MAX = 8;

function music(input) {
  const values = input.split(" ");
  const valInt = values.map((value) => parseInt(value));

  const initValue = 0;
  let result = 0;

  if (valInt[0] === MIN || MAX) {
    valInt.reduce((initValue, current) => {
      if (initValue < current) {
        result++;
      } else if (initValue > current) {
        result--;
      }
      return current;
    });

    if (result === MAX - MIN) {
      console.log(ASC);
    } else if (result === -(MAX - MIN)) {
      console.log(DESC);
    } else {
      console.log(MIXED);
    }
  } else {
    console.log(MIXED);
  }
}

music("1 2 3 4 5 6 7 8");
music("8 7 6 5 4 3 2 1");
music("1 3 2 4 5 6 7 8");
music("8 3 2 4 5 6 7 1");
music("1 2 3 4 5 6 8 7");
music("8 7 6 5 4 3 1 2");
music("2 3 4 5 1 6 7 8");
