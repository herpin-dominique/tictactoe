export type Values = "X" | "O" | " ";

export type Board = [
  Values,
  Values,
  Values,
  Values,
  Values,
  Values,
  Values,
  Values,
  Values
];

export function checkBoard(board: Board) {
  // . = n'importe quel caractère et un seul

  // le regex est une representation visuel des différentes solutions
  if (
    board
      .join("")
      .match(
        "(^XXX|^...XXX|^......XXX|^X..X..X..|^.X..X..X.|^..X..X..X|^..X.X.X..|^X...X...X)"
      )
  )
    return "X";
  else if (
    board
      .join("")
      .match(
        "(^OOO|^...OOO|^......OOO|^O..O..O..|^.O..O..O.|^..O..O..O|^..O.O.O..|^O...O...O)"
      )
  )
    return "O";
  return null;
}

export function checkIsFull(board: Board) {
  /**
   * vérifie que le plateau n'a plus de case vide
   * IndexOf va tenter de chercher le symbole demander et retourne -1 lorsqu'il ne trouve aucun résultat
   */
  return board.indexOf(" ") === -1;
}
