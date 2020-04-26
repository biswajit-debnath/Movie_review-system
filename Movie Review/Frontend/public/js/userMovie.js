$(window).on("load", function() {

	//Fetch data from gateway at /movieItem

	const data_json = {data:[
			{name:"Movie 1",rating:"1",des:"Lorem Ipsum is simply dummy text of the"},
			{name:"Movie 2",rating:"2",des:"Lorem Ipsum is simply dummy text of the"},
			{name:"Movie 3",rating:"3",des:"Lorem Ipsum is simply dummy text of the"},
			{name:"Movie 4",rating:"4",des:"Lorem Ipsum is simply dummy text of the"},
			{name:"Movie 5",rating:"5",des:"Lorem Ipsum is simply dummy text of the"}
		]};

		

	const ul = $("#movies")


	data_json.data.map((item)=>{ 

	const li = `<li><div><span><b>Name:</b> ${item.name}</span><span class="des"><b>Description:</b> ${item.des}</span><span><b>Rating:</b> ${item.rating}</span></div></li>`;

	ul.append(li);
	});	

	console.log(ul);


});