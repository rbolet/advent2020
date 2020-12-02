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
    let i = 0;
    while (i < array.length) {
      let halfI = Math.floor(array.length - 1 / 2);
      let direction = sum3I(i, i + 1, halfI) < 2020 ? 1 : -1;
      while (i < halfI - 1 && i < halfI - 1) {
        const currentSum = sum3I(i, i + 1, halfI);
        loops++;
        if (currentSum === 2020) {
          return result(array[i], array[i + 1], loops, array[halfI]);
        } else if (currentSum < 2020 && direction < 0) {
          i++;
        } else if (currentSum > 2020 && direction === 1) {
          i++;
        } else {
          halfI += direction;
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
