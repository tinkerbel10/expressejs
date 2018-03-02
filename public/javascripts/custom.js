function retrieveData(id, url, customData, dataToPass){
	$(id).DataTable( {
    dom: 'Bfrtip',
       buttons: [
           'copy', 'csv', 'excel', 'pdf', 'print'
       ],
	      "ajax" : {
	          "url" : url,
	          "type" : "GET",
	          "data": dataToPass,
	          "responsive": true,
	      },
	      "columns": customData,
				"bAutoWidth": false,
				"bDestroy" : true
	});
};
