const myForm: HTMLFormElement | null = document.forms[0];

if (myForm) {
    myForm.oninput = function (): void {
        let getLb: HTMLInputElement | null = document.querySelector('#getLb');
        let div: HTMLDivElement | null = document.querySelector('#get');
        if (getLb && div) {
            const kilos: number = +getLb.value;
            let result: number = kilos * 2.2;
            div.innerText = result.toString();
        }
    }
}