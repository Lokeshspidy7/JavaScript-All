showstars(5);

function showstars(rows){
    for(row = 1; row<=rows; row++){
        let pattern = '';
        for (i = 0; i<row; i++)
        pattern += '*';
        console.log(pattern);
    }
}