let options = {
    numberPerPage:5,
    goBar:false, 
    pageCounter:false,
};

let filterOptions = {
    el:'#searchBox'
};

paginate.init('.myTable',options,filterOptions);
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then(json =>json.forEach(element => {
    const tbody=document.getElementById("table-row");
    var node = document.createElement("tr");
    var td=document.createElement("td");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var tdwithText=document.createTextNode(element.id); 
    var td1withText=document.createTextNode(element.title);
    var td2withText=document.createTextNode(element.body);
    td.appendChild(tdwithText);
    td1.appendChild(td1withText);
    td2.appendChild(td2withText);
    node.appendChild(td);
    node.appendChild(td1);
    node.appendChild(td2);
    tbody.appendChild(node);
    
}));