(function() {
    const jmbgHTML = document.getElementById("jmbgInput");
    const firstNameHTML = document.getElementById('firstName');
    const lastNameHTML = document.getElementById('lastName');
    const check = document.getElementById("check");
    const message = document.getElementById("message");
    const person = document.getElementById("person");
   
    let day,
        month,
        year,
        region,
        uniqueNumber,
        unSN,
        controlNumber,
        correctControlNumber;
 
    
    function checkFirstName() {
        let firstName = firstNameHTML.value;
        if (firstName === ''){
            message.innerHTML = "<b> <span style='color: rgb(221, 25, 42);'> Morate unijeti ime";
        }
        else{
            checkLastName();
        }
        
    }

    function checkLastName() {
        let lastName = lastNameHTML.value;
        if (lastName === ''){
            message.innerHTML = "<b> <span style='color:rgb(221, 25, 42);'> Morate unijeti prezime"
        }
        else{
            parseJMBG();
        }
    }

    function parseJMBG() {
     
        let jmbg = jmbgHTML.value.split("");
        if (jmbg.length === 13) {
            day = Number(jmbg[0] + jmbg[1]);
            month = Number(jmbg[2] + jmbg[3]);
            year = jmbg[4] +""+ jmbg[5] +""+ jmbg[6];
                if (jmbg[4]==9) {
                    year = "1" + year + '.';
                } else{
                    year = "2" + year + '.';
                }
            region = Number(jmbg[7] + jmbg[8]);
            uniqueNumber = Number(jmbg[9] + jmbg[10] + jmbg[11]);
            unSN = serialNumber(Number(jmbg[9] + jmbg[10] + jmbg[11])) + ". beba po redu" ;
            controlNumber = Number(jmbg[12]);
            //DDMMGGGRRBBBK = ABVGDĐEŽZIJKL
            //L = 11 - (( 7*(A+E) + 6*(B+Ž) + 5*(V+Z) + 4*(G+I) + 3*(D+J) + 2*(Đ+K) ) % 11)
            correctControlNumber =
                11 -
                (7 * (Number(jmbg[0]) + Number(jmbg[6])) +
                    6 * (Number(jmbg[1]) + Number(jmbg[7])) +
                    5 * (Number(jmbg[2]) + Number(jmbg[8])) +
                    4 * (Number(jmbg[3]) + Number(jmbg[9])) +
                    3 * (Number(jmbg[4]) + Number(jmbg[10])) +
                    2 * (Number(jmbg[5]) + Number(jmbg[11]))) %
                    11;
            if (correctControlNumber > 9) correctControlNumber = 0;
            checkJMBG();
        } else {
            message.innerHTML = "<b> <span style='color:rgb(221, 25, 42);'> JMBG mora imati 13 cifara </span>";
        }
    }

    function serialNumber(bbb) {
        if(bbb >= 0 && bbb <= 499) {
            return bbb + 1;
        }
        else return bbb - 499;
    }

    function checkJMBG() {
        if (day < 1 || day > 31) {
            message.innerHTML = "<b> Neispravan dan rođenja";
        } else if (month < 1 || month > 12) {
            message.innerHTML = "<b> Neispravan mjesec rođenja";
        } else if (Number(year) < 1900 || Number(year) > 2900) {
            message.innerHTML = "<b> Neispravna godina rođenja";
        } else if ((region > 50 && region < 70) || region > 99) {
            message.innerHTML = "<b> Neispravna regija rođenja";
        } else if (uniqueNumber > 999) {
            message.innerHTML = "<b> Neispravno unešen spol";
        } else if (controlNumber !== correctControlNumber) {
            message.innerHTML = "<b> Neispravan kontrolni broj";
        } else {
            message.innerHTML = "<b> <span style='color:rgb(17, 126, 44);'> Ispravan matični broj :) </span>";
            setPerson();
        }
    }

    function setPerson() {
        switch (region) {
            case 1:
                region = "stranci u BiH";
                break;
            case 2:
                region = "stranci u Crnoj Gori";
                break;
            case 3:
                region = "stranci u Hrvatskoj";
                break;
            case 4:
                region = "stranci u Makedoniji";
                break;
            case 5:
                region = "stranci u Sloveniji";
                break;
            case 6:
                region = "Nedefinisano mjesto rodjenja";
                break;
            case 7:
                region = "stranci u Srbiji (bez pokrajina)";
                break;
            case 8:
                region = "stranci u Vojvodini";
                break;
            case 9:
                region = "stranci na Kosovu i Metohiji";
                break;
            case 10:
                region = "Banja Luka";
                break;
            case 11:
                region = "Bihać";
                break;
            case 12:
                region = "Doboj";
                break;
            case 13:
                region = "Goražde";
                break;
            case 14:
                region = "Livno";
                break;
            case 15:
                region = "Mostar";
                break;
            case 16:
                region = "Prijedor";
                break;
            case 17:
                region = "Sarajevo";
                break;
            case 18:
                region = "Tuzla";
                break;
            case 19:
                region = "Zenica";
                break;
            case 20:
                region = "Crna Gora";
                break;
            case 21:
                region = "Podgorica";
                break;
            case 22:
                region = "Crna Gora";
                break;
            case 23:
                region = "Crna Gora";
                break;
            case 24:
                region = "Crna Gora";
                break;
            case 25:
                region = "Crna Gora";
                break;
            case 26:
                region = "Nikšić";
                break;
            case 27:
                region = "Crna Gora";
                break;
            case 28:
                region = "Crna Gora";
                break;
            case 29:
                region = "Pljevlja";
                break;
            case 30:
                region = "Osijek, Slavonija region";
                break;
            case 31:
                region = "Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina region";
                break;
            case 32:
                region = "Varaždin, Međimurje region";
                break;
            case 33:
                region = "Zagreb";
                break;
            case 34:
                region = "Karlovac";
                break;
            case 35:
                region = "Gospić, Lika region";
                break;
            case 36:
                region = "Rijeka, Pula, Istra and Primorje region";
                break;
            case 37:
                region = "Sisak, Banovina region";
                break;
            case 38:
                region = "Split, Zadar, Dubrovnik, Dalmacija region";
                break;
            case 39:
                region = "Hrvatska";
                break;
            case 40:
                region = "";
                break;
            case 41:
                region = "Bitola";
                break;
            case 42:
                region = "Kumanovo";
                break;
            case 43:
                region = "Ohrid";
                break;
            case 44:
                region = "Prilep";
                break;
            case 45:
                region = "Skopje";
                break;
                v;
            case 46:
                region = "Strumica";
                break;
            case 47:
                region = "Tetovo";
                break;
            case 48:
                region = "Veles";
                break;
            case 49:
                region = "Štip";
                break;
            case 50:
                region = "Slovenija";
                break;
            case 70:
                region = "Srbija";
                break;
            case 71:
                region = "Beograd";
                break;
            case 72:
                region = "Šumadija";
                break;
            case 73:
                region = "Niš";
                break;
            case 74:
                region = "Južna Morava";
                break;
            case 75:
                region = "Zaječar";
                break;
            case 76:
                region = "Podunavlje";
                break;
            case 77:
                region = "Podrinje i Kolubara";
                break;
            case 78:
                region = "Kraljevo";
                break;
            case 79:
                region = "Užice";
                break;
            case 80:
                region = "Novi Sad";
                break;
            case 81:
                region = "Sombor";
                break;
            case 82:
                region = "Subotica";
                break;
            case 83:
                region = "Vojvodina";
                break;
            case 84:
                region = "Vojvodina";
                break;
            case 85:
                region = "Zrenjanin";
                break;
            case 86:
                region = "Pančevo";
                break;
            case 87:
                region = "Kikinda";
                break;
            case 88:
                region = "Ruma";
                break;
            case 89:
                region = "Sremska Mitrovica";
                break;
            case 90:
                region = "Kosovo i Metohija";
                break;
            case 91:
                region = "Priština";
                break;
            case 92:
                region = "Kosovska Mitrovica";
                break;

            case 93:
                region = "Peć";
                break;
            case 94:
                region = "Đakovica";
                break;
            case 95:
                region = "Prizren";
                break;
            case 96:
                region = "Kosovsko Pomoravski okrug";
                break;
            case 97:
                region = "Kosovo i Metohija";
                break;
            case 98:
                region = "Kosovo i Metohija";
                break;
            case 99:
                region = "Kosovo i Metohija";
                break;

            default:
                break;
        }

        if (uniqueNumber < 500) {
            uniqueNumber = "Muški";
        } else {
            uniqueNumber = "Ženski";
        }

        let firstName = firstNameHTML.value;
        let lastName = lastNameHTML.value;

        person.innerHTML = `<br> Ime i prezime: ${firstName} ${lastName}
                            <br> Datum rođenja: ${day}.${month}.${year}
                            <br> Mjesto rođenja: ${region}
                            <br> Spol: ${uniqueNumber}
                            <br> Redni broj bebe: ${unSN}`;

    }

    check.addEventListener("click", checkFirstName);
})();