function main() {
    const questions = [
      "Question1",
      "Question2",
      "Question3",
      "Question4",
      "Question5"
    ];
    function shuffle(arr) {
      return function () {
        const result = [...arr]; // Make a copy of the input array.
        let currentIndex = arr.length;
        while (currentIndex > 0) {
          const randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // Swap the current element with the randomly-selected one.
          const temp = result[currentIndex];
          result[currentIndex] = result[randomIndex];
          result[randomIndex] = temp;
        }
        return result;
      };
    }
    return shuffle;
  }
  