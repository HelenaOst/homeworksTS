"use strict";
const myForm = document.forms[0];
if (myForm) {
    myForm.oninput = function () {
        let getLb = document.querySelector('#getLb');
        let div = document.querySelector('#get');
        if (getLb && div) {
            const kilos = +getLb.value;
            let result = kilos * 2.2;
            div.innerText = result.toString();
        }
    };
}
