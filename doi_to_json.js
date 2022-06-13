// Ce script convertit un DOI en JSON (avec le même format de JSON que ceux renvoyés par l'API de SemanticScholar) pour l'envoyer à form.js

var doi1="doi:10.1111/JEB.13677"   // exemple de DOI
var doi2="doi.org/10.1111/JEB.13677"  // autre exemple de DOI
var doi_clean="10.1111/jeb.13677"  // exemple de DOI "propre"

var get_bib_from_doi = function(doi, callback) {
	var website="https://api.crossref.org/works/"
	var transform="/transform/application/x-bibtex"

	var url=website+doi_clean+transform
	var xhr = new XMLHttpRequest();
    	xhr.open('GET', url, true);
	xhr.responseType = "text";
	// TODO go through callback functions
	xhr.onloadend = function() {
      		var status = xhr.status;
      		if (status === 200) {
    			return(xhr.responseText)
  		} else {
			return('Error ' + status)
		}
      }
      xhr.send();
}

var bib = get_bib_from_doi(doi_clean);
console.log(bib)
