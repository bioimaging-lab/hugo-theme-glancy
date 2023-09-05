function updateDisplay() {
    var x, i, c;    
    c = (document.getElementById('select-pubtype').value).toLowerCase();
    y = (document.getElementById('select-year').value).toLowerCase();

    x = document.getElementsByClassName("publistitem");   
    var ctr = 0;     
    for (i = 0; i < x.length; i++) {
        if (((c === 'all') || (x[i].getAttribute('data-pubtype') === c))
            && ((y === 'all') || (x[i].getAttribute('data-pubyear') === y)))
        {
            x[i].style.display = "flex";
            ctr++;

            (x[i]).children[0].innerHTML = ctr;

        } else {
            x[i].style.display = "none";
        }
    }
};

function initializeLists() {    
    var selpubtype = document.getElementById('select-pubtype');
    var selyear = document.getElementById('select-year');

    var x = document.getElementsByClassName("publistitem");
    var pubtypes = new Array;
    var years = new Array;
    var ctr = 0;
    for (i = 0; i < x.length; i++) {

        if (pubtypes.indexOf(x[i].getAttribute('data-pubtype')) == -1) {
            pubtypes.push(x[i].getAttribute('data-pubtype'));

            var opt = document.createElement('option');
            opt.value = x[i].getAttribute('data-pubtype');

            switch (x[i].getAttribute('data-pubtype').toLowerCase()) {
                case "article":
                    opt.innerHTML = "Journal articles";
                    break;
                case "proceedings":
                    opt.innerHTML = "Conference proceedings";
                    break;
                case "bookchapter":
                    opt.innerHTML = "Book chapters";
                    break;
                case "book":
                    opt.innerHTML = "Books";
                    break;
                case "thesis":
                    opt.innerHTML = "Theses";
                    break;
                case "patent":
                    opt.innerHTML = "Patents"
                    break;
                case "preprint":
                    opt.innerHTML = "Preprints"
                    break;
                case "draft":
                    opt.innerHTML = "Unpublished drafts"
                    break;
                default:
                    opt.innerHTML = "Unclassified"
                    break;
            }
            selpubtype.appendChild(opt);
        }

        if (years.indexOf(x[i].getAttribute('data-pubyear')) == -1) {
            years.push(x[i].getAttribute('data-pubyear'));

            var opt = document.createElement('option');
            opt.value = x[i].getAttribute('data-pubyear');
            opt.innerHTML = (x[i].getAttribute('data-pubyear')).toString();
            selyear.appendChild(opt);
        }
        
        ctr++;
        (x[i]).children[0].innerHTML = ctr + ".";

    }
};