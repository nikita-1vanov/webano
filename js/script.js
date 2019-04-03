/*----------Изменение кнопки "Выбрать раздел" при нажатии----------*/

document.querySelector('#but_box').addEventListener('click', function () {
    display = document.getElementById('but_box').style.display;
        if(display == "block") {
            document.getElementById('but_box').style.display="none";
            document.getElementById('but_box2').style.display="block";
        } else {
            document.getElementById('but_box2').style.display="none";
            document.getElementById('but_box').style.display="block";
        }
    }
);

document.querySelector('#but_box2').addEventListener('click', function () {
    display = document.getElementById('but_box2').style.display;
        if(display == "block") {
            document.getElementById('but_box2').style.display="none";
            document.getElementById('but_box').style.display="block";
        } else {
            document.getElementById('but_box').style.display="none";
            document.getElementById('but_box2').style.display="block";
        }
    }
);



/*----------Появление/исчезновение блока меню при нажатии кнопки "Выбрать меню"----------*/

document.querySelector('#but_box').addEventListener('click', function () {
    display = document.getElementById('but_block').style.display;
        if(display == "none") {
            document.getElementById('but_block').style.display="block";
        } else {
            document.getElementById('but_block').style.display="none";
        }
    }
);

document.querySelector('#but_box2').addEventListener('click', function () {
    display = document.getElementById('but_block').style.display;
        if(display == "block") {
            document.getElementById('but_block').style.display="none";
        } else {
            document.getElementById('but_block').style.display="block";
        }
    }
);

/*----------Появление/исчезновение блока подменю при нажатии кнопки категории в меню----------*/

// document.querySelector('#box').addEventListener('click', function () {
//
//     display = document.getElementById('market_menu').style.display;
//         if(display == "none") {
//             document.getElementById('market_menu').style.display="block";
//             document.getElementById('web_menu').style.display="none";
//             document.getElementById('grapfik_menu').style.display="none";
//             document.getElementById('analitics_menu').style.display="none";
//         } else {
//             document.getElementById('market_menu').style.display="none";
//             document.getElementById('web_menu').style.display="none";
//             document.getElementById('grapfik_menu').style.display="none";
//             document.getElementById('analitics_menu').style.display="none";
//         }
//     }
// );
//
// document.querySelector('#box2').addEventListener('click', function () {
//
//     display = document.getElementById('web_menu').style.display;
//         if(display == "none") {
//             document.getElementById('market_menu').style.display="none";
//             document.getElementById('web_menu').style.display="block";
//             document.getElementById('grapfik_menu').style.display="none";
//             document.getElementById('analitics_menu').style.display="none";
//         } else {
//             document.getElementById('market_menu').style.display="none";
//             document.getElementById('web_menu').style.display="none";
//             document.getElementById('grapfik_menu').style.display="none";
//             document.getElementById('analitics_menu').style.display="none";
//         }
//     }
// );
//
// document.querySelector('#box3').addEventListener('click', function () {
//
//     display = document.getElementById('grapfik_menu').style.display;
//         if(display == "none") {
//             document.getElementById('market_menu').style.display="none";
//             document.getElementById('web_menu').style.display="none";
//             document.getElementById('grapfik_menu').style.display="block";
//             document.getElementById('analitics_menu').style.display="none";
//         } else {
//             document.getElementById('market_menu').style.display="none";
//             document.getElementById('web_menu').style.display="none";
//             document.getElementById('grapfik_menu').style.display="none";
//             document.getElementById('analitics_menu').style.display="none";
//         }
//     }
// );
//
// document.querySelector('#box4').addEventListener('click', function () {
//
//     display = document.getElementById('analitics_menu').style.display;
//         if(display == "none") {
//             document.getElementById('market_menu').style.display="none";
//             document.getElementById('web_menu').style.display="none";
//             document.getElementById('grapfik_menu').style.display="none";
//             document.getElementById('analitics_menu').style.display="block";
//         } else {
//             document.getElementById('market_menu').style.display="none";
//             document.getElementById('web_menu').style.display="none";
//             document.getElementById('grapfik_menu').style.display="none";
//             document.getElementById('analitics_menu').style.display="none";
//         }
//     }
// );

/*----------Изменение цвета кнопки в меню при ее нажатии----------*/

document.querySelector('#box').addEventListener('click', function () {

    display = document.getElementById('box').style.display;
        if(display == "none") {
            document.getElementById('box').style.backgroundColor="white";
            document.getElementById('box2').style.backgroundColor="white";
            document.getElementById('box3').style.backgroundColor="white";
            document.getElementById('box4').style.backgroundColor="white";
        } else {
            document.getElementById('box').style.backgroundColor="blanchedalmond";
            document.getElementById('box2').style.backgroundColor="white";
            document.getElementById('box3').style.backgroundColor="white";
            document.getElementById('box4').style.backgroundColor="white";
        }
    }
);

document.querySelector('#box2').addEventListener('click', function () {

    display = document.getElementById('box2').style.display;
        if(display == "none") {
            document.getElementById('box').style.backgroundColor="white";
            document.getElementById('box2').style.backgroundColor="white";
            document.getElementById('box3').style.backgroundColor="white";
            document.getElementById('box4').style.backgroundColor="white";
        } else {
            document.getElementById('box').style.backgroundColor="white";
            document.getElementById('box2').style.backgroundColor="blanchedalmond";
            document.getElementById('box3').style.backgroundColor="white";
            document.getElementById('box4').style.backgroundColor="white";
        }
    }
);

document.querySelector('#box3').addEventListener('click', function () {

    display = document.getElementById('box3').style.display;
        if(display == "none") {
            document.getElementById('box').style.backgroundColor="white";
            document.getElementById('box2').style.backgroundColor="white";
            document.getElementById('box3').style.backgroundColor="white";
            document.getElementById('box4').style.backgroundColor="white";
        } else {
            document.getElementById('box').style.backgroundColor="white";
            document.getElementById('box2').style.backgroundColor="white";
            document.getElementById('box3').style.backgroundColor="blanchedalmond";
            document.getElementById('box4').style.backgroundColor="white";
        }
    }
);

document.querySelector('#box4').addEventListener('click', function () {

    display = document.getElementById('box4').style.display;
        if(display == "none") {
            document.getElementById('box').style.backgroundColor="white";
            document.getElementById('box2').style.backgroundColor="white";
            document.getElementById('box3').style.backgroundColor="white";
            document.getElementById('box4').style.backgroundColor="white";
        } else {
            document.getElementById('box').style.backgroundColor="white";
            document.getElementById('box2').style.backgroundColor="white";
            document.getElementById('box3').style.backgroundColor="white";
            document.getElementById('box4').style.backgroundColor="blanchedalmond";
        }
    }
);