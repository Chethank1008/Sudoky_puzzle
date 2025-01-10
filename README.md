# Sudoky_puzzle
Sudoku Solver
*Introduction
This is a web-based Sudoku Solver built using ReactJS. The application allows users to input initial Sudoku values, validate the entries, and solve the Sudoku puzzle using the backtracking algorithm. It provides an intuitive interface and ensures that the Sudoku rules (unique values in rows, columns, and sub-grids) are maintained.

*Features
1.9x9 Grid Input: Users can input numbers (1-9) or leave cells blank.
2.Validation: Ensures that all rows, columns, and 3x3 sub-grids follow Sudoku rules.
3.Solver: Solves the Sudoku puzzle using a backtracking algorithm.
4.Error Handling: Displays appropriate error messages for invalid inputs or unsolvable puzzles.
5.Responsive Design: Simple and clean UI for easy interaction.


*Approach
Validation Logic

The validation logic ensures that the Sudoku grid adheres to the following rules:
1.Rows: Each row must contain unique numbers (1-9).
2.Columns: Each column must contain unique numbers (1-9).
3.3x3 Sub-Grids: Each 3x3 sub-grid must also contain unique numbers (1-9).

We achieve this by:
1.Iterating through each row, column, and 3x3 grid.
2.Extracting the numbers and ensuring there are no duplicates using a Set.


*Solving Algorithm
The backtracking algorithm is used to solve the Sudoku puzzle:

1.Find an Empty Cell: Locate the first cell in the grid that is empty.
2.Try Numbers: Try placing numbers (1-9) in the empty cell.
  Check if the number is valid based on Sudoku rules.
3.Recursive Solve: Move to the next empty cell and repeat the process.
4.Backtrack: If no number fits, backtrack to the previous cell and try the next number.
5.Terminate: When all cells are filled correctly, the puzzle is solved.

*Additional Notes
1.Validation Edge Cases:
  Blank cells are allowed during validation as they represent unknown values.
  Duplicates in rows, columns, or sub-grids will result in an error.
  
2.Styling: 
  The grid layout is styled using CSS for simplicity, with basic styling for buttons and error messages.

3.Enhancements:
  You can add a "Hint" feature to suggest possible values for a cell.
  You can allow users to reset the grid.
