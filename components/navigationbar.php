<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="navigationbar.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
</head>
<body>
<header>
        <a href="#home" class="logo">
            <i class='bx bxs-area'></i><p>ShowSnap</p>
        </a>
        <div class="bx bx-menu" id="menu-icon"></div>
        <!-- menu  -->
        <ul class="navbar">
            <li><a href="#home" class="home-active">Home</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#tickets">Tickets</a></li>
            <li><a href="#support">Support</a></li>
        </ul>
        <div class="btn-and-toggle">
            <div class="mode-toggle">
                <i class="bx bx-moon" id="theme-icon"></i>
            </div>
            <a href="loginpage/login.html" class="btn">Log In</a>
        </div>
    </header>
    <div class="mobile-header">
        <ul class="navbar">
            <li><a href="#home" class="home-active"><i class='bx bxs-home-alt-2' ></i><br><span>Home</span></a></li>
            <li><a href="#movies"><i class='bx bx-camera-movie' ></i><br><span>Movies</span></a></li>
            <li><a href="#tickets"><i class='bx bx-barcode'></i><br><span>Tickets</span></a></li>
            <li><a href="#support"><i class='bx bx-support' ></i><br><span>Support</span></a></li>
        </ul>
    </div>
</body>
<script src="navigationbar.php"></script>
</html>