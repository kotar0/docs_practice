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
      $('.docTitle').children('h1').html(data.title)
        //console.log('FROM SEVER: ' + data.body);
    }
  });


  //Get body keyup event
  $(".docBody").on('keyup', 'p', function () {
    var bodydata = $(this).html();
    //var titledata = $('.docTitle h1').html();

    sendPost('docbody', bodydata);
    /*$.ajax({
      type: 'POST',
      url: 'http://localhost:8080/save',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        doctitle:titledata,
        docbody: bodydata
      }),
      success: function (data) {
        //var body = JSON.stringify(data);;
        console.log('FROM SEVER: ');
      }

    });
    */


    function sendPost(a, b) {
      var senddata = {};
      senddata[a] = b;
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/save',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(senddata),
        success: function (data) {
          //var body = JSON.stringify(data);;
          console.log('Success!');
        }
      });
    };
  });

});