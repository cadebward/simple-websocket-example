(function ($, window, document, undefined) {

  'use strict';

  // setup new socket, point this to your host:port
  var socket = new WebSocket('ws://localhost:5000');

  socket.onopen = function () {
    // when connection is opened, this is executed
    console.log('connection is open');
  }

  socket.onmessage = function (e) {
    // when the client receives a message from the server, this is executed
    console.log('Server: ' + e.data);
  };

  socket.onerror = function (e) {
    // executed on error...
    console.log(e);
  }


  // watches for click on submit button
  $('#submit').on('click', function (e) {
    // prevent form from actually submitted
    e.preventDefault();

    // save message from text box
    var message = $('#message').val();

    // send message to server
    socket.send(message);

    // clear the text box
    $('#message').val('');
  })

})(jQuery, window, document);