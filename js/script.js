class Validator {

    constructor() {
        this.validation = [

        ]
    }

    // iniciar a validação
    validate(form) {

        // pegar os inputs
        let inputs = form.getElementsByTagName('input');

        

        // transformo uma HTMLCollection -> array
        let inputsArray = [...inputs];

        // loop inputs e validação medaiante ao que for encontrado
        inputsArray.forEach(function(input) {
            
        })

    }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

// evento que dispara as validações 
submit.addEventListener('click', function(e) {

    e.preventDefault();

    validator.validate(form);
});