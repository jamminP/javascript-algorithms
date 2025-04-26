process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    //console.log(a, b);
    
    
    for(let i = 0; i < b; i++){
        let array = [];
        for(let j = 0; j < a; j++){
            array.push('*');
        }
        const star = array.join('');
        console.log(star);
    }
});