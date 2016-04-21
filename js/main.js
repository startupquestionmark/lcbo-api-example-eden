$(function(){

	var results;

	jQuery.ajax({
	  url: 'https://lcboapi.com/stores',
	  headers: { 'Authorization': 'Token MDpkZDhkYmU0Mi0wNmFhLTExZTYtYjRlMS01YjE1ZjY2OWE2NWE6RjFldVVNQ2pVS0daeUw3SjJmNHlkVmRhazlrc3NpRlUxOXVu' },
	  dataType: 'json'
	}).then(function(data) {
		
		console.log(data);
		stores = data.result;

		for(var i = 0; i < stores.length; i++) {
			console.log(stores[i].name);
			$('ul#storelist').append('<li>' + stores[i].name + '</li>');
		}
		
	});
});