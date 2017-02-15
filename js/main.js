$(function() {

  // (Bonus) Allow the user to click the .modal to close itself
  // Tricky, consider what happens when two elements that are overlapping are both waiting for a click
  // When the user presses the .signin button, fade in the modal window
  $('.signin').click(function(){
    $(".modal").fadeIn();
  });

  // When the user presses the .close button, fade out the modal window
  $('.close').click(function(){
    $(".modal").fadeOut();
  });

  // When the user presses the .submit button, add an .error class to both input elements
  $('.submit').click(function(eventObject){
    eventObject.stopPropagation();

    if ( $('input[name=user]').val() === "" && $('input[name=pass]').val() === "") {
      $("input").addClass('error');
    } else if ( $('input[name=user]').val() === "") {
      $("input[name=user]").addClass('error');

    } else if ( $('input[name=pass]').val() === "") {
      $("input[name=pass]").addClass('error');
    }

  });

  // When the user puts their cursor in one of the input fields, remove the .error class
  $('input').focus( function(eventObject){
    eventObject.stopPropagation();
    $('input').removeClass('error');
  })

  // $('input').on('focus', function(eventObject){
  //   eventObject.stopPropagation();
  //   $('input').removeClass('error');
  // })

  $('input').on('click', function(eventObject){
    eventObject.stopPropagation();
  })

  //   (Bonus) Allow the user to click the .modal to close itself
  // Tricky, consider what happens when two elements that are overlapping are both waiting for a click
  $('.modal').on('click','.getstarted', function(){
    $('.modal').fadeOut();
  })

});
