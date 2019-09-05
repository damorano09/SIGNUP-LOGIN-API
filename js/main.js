$('#login-form').submit(function(e) {

  e.preventDefault();

  var form = $(this);
  var data = {
      'username': $('#username').val(),
      'password': $('#password').val(),
    };
  var url = form.attr('action');

  $.ajax({
    method: 'POST',
    url: url,
    data: JSON.stringify(data),
    contentType: 'application/x-www-form-urlencoded',
    complete: function(data){
      let responseText = JSON.parse(data.responseText);
      if(data.status === 200){
        $('#ajax-response').html(responseText.message).css('color', 'green');
      } else {
        console.log(responseText.message);
        $('#ajax-response').html(responseText.message).css('color', 'red');
      }
    }
  });
});

$('#register-form').submit(function(e) {

  e.preventDefault();

  var form = $(this);
  var data = {
      'username': $('#username').val(),
      'password': $('#password').val(),
    };
  var url = form.attr('action');

  $.ajax({
    method: 'POST',
    url: url,
    data: JSON.stringify(data),
    contentType: 'application/x-www-form-urlencoded',
    complete: function(data){
      let responseText = JSON.parse(data.responseText);
      if(data.status === 200){
        $('#ajax-response').html(responseText.message).css('color', 'green');
      } else {
        console.log(responseText.message);
        $('#ajax-response').html(responseText.message).css('color', 'red');
      }
    }
  });
});
