//https://www.acmicpc.net/problem/2920

const ASC = "ascending";
const DESC = "descending";
const MIXED = "mixed";

function music(input) {
  const values = input.split(" ");
  const valInt = values.map((value) => parseInt(value));

  let asc = true;
  let desc = true;

  for (let i = 1; i < valInt.length; i++) {
    if (valInt[i] > valInt[i - 1]) {
      desc = false;
    } else if (valInt[i] < valInt[i - 1]) {
      asc = false;
    }
  }

  if (asc) {
    console.log(ASC);
  } else if (desc) {
    console.log(DESC);
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
