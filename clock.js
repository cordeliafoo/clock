document.addEventListener('DOMContentLoaded', function () {
  // var secondHand = document.getElementById('second')
  // var minuteHand = document.getElementById('minute')
  // var hourHand = document.getElementById('hour')

  var actualSecond = 0
  var rotateDegree = 6
  var rotateDegreeHour = 30

  setInterval(runClock, 1000)

  function runClock () {
    var time = new Date()
    // secondRotation(time.getSeconds())
    // minuteRotate(time.getMinutes())
    // hourRotation(time.getHours())
    updateTime('second', time.getSeconds(), rotateDegree, 0)
    updateTime('minute', time.getMinutes(), rotateDegree, 0)
    updateTime('hour', time.getHours(), rotateDegreeHour, time.getMinutes()/2)
  }

  function updateTime (element, timeUnit, degree, position) {
    var time = new Date()
    var clockElement = document.querySelector('#' + element)
    clockElement.style.transform = 'rotate(' + (timeUnit * degree + position) + 'deg)'
    console.log(timeUnit * degree + position)
  }

  // function secondRotation (sec) {
  //   secondHand.style.transform = 'rotate(' + sec * rotateDegree + 'deg)'
  //   minuteRotate()
  //   actualSecond++
  // }
  //
  // function minuteRotate (min) {
  //   var actualMinute = Math.floor(actualSecond / 60)
  //   console.log(actualMinute)
  //   minuteHand.style.transform = 'rotate(' + min * rotateDegree + 'deg)'
  //   hourRotate(actualMinute)
  // }
  //
  // function hourRotate (hr) {
  //   var actualHour = Math.floor(min / 60)
  //   hourHand.style.transform = 'rotate(' + hr * rotateDegreeHour + 'deg)'
  // }

    // setInterval(secondRotation.bind(null, actualSecond), 1000)
}) // end of document.addEventListener
