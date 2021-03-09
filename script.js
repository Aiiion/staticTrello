$( function() {
    $( "#todo, #doing, #done" ).sortable({connectWith: ".connectSortable"}).disableSelection();
  } );

$( function(){
    $('.dialog').dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 500
      },
      hide: {
        effect: "fold",
        duration: 500
      } 
    });
    $('.btn').on("click", function(){
      let id = $(this).attr('data-id');
      $(id).dialog('open');})
});

$( function() {
  $( ".dialog" ).tabs();
  
} );


$( function() {
  $( ".datepicker" ).datepicker();
} );