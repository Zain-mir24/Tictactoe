export function findWinner(squares) {
    // Array with winning combinations
    const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    // Iterate over array with winning combinations
    for (let i = 0; i < rows.length; i++) {
        const [a, b, c] = rows[i]

        // Check if the game board contains winning combination
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            // Return the winner ('x' or 'o')
            return boxes[a]
        }
    }

    // Otherwise do nothing
    return null
}   