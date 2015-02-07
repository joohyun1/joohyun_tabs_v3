var folder_name;

chrome.runtime.sendMessage({msg: "list"}, 
	function(response) {
		console.log("list response");
		var folder_list = response.flist;
		console.log(folder_list.length);
		
		var fname; var btn; var t;
		for (var i = 0; i < folder_list.length; i++) {
			fname = folder_list[i];
			btn = document.createElement("BUTTON");
			t = document.createTextNode(fname);
			btn.appendChild(t);
			document.body.appendChild(btn);
		}
	}
);

function addFolder() {
	console.log("ok");
	chrome.runtime.sendMessage(
		{msg: "addf",
		 name: folder_name});
	//var btn = document.createElement("BUTTON");
	//var t = document.createTextNode(folder_name);
	//btn.appendChild(t);
	//document.body.appendChild(btn);
}

function makeTabFolder() {
	folder_name = document.getElementById("name").value;	
	document.getElementById("valid").innerHTML = folder_name;
	chrome.tabs.create({
		url: chrome.runtime.getURL("folder.html") + '?' + folder_name,
		active: false
		},
		function(tab){addFolder();} 
	);
	window.close();
}

function editTitle(tab) {
	chrome.tabs.executeScript(tab.id, 
		{code:"document.title = 'lol'"});
}
	
document.getElementById("make").onclick = makeTabFolder;