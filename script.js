$( function() {
    $( "#todo, #doing, #done" ).sortable({connectWith: ".connectSortable"},).disableSelection();
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

$(function(){
  $("#dunder").on("click", function(){
    $("#audio")[0].play();
  })
} )
$(function(){ //Updates progress bar based on how many cards is sorted as done
  $(".ui-sortable-handle").hover(function(){
    let progress = 0;
  $("#done").find(".ui-sortable-handle").each(function(){
    progress += 25;
    console.log($(".ui-sortable-handle").attr("id"));
    console.log(progress);    
  })
  $(".progress-bar").attr('aria-valuenow', progress);
    $(".progress-bar").css('width', progress + "%");
    if ($(".progress-bar").attr('aria-valuenow') == 100) {
      $("#dunder").css("display", "block");
    } else {
      $("#dunder").css("display", "none");
    }
  }) 
})
$(function(){
  if ($(".progress-bar").attr('aria-valuenow') == 100) {
    $("#dunder").css("display", "block");
  } else {
    $("#dunder").css("display", "none");
  }
})
