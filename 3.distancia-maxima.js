function processData(input) {
    //Enter your code here
    console.log(input);
    
    const linhas = input.trim().split("\n");
    const n = parseInt(linhas[0],10);
    
    const coordenadas = [];
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x: parseInt(coord[0] ,10),
            y: parseInt(coord[1], 10)
          
        })
        console.log(coord);
    }
    console.log(linhas);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
