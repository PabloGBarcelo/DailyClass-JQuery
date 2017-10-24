function init(){

  $('#menu > ul li:first-child').addClass('selected');
  $('section > article:nth-child(2)').addClass('middle');
  $('.list-item:odd').addClass('highlighted');
  $('.list-item:last').css({
    border:'1px solid #eee'
  });
  $('#form-container > form > input').focus(function(){
    $(this).css({
      border:'1px solid #84abda'
    });
  }).blur(function(){
    $(this).css({
      border: ''
    });
  });
}

$(document).ready(init);
