$(document).ready(function() {
  $(function() {
    $.ajax({url: '/update_rank/:id', success: function(result) {
      $( ".drag" ).sortable({
        distance:30
      });
    }})
  });
})
