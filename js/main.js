$('#login-form').submit(function (e) {  //login submit form

  e.preventDefault();  //avoid page submitting on refresh

  var form = $(this);  //variable declarations for form, data and url
  var data = {
    'username': $('#username').val(),
    'password': $('#password').val(),
  };
  var url = form.attr('action');

  //Ajax call

  $.ajax({
    method: 'POST',
    url: url,
    data: JSON.stringify(data),
    contentType: 'application/x-www-form-urlencoded',  //generated from Postman header 
    complete: function (data) {      //specify function to be run when Ajax request completes
      let responseText = JSON.parse(data.responseText);
      if (data.status === 200) {  // if http status 200 means accepted print login successful with css color property of green
        $('#ajax-response').html(responseText.message).css('color', 'green');
      } else {
        $('#ajax-response').html(responseText.message).css('color', 'red');  //else login failed with css color property of red
      }
    }
  });
});

$('#register-form').submit(function (e) {  //register submit form

  e.preventDefault();    //avoid page submitting on refresh

  var form = $(this);       //variable declarations for form, data and url
  var data = {
    'username': $('#username').val(),
    'password': $('#password').val(),
  };
  var url = form.attr('action');

  //Ajax call

  $.ajax({
    method: 'POST',
    url: url,
    data: JSON.stringify(data),
    contentType: 'application/x-www-form-urlencoded',   //generated from Postman header 
    complete: function (data) {   //specify function to be run when Ajax request completes
      let responseText = JSON.parse(data.responseText);
      if (data.status === 200) {      // if http status 200 means accepted print login successful with css color property of green
        $('#ajax-response').html(responseText.message).css('color', 'green');   // if http status 200 means accepted print login successful with css color property of green
      } else {
        console.log(responseText.message);
        $('#ajax-response').html(responseText.message).css('color', 'red');   //else login failed with css color property of red
      }
    }
  });
});
