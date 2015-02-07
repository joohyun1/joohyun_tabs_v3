var folder_name = location.search.slice(1)
console.log(folder_name);
document.getElementById("title").innerHTML = folder_name;
document.title = folder_name;