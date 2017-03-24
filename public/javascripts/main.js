$(document).ready(function() {
   sortedList = $( ".drag" ).sortable({
    distance:30,
    update: function(event, ui){
      console.log('event:', event, '  ui:', ui);
      var ranks = $( ".drag" ).sortable('toArray')
      console.log('going to send these ranks:', ranks)

      fetch('http://localhost:3000/update_ranks',
            {method: 'POST',
             body: JSON.stringify(ranks),
             mode: 'cors',
             headers: {'Content-Type': 'application/json'}}).then(response => response.json())
            .then(response => console.log('response::', response))
    }
  })
})
