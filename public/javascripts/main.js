$(document).ready(function() {
   sortedList = $( ".drag" ).sortable({
    distance:30,
    update: function(event, ui){
      var ranks = $( ".drag" ).sortable('toArray')

      fetch('http://localhost:3000/update_ranks',
            {method: 'POST',
             body: JSON.stringify(ranks),
             mode: 'cors',
             headers: {'Content-Type': 'application/json'}}).then(response => response.json())
            .then(response => console.log('response::', response))
    }
  })
})
