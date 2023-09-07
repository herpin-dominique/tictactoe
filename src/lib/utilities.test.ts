import { describe, it, expect } from "vitest";
import { checkIsFull, type Board, checkBoard } from "./utilities";
import { initializeGame } from "./utilities";

describe("tic tac toe", () => {
  it("should true the board is ended", () => {
    // après un join XXOOOXXXO
    const board: Board = ["X", "X", "O", "O", "O", "X", "X", "X", "O"];
    expect(checkIsFull(board)).toBe(true);
  });

  it("should false the board is not ended", () => {
    // après un join XXOOOXXXO
    const board: Board = ["X", "X", "O", "O", "O", "X", "X", "X", " "];
    expect(checkIsFull(board)).toBe(false);
  });

  it("should return no winner", () => {
    // après un join XXOOOXXXO
    const board: Board = ["X", "X", "O", "O", "O", "X", "X", "X", "O"];

    expect(checkBoard(board)).toBeNull();
  });

  it("should return X as Winner Line 1", () => {
    // après un join XXXOOXXXO
    const board: Board = ["X", "X", "X", "O", "O", "X", "X", "X", "O"];
    expect(checkBoard(board)).toBe("X");
  });

  it("should return X as Winner Line 2", () => {
    const board: Board = ["O", "O", "X", "X", "X", "X", "O", "X", "O"];
    expect(checkBoard(board)).toBe("X");
  });
  it("should return X as Winner Line 3", () => {
    const board: Board = ["X", "O", "O", "O", "O", "X", "X", "X", "X"];
    expect(checkBoard(board)).toBe("X");
  });

  it("should return X as Winner Column 1", () => {
    const board: Board = ["X", "O", "O", "X", "O", "X", "X", "X", "O"];
    expect(checkBoard(board)).toBe("X");
  });

  it("should return X as Winner Column 2", () => {
    const board: Board = ["O", "X", "O", "O", "X", "X", "X", "X", "O"];
    expect(checkBoard(board)).toBe("X");
  });

  it("should return X as Winner Column 3", () => {
    const board: Board = ["O", "O", "X", "X", "O", "X", "O", "X", "X"];
    expect(checkBoard(board)).toBe("X");
  });

  it("should return X as Winner /", () => {
    const board: Board = ["O", "O", "X", "X", "X", "O", "X", "O", "X"];
    expect(checkBoard(board)).toBe("X");
  });

  it("should return X as Winner \\", () => {
    const board: Board = ["X", "O", "X", "X", "X", "O", "O", "O", "X"];
    expect(checkBoard(board)).toBe("X");
  });

  it("should return O as Winner \\", () => {
    const board: Board = ["O", "X", "O", "O", "O", "X", "X", "X", "O"];
    expect(checkBoard(board)).toBe("O");
  });
});

describe("Initialisation du jeu", () => {
  it("Le tableau devrait être vide et le joueur X devrait commencer", () => {
    // Appelez la fonction d'initialisation du jeu
    const { board, currentPlayer } = initializeGame();

    // Verifier que le tableau est vide
    expect(board).toEqual([" ", " ", " ", " ", " ", " ", " ", " ", " "]);

    // Vérifier que le joueur actuel est X
    expect(currentPlayer).toBe("X");
  });
});
