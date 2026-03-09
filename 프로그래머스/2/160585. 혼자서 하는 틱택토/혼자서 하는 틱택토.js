function solution(board) {
    let o = 0;
    let x = 0;
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 'O') o++;
            if (board[i][j] === 'X') x++;
        }
    }
    
    if (x > o || o > x + 1) return 0;
    
    const win = (p) => {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === p && board[i][1] === p && board[i][2] === p) return true;
            if (board[0][i] === p && board[1][i] === p && board[2][i] === p) return true;
        }
        if (board[0][0] === p && board[1][1] === p && board[2][2] === p) return true;
        if (board[0][2] === p && board[1][1] === p && board[2][0] === p) return true;
        return false;
    };
    
    const oWin = win('O');
    const xWin = win('X');
    
    if (oWin && xWin) return 0;
    
    if (oWin && o !== x + 1) return 0;
    
    if (xWin && o !== x) return 0;
    
    return 1;
}