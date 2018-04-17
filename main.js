$(function() {
  $('#button').click(function() {
    var select = $('#select').val()
    $.ajax({
      url:"https://www.boolean.careers/api/array/basket?n="+select,
      method:"GET",
      success:function(data) {
        console.log(data.response)

      }


    })
  })

})
