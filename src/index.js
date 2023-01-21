
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (!matrix) return [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let current = i % 2 === 0 
            ? j 
            : matrix[i].length - j - 1;
          arr.push(matrix[i][current]);
        }
    }
    return arr;
  };

// module.exports = function towelSort(matrix) {
//     if (!matrix) return [];
//     for (let i = 0; i < matrix.length; i++) {
//         if (i % 2 === 1) {
//           matrix[i].reverse();
//         }
//       }
      
//     return matrix.flat();
// };
