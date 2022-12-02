const getSubSquare = (matrix, xStartIndex, yStartIndex) => {
  if (!matrix) return "Please provide a matrix";

  if (xStartIndex === undefined) return "Please provide an xStartIndex";

  if (yStartIndex === undefined) return "Please provide a yStartIndex";

  if (xStartIndex + 3 > matrix[0].length || yStartIndex + 3 > matrix.length)
    return "Subsquare exceeds the bounds of the matrix";

  const subSquare = [];

  for (let yLimit = 0; yLimit < 3; yLimit++, yStartIndex++) {
    subSquare[yLimit] = [];
    for (let x = xStartIndex; x < xStartIndex + 3; x++) {
      subSquare[yLimit].push(matrix[yStartIndex][x]);
    }
  }

  return subSquare;
};

export default getSubSquare;
