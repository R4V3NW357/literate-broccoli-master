var catalog__subcatalog_link = document.querySelector('.catalog__subcatalog-link-lvl');
var subcatalog_resist = document.querySelector('.subcatalog_resist');


catalog__subcatalog_link.addEventListener('mouseover', function () {

    subcatalog_resist.style.display = 'block';  

});

catalog__subcatalog_link.addEventListener('mouseout', function () {    
    
    setTimeout(function() {
        subcatalog_resist.style.display = 'none';
    }, 3000);

});