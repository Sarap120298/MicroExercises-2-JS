function app() {
    showBigger();
    showBiggerThree();
    showDivisibleTwo();
    showQuantityLettersA();
    showVowels();
    howManyVowels();
    howManyEachVowelAppears();
    divisible();
    dividers();
    commonDividers();
    showPrime();
}

function showBigger() {
    let inputNumberOne = document.getElementById("number-one")
    let inputNumberTwo = document.getElementById("number-two")
    let btnBigger = document.getElementById("btn-bigger")

    btnBigger.addEventListener('click', () => {
        let numberOne = inputNumberOne.value
        let numberTwo = inputNumberTwo.value
        let answer = nBigger(numberOne, numberTwo)
        let showBigger = document.getElementById("show-bigger")
        showBigger.innerHTML = answer
    })

    function nBigger(a, b) {
        let mayor = (a > b) ? ("El número Mayor es: " + a) : ("El número mayor es: " + b);
        console.log(mayor)
        return mayor
    }
}

function showBiggerThree() {
    let inputNumOne = document.getElementById("num-one")
    let inputNumTwo = document.getElementById("num-two")
    let inputNumThree = document.getElementById("num-three")
    let btnThreeNum = document.getElementById("btn-three-num")

    btnThreeNum.addEventListener('click', () => {
        numOne = inputNumOne.value
        numTwo = inputNumTwo.value
        numThree = inputNumThree.value
        let answer = threeNum(numOne, numTwo, numThree)
        let showBiggerThree = document.getElementById("show-bigger-three")
        showBiggerThree.innerHTML = answer

    })

    function threeNum(a, b, c) {

        let detres
        detres = Math.max(a, b, c)
        console.log(detres)
        return `El mayor de los tres números es: ${detres}`
    }
}

function showDivisibleTwo() {
    let inputNumUser = document.getElementById("num-user")
    let btnDivisible = document.getElementById("btn-divisible")

    btnDivisible.addEventListener('click', () => {
        let numUser = inputNumUser.value
        let answer = numPair(numUser)
        let showAnswer = document.getElementById("show-divisible-two")
        showAnswer.innerHTML = answer
    })

    function numPair(a) {
        let divisible = ((a % 2) == 0) ? ("El Número " + a + " es divisible por dos") : ("El Número " + a + " No es divisible por dos");
        console.log(divisible)
        return divisible
    }
}

function showQuantityLettersA() {
    let inputUserPhrase = document.getElementById("user-phrase")
    let btnCountA = document.getElementById("btn-count-A")

    btnCountA.addEventListener('click', () => {
        let userPhrase = inputUserPhrase.value
        let answer = countA(userPhrase)
        let showAnswer = document.getElementById("show-quantity-letters-A")
        showAnswer.innerHTML = answer
    })

    function countA(phrase) {
        let a = phrase.match(/a/gi) //sin la g solo contaría la primera y sin la i solo las minusculas
        let count = (a == null) ? "No contiene Ninguna 'A' " : `Contiene ${a.length} "A"`;
        console.log(count)
        return count
    }
}

function showVowels() {
    let inputUserPhraseVowels = document.getElementById("user-phrase-vowels")
    let btnDrawVowels = document.getElementById("btn-draw-vowels")

    btnDrawVowels.addEventListener('click', () => {
        let userPhraseVowels = inputUserPhraseVowels.value
        let answer = drawVowels(userPhraseVowels)
        let showAnswer = document.getElementById("show-vowels")
        showAnswer.innerHTML = answer
    })

    function drawVowels(phrase) {
        let vowels = phrase.match(/[aeiou]/gi)
        console.log(vowels)
        return `Se sustrajeron las siguientes vocales: ${vowels}`
    }
}

function howManyVowels() {
    let inputUserPhrasesVowelsCount = document.getElementById("user-phrases-vowels-count")
    let btnCountVowels = document.getElementById("btn-count-vowels")

    btnCountVowels.addEventListener('click', () => {
        let userPhrasesVowelsCount = inputUserPhrasesVowelsCount.value
        let answer = countVowels(userPhrasesVowelsCount)
        let showAnswer = document.getElementById("show-count-vowels")
        showAnswer.innerHTML = answer
    })

    function countVowels(phrase) {
        let vowels = phrase.match(/[aeiou]/gi).length
        console.log(vowels)
        return ` hay ${vowels} vocales en tu frase`
    }
}

