(function () {
	try {
	  /* main variables */
	  var debug = 1;
	  var variation_name = "test84";
  
	  /* helper library */
	  var _$;
	  !(function (factory) {
		_$ = factory();
	  })(function () {
		var bm = function (s) {
		  if (typeof s === "string") {
			this.value = Array.prototype.slice.call(document.querySelectorAll(s));
		  }
		  if (typeof s === "object") {
			this.value = [s];
		  }
		};
		bm.prototype = {
		  eq: function (n) {
			this.value = [this.value[n]];
			return this;
		  },
		  each: function (fn) {
			[].forEach.call(this.value, fn);
			return this;
		  },
		  log: function () {
			var items =[];
			for (let index = 0; index < arguments.length; index++) {
			  items.push(arguments[index]);
			}
			console && console.log(variation_name, items);
		  },
		  addClass: function (v) {
			var a = v.split(" ");
			return this.each(function (i) {
			  for (var x = 0; x < a.length; x++) {
				if (i.classList) {
				  i.classList.add(a[x]);
				} else {
				  i.className += " " + a[x];
				}
			  }
			});
		  },
		  waitForElement: function (
			selector,
			trigger,
			delayInterval,
			delayTimeout
		  ) {
			var interval = setInterval(function () {
			  if (_$(selector).value.length) {
				clearInterval(interval);
				trigger();
			  }
			}, delayInterval);
			setTimeout(function () {
			  clearInterval(interval);
			}, delayTimeout);
		  },
		};
		return function (selector) {
		  return new bm(selector);
		};
	  });
  
	  var helper = _$();
  
	  /* Variation Init */
	  function init() {
		//MaxHeroHeader
		_$('body').addClass(variation_name);
		var maxHeroHeaderHtml='<div class="custMax_bmHeroHeader">'+
		'    <h1 class="bm-heading">Turn Hope into Healing<sup>™</sup></h1>'+
		'    <h2 class="bm-subheading">The Most Advanced Form of Natural Healing <br><em>Without a Prescription</em></h2>'+
		'</div>';
  
  		var bmHeroHeader = document.querySelector('html body.index .bm-hero-header');
		if(bmHeroHeader && !bmHeroHeader.querySelector('.custMax_bmHeroHeader')){
			 bmHeroHeader.insertAdjacentHTML('afterend', maxHeroHeaderHtml);
		}
  
		var heroProductWraperHtml='<div class="custMax_bmHeroProductWraper">'+
		'    <div class="custMax_productCategory forResistantSkin">'+
		'        <h2>'+
		'            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/icon-forResistantSkin.svg" alt="For resistant skin conditions and infections">'+
		'            For resistant skin conditions and infections'+
		'        </h2>'+
		'        <div class="custProductItemLists">'+
		'            <div class="custItemBox highlight red">'+
		'                <div class="badge">MOST POPULAR</div>'+
		'                <h3>EMUAIDMAX<sup>®</sup> First Aid Ointment 2oz</h3>'+
		'                <p>Faster and more intensive relief for skin infections:</p>'+
		'                <ul>'+
		'                    <li class="peppermint">Nail Fungus</li>'+
		'                    <li class="frost">Cold Sores</li>'+
		'                    <li class="frost2">Severe Boils</li>'+
		'                    <li class="quarter-spanish-white">Bumps & Nodules</li>'+
		'                    <li class="quarter-spanish-white2">Athlete\'s Foot</li>'+
		'                </ul>'+
		'                <div class="productImage">'+
		'                    <img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaidmax_0.5oz_front_E_ca4e1ca6-35ac-4a5c-b083-6df625a4eea0.jpg" alt="EMUAIDMAX<sup>®</sup> First Aid Ointment 2oz">'+
		'                </div>'+
		'                <a href="https://www.emuaid.com/products/emuaidmax-3" class="buyBtn">Buy Now</a>'+
		'            </div>'+
		'            <div class="custItemBox">'+
		'                <h3>EMUAIDMAX<sup>®</sup>️ Concentrate Serum</h3>'+
		'                <p>Concentrated free-flowing serum for deeper infusion:</p>'+
		'                <ul>'+
		'                    <li class="Iceberg">Scalp Issues</li>'+
		'                    <li class="link-water">Bed Sores</li>'+
		'                    <li class="Iceberg2">Seborrheic Dermatitis</li>'+
		'                    <li class="quarter-spanish-white">Folliculitis</li>'+
		'                </ul>'+
		'                <div class="productImage">'+
		'                    <img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/01-emuaidMAX-Bottle-Front_2000x.jpg" alt="EMUAIDMAX<sup>®</sup>️ Concentrate Serum">'+
		'                </div>'+
		'                <a href="https://www.emuaid.com/products/emuaidmax-concentrate-serum" class="buyBtn">Buy Now</a>'+
		'            </div>'+
		'            <div class="custItemBox">'+
		'                <h3>EMUAIDMAX<sup>®</sup> On-The-Go Ointment 2-Pack (20ml)</h3>'+
		'                <p>The same intensive relief in a convenient tube. Be prepared, anytime, anywhere.</p>'+
		'                <ul>'+
		'                    <li class="peppermint">Nail Fungus</li>'+
		'                    <li class="frost">Cold Sores</li>'+
		'                    <li class="frost2">Severe Boils</li>'+
		'                    <li class="quarter-spanish-white">Bumps & Nodules</li>'+
		'                    <li class="quarter-spanish-white2">Athlete\'s Foot</li>'+
		'                </ul>'+
		'                <div class="productImage">'+
		'                    <img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/image_4.svg?v=1702362613" alt="EMUAIDMAX<sup>®</sup> On-The-Go Ointment 2-Pack (20ml)">'+
		'                </div>'+
		'                <a href="https://www.emuaid.com/products/emuaidmax-tube-2pack" class="buyBtn">Buy Now</a>'+
		'            </div>'+
		'        </div>'+
		'    </div>'+
		'    <div class="custMax_productCategory forSensitive">'+
		'        <h2>'+
		'            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/icon-forSensitive.svg" alt="For sensitive skin conditions">'+
		'            For sensitive skin conditions'+
		'        </h2>'+
		'        <div class="custProductItemLists">'+
		'            <div class="custItemBox highlight blue">'+
		'                <div class="badge">MOST POPULAR</div>'+
		'                <h3>EMUAID<sup>®</sup> First Aid Ointment 2oz</h3>'+
		'                <p>Relief for itchy, painful, and resistant skin conditions:</p>'+
		'                <ul>'+
		'                    <li class="link-water">Eczema</li>'+
		'                    <li class="Iceberg">Hemorrhoids</li>'+
		'                    <li class="Iceberg">Psoriasis</li>'+
		'                    <li class="Iceberg2">Burns & Blisters</li>'+
		'                    <li class="Iceberg2">Dermatitis</li>'+
		'                </ul>'+
		'                <div class="productImage">'+
		'                    <img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/products/emuaid_0.5oz_front_E_96de6a22-25ea-4a27-8d57-112ba3ed34cb_2000x.jpg?v=1620715277" alt="EMUAID<sup>®</sup> First Aid Ointment 2oz">'+
		'                </div>'+
		'                <a href="https://www.emuaid.com/products/emuaid-first-aid-ointment-0-5oz" class="buyBtn">Buy Now</a>'+
		'            </div>'+
		'            <div class="custItemBox">'+
		'                <h3>EMUAID<sup>®</sup> Therapeutic Moisture Bar</h3>'+
		'                <p>Ultra-nourishing and cleansing for damaged skin:</p>'+
		'                <ul>'+
		'                    <li class="link-water">Eczema</li>'+
		'                    <li class="Iceberg2">Dermatitis</li>'+
		'                    <li class="Iceberg">Psoriasis</li>'+
		'                    <li class="french-lilac">Rosacea</li>'+
		'                </ul>'+
		'                <div class="productImage">'+
		'                    <img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/Overnight-Acne-Treatment.png?v=1662096653" alt="EMUAID<sup>®</sup> Therapeutic Moisture Bar">'+
		'                </div>'+
		'                <a href="https://www.emuaid.com/products/therapeutic-moisture-bar" class="buyBtn">Buy Now</a>'+
		'            </div>'+
		'        </div>'+
		'    </div>'+
		'    <div class="custMax_productCategory forMuscular">'+
		'        <h2>'+
		'            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/icon-forMuscular.svg" alt="For Muscular pain & Arthritis">'+
		'            For Muscular pain & Arthritis'+
		'        </h2>'+
		'        <div class="custProductItemLists">'+
		'            <div class="custItemBox">'+
		'                <h3>EMUAID<sup>®</sup> Pain Relieving Cream</h3>'+
		'                <p>Fast pain relief for:</p>'+
		'                <ul>'+
		'                    <li class="link-water">Aching muscles & joints</li>'+
		'                    <li class="link-water2">Backaches</li>'+
		'                    <li class="link-water3">Nerve Pain</li>'+
		'                    <li class="link-water3">Inflammation</li>'+
		'                    <li class="french-lilac">Arthritis</li>'+
		'                </ul>'+
		'                <div class="productImage">'+
		'                    <img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/Pain-Relieving-Cream.png?v=1662096655" alt="EMUAID<sup>®</sup> Pain Relieving Cream">'+
		'                </div>'+
		'                <a href="https://www.emuaid.com/products/emuaid-pain-relieving-cream" class="buyBtn">Buy Now</a>'+
		'            </div>'+
		'        </div>'+
		'    </div>'+
		'    <div class="custMax_productCategory forAcne">'+
		'        <h2>'+
		'            <img src="https://growth-hit.s3.us-west-2.amazonaws.com/emuaid/icon-forAcne.svg" alt="For Acne and Rosacea">'+
		'            For Acne and Rosacea'+
		'        </h2>'+
		'        <div class="custProductItemLists">'+
		'            <div class="custItemBox">'+
		'                <h3>EMUAID<sup>®</sup> Overnight Acne Treatment</h3>'+
		'                <p>Guaranteed To Reduce the Size & Severity of Any Blemish Overnight.</p>'+
		'                <ul>'+
		'                    <li class="amour2">Eliminates most stubborn blemishes</li>'+
		'                    <li class="link-water4">Blackheads</li>'+
		'                    <li class="vanilla-ice">Cystic Acne</li>'+
		'                    <li class="amour">Rosacea</li>'+
		'                </ul>'+
		'                <div class="productImage">'+
		'                    <img src="https://cdn.shopify.com/s/files/1/0549/3181/6637/files/overnight-acne-treatment.webp?v=1662096652" alt="EMUAID<sup>®</sup> Overnight Acne Treatment">'+
		'                </div>'+
		'                <a href="https://www.emuaid.com/products/overnight-acne-treatment" class="buyBtn">Buy Now</a>'+
		'            </div>'+
		'        </div>'+
		'    </div>'+
		'</div>';
		
		var bmTopProd = document.querySelector('html body.index .bm-top-prod');
		 console.log('Working');
		if(bmTopProd && !bmTopProd.querySelector('.custMax_bmHeroProductWraper')){
		 console.log('test working');
			 bmTopProd.insertAdjacentHTML('afterend', heroProductWraperHtml);
		}
	  }
  
	  /* Initialise variation */
	  helper.waitForElement("html body.index .bm-top-prod", init, 50, 3000);
	} catch (e) {
	  if (debug) console.log(e, "error in Test" + variation_name);
	}
  })();