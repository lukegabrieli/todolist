$(document).ready(function() {
  //Add to list
  $(document).on("click", ".submit", function() {
    var userInput = $("input[name='input']").val();
    if (userInput !== "") {
      $(".list").append("<li class='listItem'>" + userInput + " (<button class='edit'> Edit </button> <button class='delete'> Delete </button>)</li>");
    };
    $(".input").val("");
    return false;
  });

  //Remove from list
  $(document).on("click", ".delete", function() {
    $(this).parent().fadeOut();
  });

  //Edit list item
  $(document).on("click", ".edit", function() {
    $(this).parent().replaceWith("<li><input type='text' name='editedInput' class='editedInput' /><input type='submit' name='editedSubmit' class='editedSubmit' value='Submit' /></li>");
  });
  $(document).on("click", ".editedSubmit", function () {
    var userEditedInput = $("input[name='editedInput']").val();
    if (userEditedInput !== "") {
      $(this).parent().replaceWith("<li class='listItem'>" + userEditedInput + " (<button class='edit'>edit</button> | <button class='delete'>delete</button>)</li>");
    };
    $(".input").val("");
    return false;
  })

});