function howManyEachVowelAppears() {
    let inputUserPhraseEachVowels = document.getElementById("user-phrase-each-vowels")
    let btnVowelsEach = document.getElementById("btn-vowels-each")

    btnVowelsEach.addEventListener('click', () => {
        let userPhraseEachVowels = inputUserPhraseEachVowels.value
        let answer = countEachVowel(userPhraseEachVowels)
        let showAnswer = document.getElementById("how-many-each-vowel-appears")
        showAnswer.innerHTML = answer
    })

    function countEachVowel(phrase) {
        let a = phrase.match(/a/gi)
        a = (a == null) ? "No Aparecen 'A'" : `Aparecen ${a.length} "A"`;
        let e = phrase.match(/e/gi)
        e = (e == null) ? "No Aparecen 'E'" : `Aparecen ${e.length} "E"`;
        let i = phrase.match(/i/gi)
        i = (i == null) ? "No Aparece 'I'" : `Aparecen ${i.length} "I"`;
        let o = phrase.match(/o/gi)
        o = (o == null) ? "No Aparecen 'O'" : `Aparecen ${o.length} "O"`
        let u = phrase.match(/u/gi)
        u = (u == null) ? "No Aparecen 'U'" : `Aparecen ${u.length} "U"`

        console.log("Hay " + a + " A \n" + "Hay " + e + " E \n" + "Hay " + i + " I \n" + "Hay " + o + " O \n" + "Hay " + u + " U")

        return `<ul> 
                        <li>${a}</li> 
                        <li>${e}</li>
                        <li>${i}</li>
                        <li>${o}</li>
                        <li>${u}</li> 
                    </ul>`
    }
}

function divisible() {
    let user = document.getElementById("num")
    let btnCalculate = document.getElementById("btn-calculate")

    function calculate(num) {
        let message = "Es divisible por: "

        if (num % 2 == 0) {
            console.log("Es divisible por 2")
            message += "- 2 "
        }
        if (num % 3 == 0) message += "- 3 "
        if (num % 5 == 0) message += "- 5 "
        if (num % 7 == 0) message += "- 7 "



        if (!(num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0)) {
            return "No es divisible por ninguno"
        } else
            return message;
    }

    btnCalculate.addEventListener('click', function() {
        console.log("Comprobando Listener")
        let num = user.value
        let answer = calculate(num)
        resultado = document.getElementById("result")
        resultado.innerHTML = answer
    })
}

function dividers() {
    let user = document.getElementById("given")
    let btnGiven = document.getElementById("btn-given")

    let array = []
        //let j = 0

    function givenDividers(num) {
        for (let i = 0; i <= num / 2; i++) {

            if (num % i == 0) {
                array.push(i);
                // j++
            }
        }
        console.log(array)
        return `Los Divisores dados de ${num} son: ${array} y ${num}`
    }
    btnGiven.addEventListener('click', () => {
        console.log("comprobando Listener")
        let num = user.value
        let answer = givenDividers(num)
        let showResult = document.getElementById("given-dividers")
        showResult.innerHTML = answer

    })
}

function commonDividers() {
    let inputFirstNumber = document.getElementById("first-number")
    let inputSecondNumber = document.getElementById("second-number")
    let btnCommon = document.getElementById("btn-common")

    btnCommon.addEventListener('click', () => {
        console.log("Comprobando Listener")
        let firstNumber = inputFirstNumber.value
        let secondNumber = inputSecondNumber.value
        let answer = common(firstNumber, secondNumber)
        let showAnswer = document.getElementById("common-dividers")
        showAnswer.innerHTML = answer
    })

    function common(numOne, numTwo) {
        let menor
        if (numOne <= numTwo) {
            menor = numOne
        }
        if (numTwo < numOne) {
            menor = numTwo;
        }
        let common = []
        let j = 0
        for (let i = 1; i <= (menor / 2); i++) {
            console.log(i)
            if (numOne % i == 0 && numTwo % i == 0) {
                common.push(i)
            }

        }
        console.log(common)
        let result = (numOne % numTwo == 0 || numTwo % numOne == 0) ?
            `Los Divisores Comunes de los números ${numOne} y ${numTwo} son: ${common} y ${menor}` :
            `Los Divisores Comunes de los números ${numOne} y ${numTwo} son: ${common}`
        return result
    }
}

function showPrime() {
    let inputUserPrime = document.getElementById("user-prime")
    let btnPrime = document.getElementById("btn-prime")

    btnPrime.addEventListener('click', () => {
        let userPrime = inputUserPrime.value
        let answer = primeNumber(userPrime)
        let showAnswer = document.getElementById("prime-number")
        showAnswer.innerHTML = answer
    })

    function primeNumber(num) {

        for (let i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                return `El ${num} no es un Número Primo`
            }
        }
        return `El Número ${num} es primo`
    }
}
app()