window.addEventListener('load', function (e) {

  // let cart = document.querySelectorAll('.cart');
  let price = document.querySelector('.total b');
  let open = document.querySelectorAll('.cart .open');
  let menu = document.querySelectorAll('.cart .menu');
  let close = document.querySelectorAll('.cart .menu .down');
  let plus = document.querySelectorAll('.cart .menu .icon .fa-plus');
  let minus = document.querySelectorAll('.cart .menu .icon .fa-minus');
  let submit = document.querySelectorAll('.cart .menu .submit');

  

 



  // console.log(price.innerHTML);

  open.forEach(el => {

     el.addEventListener('click', function () { 
      $(this).parent().find('.menu').css('transform','translateY(0px)')
      document.querySelector('.back').classList.remove('active')
     })
     
  })

  close.forEach(el => {

     el.addEventListener('click', function () { 
      $(this).parent().parent().parent().find('.menu').css('transform','translateY(-100%)')
     })
  })
  
  let $num = 0
  let sum = 0
  
  $('header .cart .fa-minus').hide()

  plus.forEach(el => {

     el.addEventListener('click', function () { 
       
       $num++
      $(this).parent().parent().find('.numbers').html($num)
      var $id = $(this).parent().parent().find('.sum').attr('data-price')
      sum += +$id
      $(this).parent().parent().find('.sum').html(sum)
      $(this).parent().find('.fa-minus').show(500)
  
     })
  })

  minus.forEach(min => {

     min.addEventListener('click', function () { 
       $num--
      $(this).parent().parent().find('.numbers').html($num)
      var $id = $(this).parent().parent().find('.sum').attr('data-price')
      sum -= +$id
    
      $(this).parent().parent().find('.sum').html(sum)

      if ($num < 1){
        $(this).hide(500)
      }
  
     })
  })

  



  

  let result = 0
  $('.fa-check-circle').hide()
  $names = ""
  

  submit.forEach(el => {

     el.addEventListener('click', function () { 
      result += sum
      price.innerHTML = result

      if (sum > 0){
        $(this).parent().parent().parent().find('.fa-check-circle').show(500)
      }
      else{
        $(this).parent().parent().parent().find('.fa-check-circle').hide(500)
      }

      $nums = $(this).parent().parent().find('.sum').attr('data-price');   
      $names += $(this).parent().parent().parent().find('h2').html() + " ==== " + $num
       + "kg ====" + $num * $nums + "$<br>"
      // console.log($(this).parent().parent().parent().find('h2').html());


      $(this).parent().parent().parent().parent().parent().find('.menu').css('transform','translateY(-100%)')
      sum = 0
      $num = 0
      $(this).parent().parent().find('.sum').html(0)
      $(this).parent().parent().find('.numbers').html(0)
      $(this).parent().parent().find('.fa-minus').hide(500)

      document.querySelector('.back').classList.add('active')
     })
  })

  $('.send').on('click', function (){

    $('.texts').html($names +"Total:======"+result+"$")

    $('.result').css('top', '100px')

  })

  $('.good').on('click', function (){

    $('.result').css('top', '-100%')
    price.innerHTML = 0
    result = 0
    $('.fa-check-circle').hide()
    $names = ""
  })



  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

});
