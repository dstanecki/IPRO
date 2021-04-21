document.addEventListener('DOMCONTENTLOADED', function(){
    var getInfoTag = document.getElementById('clickIt');
    getInfoTag.addEventListener('click', function(){
        chrome.tabs.getSelected(null, function(tab){
            alert("This is a list of credible sources for Covid-19 related news.");
            alert("https://www.cdc.gov/");
        });
    }, false);
}, false);