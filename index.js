function chessBoard(position, path) {
    const [from, to] = position
    if (from < 0 || from > 7 || to < 0 || to > 7) return null
    return { position, path }
}


function knightMoves([x1, y1], [x2, y2]) {
    let queue = [chessBoard([x1, y1], [[x1, y1]])];
    let current = queue.shift();
    
    while (current.position[0] !== x2 || current.position[1] !== y2) {
        let start = current.position[0]
        let end = current.position[1]
        let directions = [
            [start + 2, end - 1],
            [start + 2, end + 1],
            [start - 2, end - 1],
            [start - 2, end + 1],
            [start + 1, end - 2],
            [start + 1, end + 2],
            [start - 1, end - 2],
            [start - 1, end + 2],
        ];
        directions.forEach((direction) => {
            let board = chessBoard(direction, current.path.concat([direction]));
            if (board) {
                queue.push(board)
            };
        });
        current = queue.shift();
    }

    console.log(`=> You made it in ${current.path.length - 1} moves!  Here's your path:`);
    current.path.forEach((position) => {
        console.log(`[${position[0]}, ${position[1]}]`);
    });
}

// Test Case
knightMoves([3, 3], [4, 3]);
knightMoves([4, 7], [2, 6]);
knightMoves([3, 5], [4, 1]);
