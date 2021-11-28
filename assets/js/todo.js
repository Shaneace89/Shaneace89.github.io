//Updating a todo item
$('ul').on('click', 'li', function(){
  $(this).toggleClass('completed');
});

//Deleting a todo item
$('ul').on('click', 'span', function(event){
  $(this).parent().remove();
});

//Adding a todo item
$('input').keypress(function(event){
  if(event.which==13){
    var todoItem = $(this).val();
    $('input').val('');

    $('ul').append(
    `
    <li>${todoItem} <span><i class="fas fa-trash"></i></span></li>
    `
    )
  }
});
