import React, { useState } from "react";
import "./App.css";

function App() {
  const [grid, setGrid] = useState(
    Array(9)
      .fill(0)
      .map(() => Array(9).fill(""))
  );
  const [error, setError] = useState("");

  const handleInputChange = (row, col, value) => {
    if (value === "" || /^[1-9]$/.test(value)) {
      const newGrid = [...grid];
      newGrid[row][col] = value === "" ? "" : parseInt(value, 10);
      setGrid(newGrid);
      setError(""); // Clear any previous errors
    }
  };

  const isValid = (grid) => {
    const isUnique = (arr) =>
      arr.filter((num) => num !== "").length === new Set(arr.filter((num) => num !== "")).size;

    for (let i = 0; i < 9; i++) {
      const row = grid[i];
      const column = grid.map((row) => row[i]);
      const subGrid = [];

      for (let r = Math.floor(i / 3) * 3; r < Math.floor(i / 3) * 3 + 3; r++) {
        for (let c = (i % 3) * 3; c < (i % 3) * 3 + 3; c++) {
          subGrid.push(grid[r][c]);
        }
      }

      if (!isUnique(row) || !isUnique(column) || !isUnique(subGrid)) {
        return false;
      }
    }

    return true;
  };

  const solveSudoku = (grid) => {
    const findEmptyCell = (grid) => {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (grid[row][col] === "") return [row, col];
        }
      }
      return null;
    };

    const canPlace = (grid, row, col, num) => {
      for (let i = 0; i < 9; i++) {
        if (grid[row][i] === num || grid[i][col] === num) return false;

        const boxRow = Math.floor(row / 3) * 3 + Math.floor(i / 3);
        const boxCol = Math.floor(col / 3) * 3 + (i % 3);
        if (grid[boxRow][boxCol] === num) return false;
      }
      return true;
    };

    const emptyCell = findEmptyCell(grid);
    if (!emptyCell) return true; // Solved

    const [row, col] = emptyCell;

    for (let num = 1; num <= 9; num++) {
      if (canPlace(grid, row, col, num)) {
        grid[row][col] = num;
        if (solveSudoku(grid)) return true;
        grid[row][col] = ""; // Backtrack
      }
    }

    return false;
  };

  const handleValidate = () => {
    if (isValid(grid)) {
      setError("");
      alert("Valid Entries!");
    } else {
      setError("Invalid Sudoku entries. Check rows, columns, or 3x3 grids.");
    }
  };

  const handleSolve = () => {
    if (!isValid(grid)) {
      setError("Invalid Sudoku entries. Please validate first.");
      return;
    }

    const gridCopy = JSON.parse(JSON.stringify(grid));
    if (solveSudoku(gridCopy)) {
      setGrid(gridCopy);
      setError("");
    } else {
      setError("Sudoku puzzle cannot be solved.");
    }
  };

  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <div className="grid">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              value={cell || ""}
              onChange={(e) =>
                handleInputChange(rowIndex, colIndex, e.target.value)
              }
              maxLength="1"
            />
          ))
        )}
      </div>
      <div className="buttons">
        <button onClick={handleValidate}>Validate</button>
        <button onClick={handleSolve}>Solve</button>
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
