let board = document.getElementById('board');
let tab = [];
let nb = 10
let i=1
for(let rows = 0; rows<nb; rows++){
    i++
    let row = [];
    let domRow = document.createElement('div');
    domRow.classList.add('row')
    for(let columns = 0; columns<nb; columns++){
        i++
        row.push([]);
        let domBox = document.createElement('div');
        domBox.classList.add('box');
        domBox.style.height = 90/nb+'vh'
        if(i%2==0){
            domBox.classList.add('black');
            if(rows>=0 && rows<=3){
                let piece = document.createElement('div');
                piece.classList.add('pblack');
                piece.classList.add('piece')
                piece.style.height = '50%'
                domBox.appendChild(piece)
            }else if(rows>=6 && rows<=9){
                let piece = document.createElement('div');
                piece.classList.add('pwhite');
                piece.classList.add('piece')
                piece.style.height = '50%'
                domBox.appendChild(piece)
            }
        }else{
            domBox.classList.add('white');
        }
        domBox.dataset.column=columns;
        domBox.dataset.row=rows;
        domBox.dataset.id=rows.toString()+columns.toString();

        domRow.appendChild(domBox)
    }
    tab.push();
    board.appendChild(domRow)
}


document.querySelectorAll('.box').forEach(e=>{
    e.addEventListener('click', ()=>{
        console.log('row : '+e.dataset.row+" column : "+e.dataset.column)
    })
})

