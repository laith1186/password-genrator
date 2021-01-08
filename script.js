const characterrange = document.getElementById
('characterrange')
const characternumber = document.getElementById
('characternumber')
const IncludeuppercaseElement = document.getElementById('Includeuppercase')
const IncludeNumbersElement = document.getElementById('IncludeNumbers')
const IncludesymbolsElement = document.getElementById('Includesymbols')
const form = document.getElementById('Passwordgenratorform')
const passworddisplay = document.getElementById('passworddisplay')

const UPPER_CHAR_codes = arrayFromLowtoHigh(65, 90)
const LOWER_CHAR_codes = arrayFromLowtoHigh(97, 122)
const Number_CHAR_codes = arrayFromLowtoHigh(48, 57)
const Symbol_CHAR_codes = arrayFromLowtoHigh(33, 47).contact(arrayFromLowtoHigh(58, 64)
).contact(arrayFromLowtoHigh(91, 96)
).contact(arrayFromLowtoHigh(123, 126)
)


characternumber.addEventListener('input', syncCharacteramount)
characterrange.addEventListener('input', syncCharacteramount)
form.addEventListener('submit' , e =>{
    e.preventDefault()
    const characteramount = characternumber.value
    const includeuppercase =IncludeuppercaseElement.checked
    const IncludeNumbers =IncludeNumbersElement.checked
    const Includesymbols =IncludesymbolsElement.checked

    const password = genratepassword(characternumber, characterrange, Includeuppercase, IncludeNumbers, Includesymbols)
    passworddisplay.innerText = password
})

function genratepassword(characteramount, IncludeNumbers, Includesymbols, Includeuppercase){
    let charcodes = lower_CHAR_codes
    if(includeuppercase) charcodes =charcodes.contact(UPPER_CHAR_codes)
    if(Includesymbols) charcodes =charcodes.contact(Symbol_CHAR_codes)
    if(IncludeNumbers) charcodes =charcodes.contact(Number_CHAR_codes)
    const passwordcharacters = []
    for(let i = 0; i < characteramount; i++) {
        const charactercode = charcodes[Math.floor(Math.random() *
            charcodes.length)]
            passwordcharacters.push(String.fromCharCode(charactercode))

    }
    return passwordcharacters.join('')
}
function arrayFromLowtoHigh(low, hiigh)
const array = []
for (let i = low; i<=high; i++){
    arry.push(i)
}
return array





function syncCharacteramount(e){
    const value = e.target.value
    characterrange.value = value
    characternumber.value = value

    

}