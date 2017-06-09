//This is the business logic

/*Current version 1.0.0
Creator: Dennis Muturia
*/
function pings(num) {

  var array = []


  for (var i = 1; i <= num; i++) {
    if((i%3 === 0) && !(i%5 === 0) && !(i%15 === 0)){
      array.push('ping')
    }
    else if ((i%5 === 0) && !(i%3 === 0) && !(i%15 === 0)) {
      array.push('pong')
    }
    else if ((i%15=== 0) && (i%3 === 0) && (i%5 === 0)){
      array.push('pingpong')
    }else{
      array.push(i)
    }
  }
  return array
}
//pings(31)
//User Interface

$(document).ready(function(){
  $('form#ping').submit(function(event){
    event.preventDefault();
    var num = parseInt($('input#pingNum').val())
    var newNum = pings(num)

    $('#output').text('')

    $("#output").append('<ul>')
    newNum.forEach(function(newnu){
      $("#output").append('<li> ' + newnu +'</li>')

    })
    $("#output").append('</ul>')
    //console.log(newNum)


  })
})
