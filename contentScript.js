const words = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, caption, span, a');

let div = document.createElement('div');
div.id = 'tag';
let text = document.createTextNode('TAG');
const aLink = [];
function linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
}

for(let i = 0; i < words.length; i++){
    if(words[i].innerHTML.includes('COVID-19')|| words[i].innerHTML.includes('covid-19')){
       words[i].innerHTML = words[i].innerHTML.replace('COVID-19', 'THIS WORKS');
        
       div.appendChild(text);
        linkify('THIS WORKS');
    } else if(words[i].innerHTML.includes('COVID19') || words[i].innerHTML.includes('covid19') || words[i].innerHTML.includes('Covid19')){
        div.appendChild(text);
    } else if(words[i].innerHTML.includes('Coronavirus') || words[i].innerHTML.includes('coronavirus') || words[i].innerHTML.includes('Corona Virus') || words[i].innerHTML.includes('Corona virus') || words[i].innerHTML.includes('corona virus')){
        div.appendChild(text);
    } else if(words[i].innerHTML.includes('Moderna Vaccine') || words[i].innerHTML.includes('Moderna vaccine') || words[i].innerHTML.includes('moderna vaccine')){
        div.appendChild(text);
    } else if(words[i].innerHTML.includes('Pfizer Vaccine') || words[i].innerHTML.includes('Pfizer vaccine') || words[i].innerHTML.includes('pfizer vaccine')){
        div.appendChild(text);
    } else if(words[i].innerHTML.includes('Johnson & Johnson Vaccine') || words[i].innerHTML.includes('Johnson & Johnson vaccine') || words[i].innerHTML.includes('J&J vaccine')){
        div.appendChild(text);
    } else if(words[i].innerHTML.includes('Quarantine') || words[i].innerHTML.includes('quarantine') || words[i].innerHTML.includes('Self-Quarantine') || words[i].innerHTML.includes('Self-quarantine') || words[i].innerHTML.includes('self-quarantine')){
        div.appendChild(text);
    }
}
