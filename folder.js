window.onload = function() {var folder_name = location.search.slice(1);
console.log(folder_name);
document.getElementById("title").innerHTML = folder_name + " Folder";
document.title = folder_name; }