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
  $.widget("change.colors", {
    options: {
      red:5,
      green:5,
      blue:150,
      opacity: .5
    },
    _create: function(){
      $(".container").addClass("colorChanger");
      this.changer = $("<button>", {
        text: "Engadge exitement",
        "class": "changeBodyColor btn-lg btn-danger col-xl-12"
      })
      .appendTo(this.element).button();
      this._on(this.changer, {
        click: "emulateWormhole"
      });
    },
    emulateWormhole: function(event){
      this.element.css( "background-color", "rgba(" +
          this.options.red +"," +
          this.options.green + "," +
          this.options.blue + "," +
          this.options.opacity + ")"
        );
    }
    

  });
  $("#body").colors();
})
$(function(){
  $(".changeBodyColor").on("click", function(){
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
      $(".changeBodyColor").css("display", "block");
    } else {
      $(".changeBodyColor").css("display", "none");
    }
  }) 
})



$(function(){
  if ($(".progress-bar").attr('aria-valuenow') == 100) {
    $(".changeBodyColor").css("display", "block");
  } else {
    $(".changeBodyColor").css("display", "none");
  }
})
