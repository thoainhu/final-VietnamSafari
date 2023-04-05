let dataBooking = JSON.parse(localStorage.getItem("INFOBOOKING"))
let dataTotal = JSON.parse(localStorage.getItem("INFOTOTAL"))
$(function () {
  $name = $(".name span").text(dataBooking.firstname + " " + dataBooking.lastname)
  $phone = $(".phone span").text(dataBooking.phone)
  $mail = $(".mail span").text(dataBooking.email)
  $date = $(".date span").text(dataBooking.date)
  if (dataBooking.note == "") {
    $(".note").addClass("active")
  } else {
    $(".note span").text(dataBooking.note)
  }

  $quantityAdult = $("#adult .qualityitem span").text(dataTotal.quantityAdult)
  $sumAdultFinal = $("#adult .money span")
  if (dataTotal.quantityAdult > 0) {
    $sumAdultFinal = dataTotal.quantityAdult * dataTotal.sumAdult
    $("#adult .money span").text($sumAdultFinal)
  } else {
    $("#adult").addClass("active")
  }

  $quantityChild = $("#child .qualityitem span").text(dataTotal.quantityChild)
  $sumChildFinal = $("#child .money span")
  if (dataTotal.quantityChild > 0) {
    $sumChildFinal = dataTotal.quantityChild * dataTotal.sumChild
    $("#child .money span").text($sumChildFinal)
  } else {
    $("#child").addClass("active")
  }

  $totalItemFinal = $(".form .totalquantity span").text(dataTotal.totalQuantity)
  $totalPriceFinal = $(".form .totalpirceFinal span").text(dataTotal.totalPrice)

})
new WOW().init()
