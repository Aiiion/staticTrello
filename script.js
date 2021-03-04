$( function() {
    $( "#todo, #doing, #done" ).sortable({connectWith: ".connectSortable"}).disableSelection();
  } );

$( function(){
    $('div#dialog1').dialog({autoOpen: false })
    $('#btn1').click(function(){$('div#dialog1').dialog('open');})
});