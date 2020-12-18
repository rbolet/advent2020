import display from "./lib/display";
import array from "./lib/constants";
//find the two entries that sum to 2020
export default {
  partI() {
    let lastI = array.length - 1;
    display.printLine(`Last Index: ${lastI}`);

    array.sort((a, b) => a - b);
    display.printLine(`Sorted: ${array[0]}, ${array[1]}, ${array[2]} ...`);
    let loops = 1;
    while (array.length) {
      const num = array.shift();
      let i = Math.floor((array.length - 1) / 2);
      let direction = numISum(num, i) < 2020 ? 1 : -1;
      do {
        console.log("Loops: ", loops);
        if (numISum(num, i) === 2020) return result(num, array[i], loops);
        i += direction;
        loops++;
      } while (array[i]);
    }
    return "still a mystery.";
  },
  partII() {
    display.printLine("Part II:");

    array.sort((a, b) => a - b);
    let loops = 1;

    for (let a = 0; a < array.length - 2; a++) {
      for (let b = a + 1; b < array.length - 1; b++) {
        for (let c = b + 1; c < array.length; c++) {
          if (array[a] + array[b] + array[c] === 2020) {
            return result(array[a], array[b], loops, array[c]);
          }
          loops++;
        }
      }
    }

    return "still a mystery.";
  },
};

function numISum(num, index) {
  const sum = num + array[index];
  console.log(`${num} + index ${index} = ${sum}`);
  return sum;
}

function sum3I(i1, i2, i3) {
  const sum = array[i1] + array[i2] + array[i3];
  console.log("3 sum = ", sum);
  return sum;
}

function result(num1, num2, loops, num3 = 1) {
  display.printLine(`Number of loops: ${loops}`);
  return num1 * num2 * num3;
}
