let hit = document.getElementById('dead'),
    miss = document.getElementById('lost');
const finish = text => {
    alert(text);
    hit.textContent = 0;
    miss.textContent = 0;
}

start = () => {
    for (let num = 1; num < 10; num++) {
        let click = document.getElementById(`hole${num}`);
        click.onclick = (() => {
            let bingo = click.classList.contains( 'hole_has-mole' );
            if (bingo) {
                hit.textContent = Number(hit.textContent) + 1;
            } else miss.textContent = Number(miss.textContent) + 1;
            if (Number(hit.textContent) === 10) {
                finish('Вы победили');
            };
            if (Number(miss.textContent) === 5) {
                finish('Вы проиграли')
            };
        })
    }
}
start()
