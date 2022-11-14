let init = document.getElementById('add')
let nb_baton
let reset = document.getElementById('reset')
let next = document.getElementById('next')
let player = document.getElementById('player')
init.addEventListener('click', ()=>{
    let input = document.getElementById('nb_baton')
    nb_baton = input.value
    console.log(nb_baton)
    const space = document.getElementById('space');

    add.remove()
    input.remove()

    for(let batons = 0; batons<nb_baton; batons++){
        let baton = document.createElement('div')
        baton.classList.add('baton')
        space.appendChild(baton)
    }
    let batons = document.querySelectorAll('.baton')

    let selected=0;
    batons.forEach(baton=>{
        baton.addEventListener('click',()=>{
            if(baton.classList.contains('select')){
                baton.classList.remove('select')
                selected--
            }else if(!baton.classList.contains('select') && selected<3){
                baton.classList.add('select')
                selected++
            }
            if(selected >=3){
                batons.forEach(baton=>{
                    if(!baton.classList.contains('select')){
                        baton.style.opacity="0.5"
                    }
                })
            }else{
                batons.forEach(baton=>{
                    baton.style.opacity="1"
                })
            }
        })
    })

    next.addEventListener('click',()=>{
        if(selected > 0){
            document.querySelectorAll('.select').forEach(select=>{
                select.remove()
            })
            batons.forEach(baton=>{
                baton.style.opacity="1"
            })
            selected=0
            if(player.innerText === "Player : 01"){
                player.innerText="Player : 02"
            }else{
                player.innerText="Player : 01"
            }
            if(document.querySelectorAll('.baton').length<=1){
                document.getElementById('fin').innerText = player.innerText+" lose"
                space.remove()
                next.remove()
                player.remove()
            }
        }
    })

    

})

reset.addEventListener("click", ()=>{
    window.location.href = "nim.html";
})
