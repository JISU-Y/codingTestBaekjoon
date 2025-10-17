const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function countGroup(grid) {
  if (!grid || grid.length === 0) return [0];

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () =>
    new Array(cols).fill(false),
  );

  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dfs(grid, visited, i, j);
      count++;
    }
  }

  return count;
}

function dfs(grid, visited, currentRow, currentCol) {
  if (
    currentRow < 0 ||
    currentCol < 0 ||
    currentRow >= grid.length ||
    currentCol >= grid[0].length
  )
    return 0;

  if (visited[currentRow][currentCol] || grid[currentRow][currentCol] === 0)
    return 0;

  visited[currentRow][currentCol] = true;
  let item = 0;

  for (const [dr, dc] of directions) {
    item += dfs(grid, visited, currentRow + dr, currentCol + dc);
  }

  return item;
}
