var numIslands = function (grid) {
  if (grid.length === 0) return 0;

  let island = 0;

  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[i].length; j++)
      if (grid[i][j] == 1) bfs(i, j);

  return island;

  function bfs(x, y) {
    island++;
    const queue = [];
    queue.push([x, y]);

    while (queue.length) {
      const [x, y] = queue.shift();
      grid[x][y] = "0";
      console.log(`${x} ${y} set to null`)

      if (x - 1 >= 0 && grid[x - 1][y] == 1) queue.push([x - 1, y]);
      if (x + 1 < grid.length && grid[x + 1][y] == 1) queue.push([x + 1, y]);
      if (y - 1 >= 0 && grid[x][y - 1] == 1) queue.push([x, y - 1]);
      if (y + 1 < grid[x].length && grid[x][y + 1] == 1) queue.push([x, y + 1]);
    }
  }
};

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))
