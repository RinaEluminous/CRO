function checkAndInitialize() {
    addDefault2Pack();
    clickOperations();

}

// Use window.onload to ensure all resources are fully loaded
window.onload = function () {
    checkAndInitialize();
};


document.addEventListener('DOMContentLoaded', function () {
    checkAndInitialize();
});

// In case the DOMContentLoaded event is already fired before the script loads
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    checkAndInitialize();
}

function addDefault2Pack(){

const urlPath =window.location.pathname;

if(urlPath == '/products/trtl-travel-pillow-ads3'){

    console.log('valid path >>>>>>>>>>>');
    var variantBlocksElement = document.querySelectorAll('.variant-blocks')[0];
    if(variantBlocksElement){
        console.log('variant-blocks element found');

        var custSelectOfferHtml ='<div class="custOfferSection">'+
'    <div class="custPillow1ColorSwatch">'+
'        <h1>Buy 1 pillow</h1>'+
'        <div class="color-line-item-property-blocks">'+
'            <div class="color-line-item-property-block active" data-color_index="1">'+
'                <div class="color-line-item-property-image">'+
'                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png">'+
'                </div>'+
'                <div class="color-line-item-property-content">'+
'                    <div class="color-line-item-property-heading">'+
'                        Pillow 1:<span class="pillow-color-name">Grey</span>'+
'                    </div>'+
'                    <div class="variant-swatches-pillow-color">'+
'                        <div class="col-auto" data-variant_id="48383104876737">'+
'                            <input type="radio" id="swatch-1-template-Grey" name="variant-color-swatch-1" value="Grey" data-variant_id="48383104876737" checked="">'+
'                            <label for="swatch-1-template-Grey" class="variant-swatch swatch swatch-color-grey" data-option-index="1" data-option="Color" data-value="Grey" data-variant-image="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png" title=""></label>'+
'                        </div>'+
'                        <div class="col-auto" data-variant_id="48383104909505">'+
'                            <input type="radio" id="swatch-1-template-Black" name="variant-color-swatch-1" value="Black" data-variant_id="48383104909505">'+
'                            <label for="swatch-1-template-Black" class="variant-swatch swatch swatch-color-black" data-option-index="1" data-option="Color" data-value="Black" data-variant-image="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-black.png" title=""></label>'+
'                        </div>'+
'                        <div class="col-auto" data-variant_id="48383104942273">'+
'                            <input type="radio" id="swatch-1-template-Red" name="variant-color-swatch-1" value="Red" data-variant_id="48383104942273">'+
'                            <label for="swatch-1-template-Red" class="variant-swatch swatch swatch-color-red" data-option-index="1" data-option="Color" data-value="Red" data-variant-image="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-red.png" title=""></label>'+
'                        </div>'+
'                        <div class="col-auto" data-variant_id="48383104975041">'+
'                            <input type="radio" id="swatch-1-template-Coral" name="variant-color-swatch-1" value="Coral" data-variant_id="48383104975041">'+
'                            <label for="swatch-1-template-Coral" class="variant-swatch swatch swatch-color-coral" data-option-index="1" data-option="Color" data-value="Coral" data-variant-image="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-coral.png" title=""></label>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'    <div class="custPillow2ColorSwatch">'+
'        <h1>Buy 2 pillow</h1>'+
'        <div class="color-line-item-property-blocks">'+
'            <div class="color-line-item-property-block active" data-color_index="1">'+
'                <div class="color-line-item-property-image">'+
'                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png">'+
'                </div>'+
'                <div class="color-line-item-property-content">'+
'                    <div class="color-line-item-property-heading">'+
'                        Pillow 1:<span class="pillow-color-name">Grey</span>'+
'                    </div>'+
'                    <div class="variant-swatches-pillow-color">'+
'                        <div class="col-auto" data-variant_id="48383104876737">'+
'                            <input type="radio" id="swatch-1-template-Grey" name="variant-color-swatch-1" value="Grey" data-variant_id="48383104876737" checked="">'+
'                            <label for="swatch-1-template-Grey" class="variant-swatch swatch swatch-color-grey" data-option-index="1" data-option="Color" data-value="Grey" data-variant-image="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png" title=""></label>'+
'                        </div>'+
'                        <div class="col-auto" data-variant_id="48383104909505">'+
'                            <input type="radio" id="swatch-1-template-Black" name="variant-color-swatch-1" value="Black" data-variant_id="48383104909505">'+
'                            <label for="swatch-1-template-Black" class="variant-swatch swatch swatch-color-black" data-option-index="1" data-option="Color" data-value="Black" data-variant-image="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-black.png" title=""></label>'+
'                        </div>'+
'                        <div class="col-auto" data-variant_id="48383104942273">'+
'                            <input type="radio" id="swatch-1-template-Red" name="variant-color-swatch-1" value="Red" data-variant_id="48383104942273">'+
'                            <label for="swatch-1-template-Red" class="variant-swatch swatch swatch-color-red" data-option-index="1" data-option="Color" data-value="Red" data-variant-image="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-red.png" title=""></label>'+
'                        </div>'+
'                        <div class="col-auto" data-variant_id="48383104975041">'+
'                            <input type="radio" id="swatch-1-template-Coral" name="variant-color-swatch-1" value="Coral" data-variant_id="48383104975041">'+
'                            <label for="swatch-1-template-Coral" class="variant-swatch swatch swatch-color-coral" data-option-index="1" data-option="Color" data-value="Coral" data-variant-image="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-coral.png" title=""></label>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'            <div class="color-line-item-property-block" data-color_index="2">'+
'                <div class="color-line-item-property-image">'+
'                    <img src="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png">'+
'                </div>'+
'                <div class="color-line-item-property-content">'+
'                    <div class="color-line-item-property-heading">'+
'                        Pillow 2:<span class="pillow-color-name">Grey</span>'+
'                    </div>'+
'                    <div class="variant-swatches-pillow-color">'+
'                        <div class="col-auto" data-variant_id="48383104876737">'+
'                            <input type="radio" id="swatch-2-template-Grey" name="variant-color-swatch-2" value="Grey" data-variant_id="48383104876737" checked="">'+
'                            <label for="swatch-2-template-Grey" class="variant-swatch swatch swatch-color-grey" data-option-index="1" data-option="Color" data-value="Grey" data-variant-image="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-grey.png" title=""></label>'+
'                        </div>'+
'                        <div class="col-auto" data-variant_id="48383104909505">'+
'                            <input type="radio" id="swatch-2-template-Black" name="variant-color-swatch-2" value="Black" data-variant_id="48383104909505">'+
'                            <label for="swatch-2-template-Black" class="variant-swatch swatch swatch-color-black" data-option-index="1" data-option="Color" data-value="Black" data-variant-image="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-black.png" title=""></label>'+
'                        </div>'+
'                        <div class="col-auto" data-variant_id="48383104942273">'+
'                            <input type="radio" id="swatch-2-template-Red" name="variant-color-swatch-2" value="Red" data-variant_id="48383104942273">'+
'                            <label for="swatch-2-template-Red" class="variant-swatch swatch swatch-color-red" data-option-index="1" data-option="Color" data-value="Red" data-variant-image="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-red.png" title=""></label>'+
'                        </div>'+
'                        <div class="col-auto" data-variant_id="48383104975041">'+
'                            <input type="radio" id="swatch-2-template-Coral" name="variant-color-swatch-2" value="Coral" data-variant_id="48383104975041">'+
'                            <label for="swatch-2-template-Coral" class="variant-swatch swatch swatch-color-coral" data-option-index="1" data-option="Color" data-value="Coral" data-variant-image="https://growth-hit.s3.us-west-2.amazonaws.com/trtltravel/pillow-coral.png" title=""></label>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'</div>';

    if(document.querySelectorAll('.custOfferSection').length == 0){
        variantBlocksElement.insertAdjacentHTML('afterend',custSelectOfferHtml);
    }
        }
    }
}

function clickOperations(){
    
}



