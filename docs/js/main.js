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
  $(document).on('keyup', '.docTitle,.docBody', function () {
    var bodydata = $('.docBody p').html();
    var titledata = $('.docTitle h1').html();
    console.log(titledata);
    $.ajax({
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
    //Get html of body
    //POST to sever

  });

});