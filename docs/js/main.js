$(document).ready(function () {
  //クリックでcontenteditableを追加
  $('.docBody p,.docTitle h1').on('click', function () {
    $(this).attr('contenteditable', 'true');
  });


  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/getjson',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      $('.docBody').children('p').html(data.body);
      //console.log('FROM SEVER: ' + data.body);
    }

  });


  //Get body keyup event
  $('.docBody').on('keyup', 'p', function () {
    var bodydata = $(this).html();
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8080/save',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        inputdata: bodydata
      }),
      success: function (data) {
        //var body = JSON.stringify(data);;
        console.log('FROM SEVER: ' + data);
      }

    });
    //Get html of body
    //POST to sever

  });

});