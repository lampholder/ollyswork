var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++)
  if (links[i].className == 'livethumbnail')
  {
    var img = links[i].getElementsByTagName('img')[0];    
    img.state = 'small';
    img.smallSrc = img.getAttribute('src');
    img.smallWidth = parseInt(img.getAttribute('width'));
    img.smallHeight = parseInt(img.getAttribute('height'));
    img.largeSrc = links[i].getAttribute('href');
    img.largeWidth = parseInt(img.getAttribute('largewidth'));
    img.largeHeight = parseInt(img.getAttribute('largeheight'));
    img.ratio = img.smallHeight / img.smallWidth;
    links[i].onclick = scale;
  }
  
function scale()
{
  var img = this.getElementsByTagName('img')[0];    
  img.src = img.smallSrc;
  
  if (! img.preloaded)
  {
    img.preloaded = new Image();
    img.preloaded.src = img.largeSrc;
  }

  var interval = window.setInterval(scaleStep, 10);
  return false;
  
  function scaleStep()
  {
    var step = 10;
    var width = parseInt(img.getAttribute('width'));
    var height = parseInt(img.getAttribute('height'));
    
    if (img.state == 'small')
    {
      width += step;
      height += Math.floor(step * img.ratio);
      
      img.setAttribute('width', width);
      img.setAttribute('height', height);
      
      if (width > img.largeWidth - step)
      {
        img.setAttribute('width', img.largeWidth);
        img.setAttribute('height', img.largeHeight);
        img.setAttribute('src', img.largeSrc);
        window.clearInterval(interval);
        img.state = 'large';
      }
    }
    else
    {
      width -= step;
      height -= Math.floor(step * img.ratio);

      img.setAttribute('width', width);
      img.setAttribute('height', height);
      
      if (width < img.smallWidth + step)
      {
        img.setAttribute('width', img.smallWidth);
        img.setAttribute('height', img.smallHeight);
        img.src = img.smallSrc;
        window.clearInterval(interval);
        img.state = 'small';
      }
    }
  }     
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
