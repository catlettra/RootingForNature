const menu = document.querySelector('#menu');
const htmlMenu = `<div class="container">
<a class="navbar-brand" href="index.html">RootingForNature</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav">
    <a class="nav-link" aria-current="page" href="mission.html">Mission</a>
    <a class="nav-link" href="prodotti.html">Prodotti</a>
    <a class="nav-link" href="about.html">About</a>
    <a class="nav-link" href="blog.html">Blog</a>
    <a class="nav-link" href="dicono.html">Dicono di noi</a>
  </div>
</div>
</div>`;

menu.innerHTML += htmlMenu;

var footer = document.querySelector('#footer');
var htmlFooter = `<div class="container d-flex flex-column justify-content-between footer-container">
<div class="row">
    <div class="col rfn"><p>ROOTING FOR NATURE</p>
    <div><a href="#"><img class="footer-icon" src="img/facebook-icon.png"></a> <a href="#"><img class="footer-icon"  src="img/youtube-icon.png"></a> <a href="#"><img class="footer-icon"  src="img/instagram-icon.png"></a></div>
</div>
    <div class="col text-center"><a href="index.html">Home</a> | <a href="mission.html">Mission</a> | <a href="prodotti.html">Prodotti</a> | <a href="about.html">About</a> | <a href="blog.html">Blog</a> | <a href="dicono.html">Dicono di noi</a> 
    <br><br>
    <a href="">Privacy</a>
    <br>
    <a href="">Cookie Policy</a>
</div>
    <div class="col text-end">info@rootingfornature.it <br>
        +39 3241625067 <br>
        Viale dell'Innovazione, 1 <br>
        20126, Milano, IT</div>
</div>
<div class="row text-center"><p>©RootingForNature 2022</p></div>

</div>`;
footer.innerHTML += htmlFooter;
