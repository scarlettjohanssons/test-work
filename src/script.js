//Открытие Pop Up
$('.btn_pop_up').click(function()
{
  $('.bg1').css('opacity','0.7');
  $('.overlay').fadeIn();
  $('.overlay').addClass('disabled');
});
//Закрытие Pop Up Нажать на хрестик
$('.close_popup').click(function()
{
  $('.overlay').fadeOut();
  $('.bg1').css('opacity', '1');
});
//Закрытите Pop Up Нажать на любое место в не зоны Pop Up
$(document).mouseup(function(e)
{
  var popup = $('.popup');
  if(e.target != popup[0] && popup.has(e.target).length === 0)
  {
    $('.overlay').fadeOut();
    $('.bg1').css('opacity', '1');
  }
});
//Закрытие верхнего блока(плавно)
$('.close1').click(function()
{
  $('.block1').fadeOut();
});
//Открытие второго Pop Up
$('.popup_btn').click(function()
{
  $('.bg1').css('opacity','0.7');
  $('.overlay').fadeOut();
  // $('.overlay2').fadeIn();
  // $('.overlay2').addClass('disabled');
});
//Закрытие второго Pop Up Нажать на хрестик
$('.close_popup2').click(function()
{
  $('.overlay2').fadeOut();
  //$('.bg1').css('opacity', '1');
});
//Закрытите второго Pop Up Нажать на любое место в не зоны Pop Up
$(document).mouseup(function(e)
{
  
  var popup2 = $('.popup2');
  if(e.target != popup2[0] && popup2.has(e.target).length === 0)
  {
    $('.overlay2').fadeOut();
    //$('.bg1').css('opacity', '1');
  }
});

$('.popup2_btn').click(function()
{
  $('.overlay2').fadeOut();
  $('.bg1').css('opacity', '1');
});

// $('.popup_btn').click(function()
// {
//   $('#name').html(function(i, val)
//   {
//     if(val == '')
//     {
//       $('.popup_btn').prop('disabled', true);
//     }
//     else if(val == 'aaaa')
//     {
//       $('.popup_btn').prop('disabled', false);
//     }
//   });
// });
  




// $('.popup').ready(function(e)
// {
//   e.preventDefault();
//   var name = $('#name').val();
//   var email = $('#email').val();

//   $(".error").remove();
 
//     if (name.length < 1) {
//       $('.popup_btn').prop('disabled', true);
//     }
//     if (email.length< 1) {
//       $('#email').after('<span class="error">This field is required</span>');
//     } else {
//       var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
//       var validEmail = regEx.test(email);
//       if (!validEmail) {
//         $('#email').after('<span class="error">Enter a valid email</span>');
//       }
//     }
// });




//Начальное условие кнопки уменьшения
$(function() 
{
    $('#number').html(function(i, val) 
    {
      if(val == 1)
      {
        $('.minus').prop('disabled', true);
      }
      else
      {
        $('.minus').prop('disabled', false);
      }
    });
});
//Добавление на 1 цифру
$(function() 
{
  $('.plus').click(function() 
  {
    $('.btn_price').html(function(i, val)
    {
      a = val * 1 + 10.99;
      return b = a.toFixed(2); //Округление до сотых
    });
    $('#number').html(function(i, val) 
    {
      if(val == 0)//Условие разблокировки кнопки
      {
        $('.minus').prop('disabled', true);
      }
      else
      {
        $('.minus').prop('disabled', false);
      }
      return val * 1 + 1;//Увеличение
    });
  });
});
//Выбор страны
$('.list2').change(function()
{
  var str = "";
  $('.list2 .usa:selected').each(function()
  {
    str += $(this).val() + " ";
  });
  $('#phone').val(str);
})
.change();



$(function() 
{
  $('.minus').click(function() 
  {
    $('.btn_price').html(function(i, val)
    {
      a = val * 1 - 10.99;
      return b = a.toFixed(2);
    });
    $('#number').html(function(i, val) 
    {
      if(val == 2) //Условие блокировки кнопки
      {
        $('.minus').prop('disabled', true);
      }
      else
      {
        $('.minus').prop('disabled', false);
      }
      return val * 1 - 1;//Уменьшение
    });
  });
});



$('.popup_btn').click(function(e) 
{
  var empty = $(this).parent().find("input").filter(function() 
  {
    return this.value === "";
  });
  if (!empty.length) 
  {
    //Если все графы заполнены, то показываем popup
    alert("ieuwiuefjw");
    $('.overlay2').fadeIn();
    $('.overlay2').addClass('disabled');
    $('.overlay2').show();
    //очищаем все данные текстовых полей, кроме кнопок
    // $('form input').not(':button, :submit').val('');
  }
  e.preventDefault();
});
//Запись в LocalStorage. Но только одного человека.
function store()
{
  var inputName= document.getElementById("name");
  localStorage.setItem("name", inputName.value);
  var inputEmail= document.getElementById("email");
  localStorage.setItem("email", inputEmail.value);
  var inputPhone= document.getElementById("phone");
  localStorage.setItem("phone", inputPhone.value);
  var inputPrice= document.getElementsByClassName("btn_price")
  localStorage.setItem("btn_price", inputPrice.html);
}