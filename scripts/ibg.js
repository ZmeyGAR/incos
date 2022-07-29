// Скрипт IBG(устанавливает дочернее изображение в качестве собственного бекграунда)
// дочернее изображение в последствии скрывается (см. "assets/sass,scss/_ibg.js")
// этот скрипт необходим как костыль для IE, обеспечивает корректное отображение изображений с неподдерживаемыми свойствами object-fit

function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();

// Скрипт IBG