const words = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, caption, span, a');

for(let i = 0; i < words.length; i++){
    if(words[i].innerHTML.includes('COVID-19')|| words[i].innerHTML.includes('covid-19')){

    } else if(words[i].innerHTML.includes('COVID19') || words[i].innerHTML.includes('covid19') || words[i].innerHTML.includes('Covid19')){

    } else if(words[i].innerHTML.includes('Coronavirus') || words[i].innerHTML.includes('coronavirus') || words[i].innerHTML.includes('Corona Virus') || words[i].innerHTML.includes('Corona virus') || words[i].innerHTML.includes('corona virus')){

    } else if(words[i].innerHTML.includes('Moderna Vaccine') || words[i].innerHTML.includes('Moderna vaccine') || words[i].innerHTML.includes('moderna vaccine')){

    } else if(words[i].innerHTML.includes('Pfizer Vaccine') || words[i].innerHTML.includes('Pfizer vaccine') || words[i].innerHTML.includes('pfizer vaccine')){

    } else if(words[i].innerHTML.includes('Johnson & Johnson Vaccine') || words[i].innerHTML.includes('Johnson & Johnson vaccine') || words[i].innerHTML.includes('J&J vaccine')){

    } else if(words[i].innerHTML.includes('Quarantine') || words[i].innerHTML.includes('quarantine') || words[i].innerHTML.includes('Self-Quarantine') || words[i].innerHTML.includes('Self-quarantine') || words[i].innerHTML.includes('self-quarantine')){

    }
}