var folder_list = [];

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.msg == "list") {
			console.log("list");
			console.log(folder_list.length);
			sendResponse({msg: "list", flist: folder_list});
		}
		
		if (request.msg == "addf") {
			var folder_name = request.name;
			console.log("addf");
			console.log(folder_name);
			folder_list[folder_list.length] = folder_name;
			sendResponse({msg: "done"});
		}
  });