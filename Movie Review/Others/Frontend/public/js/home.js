$(window).on("load", function() {

	//Fetch data from gateway at /movieItem

		

	const ul = $("#movies")


	data_json.data.map((item)=>{ 

	const li = `<li><div><span><b>Name:</b> ${item.name}</span><span class="des"><b>Description:</b> ${item.des}</span></div></li>`;

	ul.append(li);
	});	



});