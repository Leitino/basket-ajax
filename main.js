$(function() {

  $('#button').click(function() {
    var select = $('#select').val()
    $.ajax({
      url:"https://www.boolean.careers/api/array/basket?n="+select,
      method:"GET",
      success:function(data) {
        var listaGiocatori = []
        var giocatori = data.response
        listaGiocatori.push(giocatori)
        console.log(listaGiocatori)
        for (var i = 0; i < listaGiocatori.length; i++) {
          for (var i = 0; i < giocatori.length; i++) {
            console.log(giocatori[i].playerCode)
          }

        }
      }
    })
  })

})
