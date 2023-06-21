document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementsByName('username')[0].value;
    var password = document.getElementsByName('password')[0].value;

    // Lakukan validasi dan pengecekan login
    // Anda dapat mengimplementasikan logika login dan pengecekan peran di sini
    // Contoh: periksa username dan password, dan tentukan peran pengguna

    if (username === 'admin' && password === 'admin123') {
        // Pengguna adalah admin
        alert('Login berhasil sebagai admin');
        // Redirect ke halaman admin
        window.location.href = 'adminpage.html';
    } else {
        // Pengguna adalah user
        alert('Login berhasil sebagai user');
        // Redirect ke halaman user
        window.location.href = 'index.html';
    }
});
