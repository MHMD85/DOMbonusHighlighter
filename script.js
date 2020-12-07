function highlight(p) {

    let para = p.innerHTML.split(' ');
    let txt = "";
    let wordCount = para.length;
    let h1 = document.querySelector('h1');   
    h1.textContent += ` ${wordCount} words ` ;


    para.forEach(word => {
        if (word.length > 7) {
           
            txt += `<span style="background-color:yellow"> ${word} </span>`
        } else {
            
            txt += word + ' '
        }

    })
    txt = txt.replace(/\?/g,'🤔');
    txt = txt.replace(/\!/,'😲')

    p.innerHTML = txt + `<a href='https://www.google.de/?hl=de' target='_blank'>Google</a>`;

}




highlight(document.querySelector('.p'))



//para = para.filter(strng => strng.length > 7);

// Array.from(para)
// para.forEach(e=> {
//     let span = document.createElement('span');
//     e.appendChild(span);
//     span.style.background('yellow')
// })