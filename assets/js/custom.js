$('#company_starting_date').datepicker({
    uiLibrary: 'bootstrap5',
    orientation: "auto",
    format: 'dd.mm.yyyy'
});
$('#birth_date').datepicker({
    uiLibrary: 'bootstrap5',
    orientation: "auto",
    format: 'dd.mm.yyyy'
});
function show_step_1() {
  $("#step_1").show();
  $("#step_2, #step_3, #step_4, #step_5, #step_6").hide();
  $(window).scrollTop(0);
}
function show_step_2() {
  validation = 0;
  if (typeof $("#company_starting_date").val() == 'undefined' || $('#company_starting_date').val() == null || $('#company_starting_date').val() == '' || $('#company_starting_date').val().length < 10) {
      $('#company_starting_date').addClass("has-error");
      validation = 1;
  } else {
      $('#company_starting_date').removeClass("has-error");
  }
  if (typeof $("#company_name").val() == 'undefined' || $('#company_name').val() == null || $('#company_name').val() == '' || $('#company_name').val().length < 3) {
      $('#company_name').addClass("has-error");
      validation = 1;
  } else {
      $('#company_name').removeClass("has-error");
  }
  if(validation == 0){
    $("#step_2").show();
    $("#step_1, #step_3, #step_4, #step_5, #step_6").hide();
    $(window).scrollTop(0);
  }
}
function show_step_3() {
  var validation = 0;

  if (typeof $("#company_form").val() == 'undefined' || $('#company_form').val() == null || $('#company_form').val() == '') {
      $('#company_form').addClass("has-error");
      validation = 1;
  } else {
      $('#company_form').removeClass("has-error");
  }
  if (typeof $("#company_full_time_employees").val() == 'undefined' || $('#company_full_time_employees').val() == null || $('#company_full_time_employees').val() == '') {
      $('#company_full_time_employees').addClass("has-error");
      validation = 1;
  } else {
      $('#company_full_time_employees').removeClass("has-error");
  }
  if (typeof $("#company_half_time_employees").val() == 'undefined' || $('#company_half_time_employees').val() == null || $('#company_half_time_employees').val() == '') {
      $('#company_half_time_employees').addClass("has-error");
      validation = 1;
  } else {
      $('#company_half_time_employees').removeClass("has-error");
  }
  if (typeof $("#company_tasks").val() == 'undefined' || $('#company_tasks').val() == null || $('#company_tasks').val() == '' || $('#company_tasks').val().length < 4) {
      $('#company_tasks').addClass("has-error");
      validation = 1;
  } else {
      $('#company_tasks').removeClass("has-error");
  }
  if(validation == 0){

    $("#step_1, #step_2, #step_4, #step_5, #step_6").hide();
    $("#step_3").show();
    $(window).scrollTop(0);
  }

}
function show_step_4() {
  var validation = 0;

  if (typeof $("#company_time").val() == 'undefined' || $('#company_time').val() == null || $('#company_time').val() == '') {
      $('#company_time').addClass("has-error");
      validation = 1;
  } else {
      $('#company_time').removeClass("has-error");
  }
  if (typeof $("#company_type").val() == 'undefined' || $('#company_type').val() == null || $('#company_type').val() == '') {
      $('#company_type').addClass("has-error");
      validation = 1;
  } else {
      $('#company_type').removeClass("has-error");
  }
  if (typeof $("#company_address_street_number").val() == 'undefined' || $('#company_address_street_number').val() == null || $('#company_address_street_number').val() == ''  || $('#company_address_street_number').val().length < 2) {
      $('#company_address_street_number').addClass("has-error");
      validation = 1;
  } else {
      $('#company_address_street_number').removeClass("has-error");
  }
  if(isNaN($("#company_address_plz").val()) == false){
    var company_address_plz_numeric = 1;
  }else{
    var company_address_plz_numeric = 0;
  }
  if (typeof $("#company_address_plz").val() == 'undefined' || $('#company_address_plz').val() == null || $('#company_address_plz').val() == '' || $('#company_address_plz').val().length < 5 || company_address_plz_numeric == 0 ) {
      $('#company_address_plz').addClass("has-error");
      validation = 1;
  } else {
      $('#company_address_plz').removeClass("has-error");
  }
  if (typeof $("#company_address_town").val() == 'undefined' || $('#company_address_town').val() == null || $('#company_address_town').val() == '' || $('#company_address_town').val().length < 2) {
      $('#company_address_town').addClass("has-error");
      validation = 1;
  } else {
      $('#company_address_town').removeClass("has-error");
  }
  if(validation == 0){
    $("#step_1, #step_2, #step_3, #step_5, #step_6").hide();
    $("#step_4").show();
    $(window).scrollTop(0);
  }
}

