const showNavbar = (toggleid, navid, bodyid, headerid) => {
    const toggle = document.getElementById(toggleid),
      nav = document.getElementById(navid),
      bodypd = document.getElementById(bodyid),
      headerpd = document.getElementById(headerid),
      logoutBtn = document.getElementById('logout-btn'); // Get the logout button element
  
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
        toggle.classList.toggle('bx-x');
        bodypd.classList.toggle('body-pd');
        headerpd.classList.toggle('body-pd');
  
        
      });
    }
  };
  
  // Function to handle the login event
  function handleLogin() {
    // Add your login logic here
    console.log('Login button clicked');
  }
  
  showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
  
  const linkcolor = document.querySelectorAll('.nav__link');
  
  function colorlink() {
    if (linkcolor) {
      linkcolor.forEach((l) => l.classList.remove('active'));
      this.classList.add('active');
    }
  }
  document.getElementById("Form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default
  
    // Menampilkan notifikasi
    alert("Tugas berhasil dikumpulkan!");
  
    // Mengarahkan ke halaman login.html
    window.location.href = "serahkan.html";
  });
  