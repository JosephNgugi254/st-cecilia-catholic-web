// mass schedule pop-up function
function togglePopup() {
    var popup = document.getElementById("popup");
    var overlay = document.getElementById("popupOverlay");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
    }
}


// start of header and footer management queries
// Header management query
class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand logo" href="./index.html">
                <img src="./images/logo-st cecilia parish.PNG" alt="st cecilia logo" max-width="300" height="100" style="margin-bottom: -5px;">
            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item header-link">
                <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
              </li>
    
              <li class="nav-item dropdown header-link">
                <a class="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About Us<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/></svg>
                </a> 
                <ul class="about-us-dropdown-items dropdown-menu">
                    <li><a class="dropdown-item" href="./brief-history.html">Brief History</a></li>
                    <li><a class="dropdown-item" href="./church-leardership.html">Church leadership</a></li>
                    <li><a class="dropdown-item" href="./contact-us.html">Contact Us</a></li>
                    <li><a class="dropdown-item" href="./out-stations.html">Out Stations</a></li>
                </ul>
              </li>          
    
              <li class="nav-item dropdown liturgy header-link">
                <a class="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Liturgy<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/></svg>
                </a>
                <ul class="liturgy-dropdown-items dropdown-menu">
                  <li><a class="dropdown-item" href="#" onclick="togglePopup()">Mass Schedule</a></li>
    
                  <!-- mass schedule pop-up div start -->
                  <div class="popup-overlay" id="popupOverlay"></div>
                  <div class="popup" id="popup">
                    <span class="close-btn" onclick="togglePopup()">X</span>
                    <h2>Mass Schedule</h2>
                    <br>
                    <h3>Sundays</h3>
                    <p><b>Moi girls Isinya Mass</b> - 6:45 am</p>
                    <p><b>First Mass</b> - 7:30 am - 9:30 am</p>
                    <p><b>Second Mass</b> - 9:30 am - 11:30 am</p>
                    <p><b>Outstation Mass <i>(Endonyio Sidai/Lenchani/Embolioi/Ilpolosat)</i></b> - 10:00 am - 12:00 noon</p>
                    <br>
                    <h3>Weekdays</h3>
                    <p><b>Daily Mass</b> - 6:30 am - 7:15 am</p>
                    <br>
                    <h3>Saturday</h3>
                    <p>
                      <b>Eucharist adoration</b> - 3:00 pm
                      <br>                 
                      <b>Confession</b> - 4:00 pm
                      <br>
                      <b>Mass</b> - 5:00 pm (for Christians working in flower farms that work on Sunday)
                    </p>                
                  </div>
                  <!-- mass schedule pop up div end -->
                  
                  <li><a class="dropdown-item" href="https://bible.usccb.org/daily-bible-reading">Daily readings</a></li>
                  <li><a class="dropdown-item" href="./choir.html">Choir</a></li>
                  <li><a class="dropdown-item" href="./liturgical-ministry.html">Liturgical Ministry</a></li>
                </ul>
              </li>
    
              <li class="nav-item dropdown sacraments header-link">
                <a class="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sacraments<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/></svg>
                </a>
                <ul class="sacraments-dropdown-items dropdown-menu">
                  <li><a class="dropdown-item" href="./baptism.html">Baptism</a></li>
                  <li><a class="dropdown-item" href="./reconciliation.html">Reconciliation</a></li>
                  <li><a class="dropdown-item" href="./eucharist.html">Eucharist</a></li>                  
                  <li><a class="dropdown-item" href="./confirmation.html">Confirmation</a></li>
                  <li><a class="dropdown-item" href="./holy-orders.html">Holy orders</a></li>
                  <li><a class="dropdown-item" href="./matrimony.html">Matrimony</a></li>
                  <li><a class="dropdown-item" href="./annointing.html">Annointing of the sick</a></li>                  
                </ul>
              </li>
    
              <li class="nav-item dropdown church-groups header-link">
                <a class="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Church groups<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/></svg>
                </a>
                <ul class="community-dropdown-items dropdown-menu">
                  <li><a class="dropdown-item" href="./cma.html">Catholic Men Association(CMA)</a></li>
                  <li><a class="dropdown-item" href="./cwa.html">Catholic Women Association(CWA)</a></li>
                  <li><a class="dropdown-item" href="./youth.html">Youth</a></li>
                  <li><a class="dropdown-item" href="./pmc.html">Pontifical Missionary Childhood(PMC)</a></li>
                </ul>
              </li>
    
              <li class="nav-item header-link">
                <a class="news-and-events-link nav-link active" aria-current="page" href="./news&events.html">News & Events</a>
              </li>
    
            </ul>
          </div>
        </div>   
        
      </nav>
      `
    }
}

// footer management query
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="footer-section">
          <div class="container">
            <footer class="py-5 footer-end">
              <div class="row">
                  <div class="col-lg-4">
                  <h4>Quick Links</h4>
                  <ul class="nav flex-column footer-quicklink">
                      <li class="nav-item mb-2"><a href="./index.html" class="nav-link p-0 text-body-secondary">Home</a></li>
                      <li class="nav-item mb-2"><a href="index.html#Mass-schedule" class="nav-link p-0 text-body-secondary" onclick="togglePopup()">Mass schedule</a></li>                            
                      <li class="nav-item mb-2"><a href="https://bible.usccb.org/daily-bible-reading" class="nav-link p-0 text-body-secondary">Daily readings</a></li>
                      <li class="nav-item mb-2"><a href="./church-leardership.html" class="nav-link p-0 text-body-secondary">Parish Leadership</a></li>
                      <li class="nav-item mb-2"><a href="./brief-history.html" class="nav-link p-0 text-body-secondary">About Us</a></li>
                  </ul>
              </div>
          
              <div class="contact-info col-lg-4 justify-content-center">
                  <h4>Contact Info</h4>
                  <ul class="nav flex-column">
                      <li class="nav-item mb-2">Talk to us:</li>
                      <li class="nav-item mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                      </svg> St cecilia Catholic Church Isinya</li>
                      <li class="nav-item mb-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                      </svg> +254 700 00 0000 </li>
                      <li class="mail nav-item mb-2">&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/><path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                      </svg> <a href="mailto: info@stceciliacatholicisinya.org">info@stceciliacatholicisinya.org</a></li>                    
                  </ul>                 
              </div> 
                  <div class="socials col-lg-4 align-content-center">
                      <ul class="list-unstyled nav flex-row">
                          <li class="ms-3"><a class="link-body-emphasis" href="https://www.facebook.com"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#363636" class="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                          </svg></a></li>
                          <li class="ms-3"><a class="link-body-emphasis" href="https://www.instagram.com"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#363636" class="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                          </svg></a></li>
                          <li class="ms-3"><a class="link-body-emphasis" href="https://wa.me/0700000000"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#363636" class="bi bi-whatsapp" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                          </svg></a></li>                      
                      </ul>
                  </div>            
              </div>

              <div id="scrollTopBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="black" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
              </svg>
              </div>
          
              <div class="d-flex flex-column flex-sm-row justify-content-between border-top footer-copyright">
                  <p>copyright © 2024 St Cecilia Catholic parish, Isinya. All rights reserved.</p>
                  <p>Designed by <a href="#" style="text-decoration: none; color: antiquewhite;">Solitary WebWorks</a> - +254768805337</p>
              </div>          
              
            </footer>             
          </div>
        </section>
        `
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
// end of header and footer management queries







// scroll to top button element
// Get the button element
var scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when scrolling down
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Scroll to  top when the button is clicked
scrollTopBtn.onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};