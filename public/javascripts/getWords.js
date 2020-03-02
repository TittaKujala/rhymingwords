let word = document.getElementById('word');
const address = '/api/words';

document.getElementById('button').onclick = () => {

    fetch(`${address}/${word.value}`)
        .then(res => res.json())
        .then(data => {
            let print = '<tr>';
            let counter = 1;

            for (let w of data) {
                print += `<td>${w.word}</td>`;
                if(counter%5 == 0) {
                    print += '</tr><tr>';
                }
                counter++;
            }
            print += `</tr>`;
            document.getElementById('results').innerHTML = print;
        }) 
} 