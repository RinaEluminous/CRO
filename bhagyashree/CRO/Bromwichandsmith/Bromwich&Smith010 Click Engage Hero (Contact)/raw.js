var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {


        jQuery('.count1').prop('Counter',0).animate({
              Counter: jQuery('.count1').text()
        }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
            jQuery('.count1').text(Math.ceil(now));
          }
      });

       jQuery('.count2').prop('Counter',0).animate({
              Counter: jQuery('.count2').text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
            jQuery('.count2').text(Math.ceil(now));
          }
      });



      jQuery('.count3').prop('Counter',0).animate({
              Counter: jQuery('.count3').text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {

            jQuery('.count3').text('$'+now.toLocaleString('en-US'));
          }
      });

    clearInterval(waitForjQuery);
	 }
  }, 50);


var waitForjQuery = setInterval(function() {
    if (typeof jQuery != 'undefined') {

      jQuery({ Counter: 0 }).animate({ Counter: jQuery('.count1').text() }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          jQuery('.count1').text(Math.ceil(this.Counter));
        }
      });

      jQuery({ Counter: 0 }).animate({ Counter: jQuery('.count2').text() }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          jQuery('.count2').text(Math.ceil(this.Counter));
        }
      });

      jQuery({ Counter: 0 }).animate({ Counter: jQuery('.count3').text() }, {
        duration: 1000,
        easing: 'swing',
        step: function () {
          jQuery('.count3').text('$'+this.Counter.toLocaleString('en-US'));
        }
      });

 clearInterval(waitForjQuery);
   }
  }, 50);

<input type="range" id="ageInputId" value="24" min="1" max="100" oninput="ageOutputId.value = ageInputId.value">
<output id="ageOutputId">24</output>


<div class="chrome">
  <input id="myinput" min="0" max="100000" type="range" value="5000" oninput="valueOutputId.value = myinput.value"/>
  <output id="valueOutputId">20000</output>
</div>


document.getElementById("myinput").oninput = function() {
  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)';
  console.log("value >> " + this.value);
  document.getElementById("valueOutputId").value = this.value;
};



  const range  = document.querySelector(".slidecontainer .slider#custCreditSlider");
  range.addEventListener("input", () => {
    console.log("on input...")
    setBubble(range);
  });

  function setBubble(range) {
    const bubble = document.querySelector(".slidecontainer #custCreditValue");
    const val = range.value;
    console.log('val >> '+ val);
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML  = val;

    range.style.background = 'linear-gradient(to right, #26D07C 0%, #26D07C ' + val + '%, #fff ' + val + '%, white 100%)';

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  }