function show_step_5() {
  var validation = 0;
  if (typeof $("#first_name").val() == 'undefined' || $('#first_name').val() == null || $('#first_name').val() == '' || $('#first_name').val().length < 2) {
      $('#first_name').addClass("has-error");
      validation = 1;
  } else {
      $('#first_name').removeClass("has-error");
  }
  if (typeof $("#last_name").val() == 'undefined' || $('#last_name').val() == null || $('#last_name').val() == '' || $('#last_name').val().length < 2) {
      $('#last_name').addClass("has-error");
      validation = 1;
  } else {
      $('#last_name').removeClass("has-error");
  }

  var birth_date = $("#birth_date").val().toLowerCase();
  var re_birth_date = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/;
  var isAnbirth_date = re_birth_date.test(birth_date.toLowerCase());

  if (typeof $("#birth_date").val() == 'undefined' || $('#birth_date').val() == null || $('#birth_date').val() == '' || isAnbirth_date == false) {
      $('#birth_date').addClass("has-error");
      validation = 1;
  } else {
      $('#birth_date').removeClass("has-error");
  }
  if (typeof $("#birth_country").val() == 'undefined' || $('#birth_country').val() == null || $('#birth_country').val() == '' || $('#birth_country').val().length < 2) {
      $('#birth_country').addClass("has-error");
      validation = 1;
  } else {
      $('#birth_country').removeClass("has-error");
  }
  if (typeof $("#birth_city").val() == 'undefined' || $('#birth_city').val() == null || $('#birth_city').val() == '' || $('#birth_city').val().length < 2) {
      $('#birth_city').addClass("has-error");
      validation = 1;
  } else {
      $('#birth_city').removeClass("has-error");
  }
  if(validation == 0){
    $("#step_1, #step_2, #step_3, #step_4, #step_6").hide();
    $("#step_5").show();
    $(window).scrollTop(0);
  }
}

function show_step_6() {

  var validation = 0;
if (typeof $("#gender").val() == 'undefined' || $('#gender').val() == null || $('#gender').val() == '') {
    $('#gender').addClass("has-error");
    validation = 1;
} else {
    $('#gender').removeClass("has-error");
}
if (typeof $("#citzienship").val() == 'undefined' || $('#citzienship').val() == null || $('#citzienship').val() == '' || $('#citzienship').val().length < 2) {
    $('#citzienship').addClass("has-error");
    validation = 1;
} else {
    $('#citzienship').removeClass("has-error");
}
var email = $("#customer_email").val().toLowerCase();
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var isAnEmail = re.test(email.toLowerCase());
if (typeof $("#customer_email").val() == 'undefined' || $('#customer_email').val() == null || $('#customer_email').val() == '' || isAnEmail == false) {
    $('#customer_email').addClass("has-error");
    validation = 1;
} else {
    $('#customer_email').removeClass("has-error");
}

if (typeof $("#mobile_number").val() == 'undefined' || $('#mobile_number').val() == null || $('#mobile_number').val() == '' || $('#mobile_number').val().length < 2) {
    $('#mobile_number').addClass("has-error");
    validation = 1;
} else {
    $('#mobile_number').removeClass("has-error");
}
if(validation == 0){
      $.ajax({
      url: "/assets/php/mobile_number_check.php",
      method: "POST",
      data: $("#mobile_number").serialize(),
      success: function(data) {
        var mobile_number_is_mobile = data;

        if(mobile_number_is_mobile == 1){
          $("#step_1, #step_2, #step_3, #step_4, #step_5").hide();
          $("#step_6").show();
          $(window).scrollTop(0);
          $('#mobile_number').removeClass("has-error");
        }else{
          $('#mobile_number').addClass("has-error");
        }
        //alert(mobile_number_is_mobile);
      }
    });
}
};

