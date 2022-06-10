function search() {
    const ORCID = document["forms"]["newuser"]["ORCID"].value;
    // API search with this ID
    let articles = []; 

    // update the articles list with the fetched data
    for (let i = 0; i < articles.length; i++) {
        const article_doi = articles[i]["externalIds"]["doi"];
        const article_title = articles[i]["title"];
        const article_year = articles[i]["year"];

        let artivle_div = document.getElementById("articles");
        let checkbox = document.createElement('input');

        checkbox.type = "checkbox";
        checkbox.name = `article_${i}`;
        checkbox.value = "value";
        checkbox.id = `article_${i}`;
            
        // creating label for checkbox
        let label = document.createElement('label');
            
        // assigning attributes for 
        // the created label tag 
        label.htmlFor = `article_${i}`;
            
        // appending the created text to 
        // the created label tag 
        label.appendChild(document.createTextNode(`title: ${article_title} | year: ${article_year} | doi: dx.doi.org/${article_doi}`));
            
        // appending the checkbox
        // and label to div
        artivle_div.appendChild(checkbox);
        artivle_div.appendChild(label);
    }
}