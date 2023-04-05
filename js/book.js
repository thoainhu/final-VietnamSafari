let firstname = document.querySelector(".firstname")
let lastname = document.querySelector(".lastname")
let phone = document.querySelector("#phone")
let email = document.querySelector("#email")
let date = document.querySelector("#datepicker")
let note = document.querySelector("#note")

$(function () {
  $("#datepicker").datepicker({ minDate: 0 })
  $(".date input").change(function () {
    $date = $(this).closest(".date").find("input").val()
    $(this).closest(".form").find(".itemname .date span").text($date)
  })

  $(".typeClick").click(function () {
    $type = $(this).attr("type")
    $quantity = parseInt($(this).parent().find("input").val())
    $totalquantity = parseInt($(".totalquantity span").text())
    $pricecore = parseInt($(this).closest(".item").find(".pricecore").text())
    $sum = parseInt($(this).closest(".item").find(".sum").text())
    $total = parseInt($(".totalpirce span").text())
    if ($type == "plus") {
      $quantity++
    } else if ($type == "minus") {
      if ($quantity > 0) {
        $quantity--
      }
    }
    $(this).parent().find("input").val($quantity)

    $quantityadult = $(this).closest(".chooseticket").find("#adult input").val()
    $quantitychild = $(this).closest(".chooseticket").find("#child input").val()
    $totalquantity = parseInt($quantityadult) + parseInt($quantitychild)
    $(".totalquantity span").text($totalquantity)

    if ($total == 0) {
      $sum = $pricecore * $quantity
      $total = $sum
    } else {
      if ($quantity == 1 && $type == "plus") {
        $sum = $pricecore
      } else {
        $total = $total - $sum
        $sum = $pricecore * $quantity
      }
      $total = $total + $sum
    }

    $(this).closest(".item").find(".sum").text($sum)
    $(".totalpirce span").text($total)
  })
  $(".form .button .btn").click(function (e) {
    e.preventDefault()
    $totalquantity = $(".totalquantity span").text()
    
    if ($totalquantity > 0) {
      $(".error").removeClass("active")
      if (checkValidInput()) {
        let dataInfo = {
          firstname: firstname.value,
          lastname: lastname.value,
          phone: phone.value,
          email: email.value,
          date: datepicker.value,
          note: note.value,
        }
        localStorage.setItem("INFOBOOKING", JSON.stringify(dataInfo))

        let dataTotal = {
          totalQuantity: $totalquantity,
          totalPrice: $total,
          sumAdult: $("#adult .pricecore").text(),
          sumChild: $("#child .pricecore").text(),
          quantityAdult: $("#adult input").val(),
          quantityChild: $("#child input").val(),
        }
        localStorage.setItem("INFOTOTAL", JSON.stringify(dataTotal))

        window.location.href = "bookcheckout.html"
      } else {
        $(".mess .error").addClass("active")
      }
    }   else {
      $(".error").addClass("active")
    }
  })
})

function checkValidInput() {
  let check = true;
  if (firstname.value == "" || lastname.value == "" || phone.value == "" || email.value == "" || datepicker.value == "") {
    check = false
  }
  else if (phone.value.length < 9 || phone.value.length > 11) {
    let phoneError = document.querySelector(".mess .invalid");
    phoneError.classList.add("active")
    check = false;
  }
  return check
}
new WOW().init()
