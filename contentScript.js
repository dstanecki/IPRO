const words = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, caption, span, a');

let div = document.createElement('div');
div.id = 'tag';
let text = document.createTextNode('TAG');
for(let i = 0; i < words.length; i++){
    if(words[i].innerHTML.includes('COVID-19')|| words[i].innerHTML.includes('covid-19')){
       words[i].innerHTML = words[i].innerHTML.replace('COVID-19', '<a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" target="_blank">THIS WORKS<img src="https://github.com/dstanecki/IPRO/blob/main/620px-Approve_icon.svg.png" alt="Covid Keyword"></a>');
       div.appendChild(text);
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
