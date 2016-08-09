$(document).ready(function () {



var $input = $('#boxArea'); // Box for you to input random Words
var $btn = $('#request'); // Button to activate translation
var $spoke = $('#spoke'); // Yoda output of translation

$btn.on('click', function () {
 $.ajax({
    url: 'https://yoda.p.mashape.com/yoda',

    type: 'GET', //
    data: {
    sentence: $('#boxArea').val() // box for you to input wordings
    },
    datatype: 'json',
    success: function(data) {alert(data);
    // JSON.stringify(data);
    $('#spoke').html(data); //box that yoda will speak
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-Mashape-Key', 'm2TVGB0dPmmshjy3VWzjORBnsy2tp14BP2DjsnrrXLsRuhozEG');
    }
})
    .fail(function(request, textStatus, errorThrown){
    $spoke.html(request.status + " " + textStatus + " " + errorThrown); //If fail to show error msg

   });
});
});
