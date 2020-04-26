$(window).on("load", function() {

	//Fetch data from gateway at /movieItem

	const data_json = {data:[
			{name:"Movie 1",id:"1",des:"Lorem Ipsum is simply dummy text of the"},
			{name:"Movie 2",id:"2",des:"Lorem Ipsum is simply dummy text of the"},
			{name:"Movie 3",id:"3",des:"Lorem Ipsum is simply dummy text of the"},
			{name:"Movie 4",id:"4",des:"Lorem Ipsum is simply dummy text of the"},
			{name:"Movie 5",id:"5",des:"Lorem Ipsum is simply dummy text of the"}
		]};

		

	const ul = $("#movies")


	data_json.data.map((item)=>{ 

	const li = `<li><div><span><b>Name:</b> ${item.name}</span><span class="des"><b>Description:</b> ${item.des}</span></div></li>`;

	ul.append(li);
	});	

	console.log(ul);


});