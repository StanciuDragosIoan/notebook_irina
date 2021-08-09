/*

1. Advanced functions

    1.1 - Scope vs Context (scope chain/this keyword)

        
            'Scope' se refera la disponibilitatea unei variabile in programul
        nostru. Unde in script pot citi variabila respectiva? Variabila poate
        sa fie globala (deci definita in global scope) sau definita in interiorul
        unei functii (local scope). Toate aceste niveluri de 'scope' sunt legate 
        intre ele.

            'Scope chain' defineste relatia dintre aceste niveluri de 'scope'.
        Orice 'scope' poate sa citeasca pe celelalte 'scopes' aflate in afara sa.
        Deci toate 'scopes' pot citi in parent/bunic 'scopes', dar invers nu se
        poate. Parintele 'scope' nu poate citi intr-un copil 'scope'.

            Daca in functia mea caut o variabila X, si ea nu e definita, JavaScript o
        sa o caute in parintele functiei (parent scope), apoi in parintele parintelui
        si tot asa pana cand va ajunge la global scope (parintele suprem)

            
            # Contextul in JavaScript se leaga de executia codului. Codul poate sa fie
        executat intr-o functie sau direct in 'global scope'. Fiecare functie are 
        propriul sau 'context de executie' si toate aceste 'contexte' se 'executa' intr-un
        context global (global execution context). Cand vorbim de client side JavaScript,
        contextul global de executie e reprezentat de 'window object' (acesta e 'parintele
        suprem'). 'This' keyword e doar o referinta catre 'window object' (this === window)
            
            # Scope vs Context (daca 'scope' se refera la cum/unde e definita o variable si 
        de unde poate fi ea accesata in programul nostru, 'context' se refera la obiectul care
        executa codul cu variabila noastra - in JavaScript functiile sunt obiecte)
          


    1.2 - call(), apply(), bind()

            # sunt metode care ne permit sa schimbam contextul de executie al unei functii,
        de asemenea, putem sa schimbam modul in care se comporta 'this' keyword. De asemenea,
        ne permit sa apelam metode din afara contextului de executie curent (de exemplu, dintr-un
        obiect A, putem apela o metoda dintr-un obiect B, complet diferit de A, folosing call() sau apply()).
            bind() returneaza o functie schimbandu-i contextul de executie cu un altul, permitandu-ne 
        sa stocam si refolosim un anumit context de executie (de exemplu metoda lui B apelata din A) 
        
    
    1.3 IIFE (Immediately invoked function expression)

        Un IIFE este o functie care se executa imediat ce a fost declarata. Este utila pentru a 
    crea un scopes diferite de global scope, in care putem sa avem variabile cu acelasi nume, fara
    a avea conflict (pentru ca toate sunt in 'scopes' diferite). IIFEs sunt de asemenea folosite
    pentru a crea module care incapsuleaza functionalitate si o definesc intr-un 'scope' diferit de 
    'global scope' un 'scope' specific doar respectivului IFFEE.


    1.4 Hoisting

        'Hoisting' reprezinta procesul prin care variabilele sau functiile declarate (function 
    declarations -> const test = function(){}) devin accesibile in script, inainte de a fi 
    declarate. Variabilele sunt 'partially hoisted' adica pot fi citite ca 'undefined' daca sunt 
    declarate mai jos e.g

    console.log(test); //undefined -> variabilele sunt 'partially hoisted'
    var test = 2; // aici lui test i se aloca valoarea 2

    test2();// '123' functiile sunt 'completely hoisted'
    function test2() => console.log('123');

    
    
    2.0 Higher Order Functions (map, reduce, filter) 

        Sunt 'higher order functions'. Sunt functii care se executa pe un array si care 
    primesc un 'callback' function ce va fi executat pentru fiecare element din array.

        map() creaza un array nou din array-ul primit ca input

        const numbers = [1,2,3];
        const doubles = numbers.map(item => item * 2);


        filter() creaza si el un array, dar pune in el elemente doar daca acestea satisfac 
        o anumita conditie

        const numbers = [1, 2, 3, 4];
        const evens = numbers.filter(item => item % 2 === 0);
        console.log(evens); // [2, 4]

        reduce() reduce un array la o singura valoare 

        const numbers = [1, 2, 3, 4];
        const sum = numbers.reduce(function (result, item) {
        return result + item;
        }, 0);
        console.log(sum); // 10


    3. Closures

        'closures' sunt functii care returneaza alte functii si permit stocarea
    unor variabile din afara functiilor returnate. 

    e.g.

    function test() {
        let food1 = 'pizza';//variable is stored to test() even after test1 completes execution because test3 is using it
        return function test2() {
            let food4 = 'testFoodWillGetDeleted'; //variable not stored after test2() execution because test3() is not using it
            let food2 = 'burger'; //variable is stored to test() even after test2 completes execution because test3 is using it
            return function test3() {
                let menu = ['fries', food1, food2];
                return menu;
            }
        }
    }


    4. OOP - Object Oriented Programming

        4.1 Principii OOP

        OOP (programarea orientata pe obiect) implica structurarea codului ca niste obiecte, care
    sa reprezinte obiecte din lumea reala si sa defineasca nevoile de business ale aplicatiei. 
    Exemple de astfel de obiecte: user, admin, student, member, etc...

        Obiectele pot 'imprumuta' functionalitati de la unul la altul printr-un mecanism de 'mostenire'

        OOP reprezinta o paradigma de programare din care fac parte numeroase patternuri (design patterns)
    cunoscute.


        4.2 ES6 classes & inheritance

        In JavaScript, mecanismul de 'inheritance' este bazat pe un prototip. Astfel JS are
    'prototypal' inheritance si nu 'class based inheritance'. Un prototip este un obiect care
    defineste proprietati si metode disponibile 'obiectului curent'. De exemplu un user o sa aiba un user.prototype 
    in care vor exista metode/proprietati pe care obiectul user le poate folosi, dar care nu fac parte 
    din el in mod direct.

        Pentru ca o astfel de sintaxa bazata pe prototip a fost considerata greoaie, JavaScript a implementat o conventie 
    OOP (ES6 classes). Aceasta conventie ne permite sa creem clase in JavaScript ca in orice alt limbaj, dar clasele de 
    JavaScript sunt doar o conventie sintactica, o abstractie peste mecanismul de 'prototype inheritance'

        Un avantaj al mecanismului de 'prototype' inheritance (vs standard OOP interface) ar fi faptul ca in prototypul unui
    obiect, pot copia prototypul mai multor altor obiecte si/sau metodele acestora (ceea ce e ca si cum as 'extinde' mai multe 
    clase in acelasi timp, lucru pe care standard OOP nu il permite - pot extinde doar o clasa)


    4.4 Composition vs inheritance

        'Inheritance'/Mecanismul de mostenire reprezinta 'sistemul standard' prin care o clasa poate sa foloseasca metode/proprietati
    din alta clasa. Relatia dintre clase este una de 'parinte-copil' in care copilul mosteneste de la parinte. 

        Composition - in loc sa folosim mecanismul clasic de 'mostenire' prin care o clasa copil va mosteni toate proprietatile/metodele
    clasei parinte, folosim o abordare mai pragmatica si mai flexibila (composition) prin care intr-un obiect putem copia doar proprietatile/metodele
    de care avem nevoie (fara sa fie nevoie sa copiem toate celelalte proprietati/metode de la sursa) 


    e.g.

    sursa: https://javascript.plainenglish.io/inheritance-is-a-vs-composition-has-a-in-javascript-98fb96dfa0e6

    //inheritance

    class Person  {
    eat() {
        console.log('I am eating');
    }
    breathe(){
        console.log('I am breathing');
    }    
    swim(){
        console.log('I am swimming');
    } 
}
class Magician  extends Person{
    trick() {
        console.log('I am doing a trick');
    }
}
let liv= new Magician();
let harry = new Magician();
//Liv can:
liv.eat();
liv.breathe();
liv.swim();
liv.trick();
//I am eating
//I am breathing
//I am swimming
//I am doing a trick
//Harry can:
harry.eat();
harry.breathe();
harry.swim();
harry.trick();
//I am eating
//I am breathing
//I am swimming
//I am doing a trick


//composition

const eat = function () {
    return {
        eat: () => { console.log('I am eating'); }
    }
}
const breathe = function () {
    return {
        breathe: () => { console.log('I am breathing'); }
    }
}
const swim = function () {
    return {
        swim: () => { console.log('I am swimming'); }
    }
}
const trick = function () {
    return {
        trick: () => { console.log('I am doing a trick'); }
    }
}
const superMagician = ()=> {
 return Object.assign(
     {},
     eat(),
     breathe(),
     trick()
   );
}
const noviceMagician = () => {
 return Object.assign(
     {},
     eat(),
     breathe(),
     swim()
   );
}

    5. Functional programming

        5.1 Pure vs Impure functions

        FP (programarea functionala) reprezinta o alta paradigma de programare (ca si OOP).
        Diferenta fata de OOP este ca FP separa foarte strict logica de date (functions vs data).
        FP nu are clase cu metode (care adesea amesteca functionalitatea cu datele).

        Elementul de baza din aceasta paradigma (FP) il reprezinta 'pure functions'  (functiile pure)

        De asemenea, paradigma functionala (FP) respecta principiul imutabilitatii (immutability). Odata
        creat un obiect, el nu mai poate fi modificat (nu exista 'shared state' - un obiect comun pentru 2
        functii care sa il modifice)

        Pure functions - returneaza acelasi output, daca primesc un anume input si nu modifica nimic
        din afara lor (nu au 'side effects')

        e.g. 

        //no side effects
        //input -> output
        const array = [1,2,3];

//mutates array outside of it (side effect! - impure)
        function mutateArray(arr) {
            arr.pop();
        }

        mutateArray(); 

        function removeLastItem(arr){
            const newArr = [].concat(arr);
            newArr.pop();
            return newArr; //returns a new array (does NOT mutate outside array -> PURE!)
        }


        5.2 Composable functions

        Compozitia, este modul prin care mai multe functii simple/mici pot fi 'compuse'/combinate
        pentru a crea functii mai complexe. 

        Un use case standard pentru o astfel de abordare ar fi cand avem functii mici, care fac 
        lucruri specifice, si avem nevoie sa apelam mai multe o data.

        e.g.

        https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937


    6. Modules in JavaScript

        6.1 CommonJS modules & ES 6 modules

        commonJS modules sunt standardul initial de JS modules, ele folosesc module.exports si 
        require('someCommonJsModule');

        ES6 modules folosesc import someES6Module from "./someES6Module" si export default someES6Module; sau export {function1OfSomeES6module, function2OfSomeES6Module...}

        // https://www.sitepoint.com/understanding-es6-modules/

        // someES6Module



*/