function order_submit() {

  var validation = 0;
  if (typeof $("#private_address_street_number").val() == 'undefined' || $('#private_address_street_number').val() == null || $('#private_address_street_number').val() == '' || $('#private_address_street_number').val().length < 2) {
      $('#private_address_street_number').addClass("has-error");
      validation = 1;
  } else {
      $('#private_address_street_number').removeClass("has-error");
  }

  if(isNaN($("#private_address_plz").val()) == false){
    var private_address_plz_numeric = 1;
  }else{
    var private_address_plz_numeric = 0;
  }
  if (typeof $("#private_address_plz").val() == 'undefined' || $('#private_address_plz').val() == null || $('#private_address_plz').val() == '' || $('#private_address_plz').val().length < 5 || private_address_plz_numeric == 0) {
      $('#private_address_plz').addClass("has-error");
      validation = 1;
  } else {
      $('#private_address_plz').removeClass("has-error");
  }
  if (typeof $("#private_address_town").val() == 'undefined' || $('#private_address_town').val() == null || $('#private_address_town').val() == '' || $('#private_address_town').val().length < 2) {
      $('#private_address_town').addClass("has-error");
      validation = 1;
  } else {
      $('#private_address_town').removeClass("has-error");
  }
  if (!$('#agb').get(0).checked) {
      $('#agb_label').addClass("has-error_agb");
      validation = 1;
  } else {
      $('#agb_label').removeClass("has-error_agb");
  }
  if(validation == 0){
    $.ajax({
        url: "/assets/php/order_form.php",
        method: "POST",
        data: $("#angebot_anfordern").serialize(),
        success: function(response) {
          var reference = response;
          console.log(reference);
          window.location.href = 'https://www.gewerbio.com/payment/'+reference;
        }
      });
  }
};


$("#contact_form").on('submit', function(e) {
    e.preventDefault();
    var validation = 0;
    var email = $("#contact_email").val().toLowerCase();
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isAnEmail = re.test(email.toLowerCase());
    if (typeof $("#contact_email").val() == 'undefined' || $('#contact_email').val() == null || $('#contact_email').val() == '' || isAnEmail == false) {
        $('#contact_email').addClass("has-error");
        validation = 1;
    } else {
        $('#contact_email').removeClass("has-error");
    }
    if (typeof $("#contact_phone").val() == 'undefined' || $('#contact_phone').val() == null || $('#contact_phone').val() == '' || $('#contact_phone').val().length < 2) {
        $('#contact_phone').addClass("has-error");
        validation = 1;
    } else {
        $('#contact_phone').removeClass("has-error");
    }
    if (typeof $("#contact_first_name").val() == 'undefined' || $('#contact_first_name').val() == null || $('#contact_first_name').val() == '' || $('#contact_first_name').val().length < 2) {
        $('#contact_first_name').addClass("has-error");
        validation = 1;
    } else {
        $('#contact_first_name').removeClass("has-error");
    }
    if (typeof $("#contact_last_name").val() == 'undefined' || $('#contact_last_name').val() == null || $('#contact_last_name').val() == '' || $('#contact_last_name').val().length < 2) {
        $('#contact_last_name').addClass("has-error");
        validation = 1;

    } else {
        $('#contact_last_name').removeClass("has-error");
    }

    if (typeof $("#contact_message").val() == 'undefined' || $('#contact_message').val() == null || $('#contact_message').val() == '' || $('#contact_message').val().length < 10) {
        $('#contact_message').addClass("has-error");
        validation = 1;

    } else {
        $('#contact_message').removeClass("has-error");
    }

    if(validation == 0){
      document.getElementById('contact_submit').disabled = 'disabled';
      document.getElementById('contact_submit').innerHTML = 'Bitte warten...';
      $.ajax({
      url: "/assets/php/contact_form.php",
      method: "POST",
      data: $("#contact_form").serialize(),
      success: function(response) {
        //alert('hi');
        //console.log(response);
        if(response == 'success'){
        document.getElementById('contact_submit').innerHTML = 'Versendet';
        }
      }
    });

  }
});
