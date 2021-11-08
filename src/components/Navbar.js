export default function Navbar() {
    return (
        <div class="navbar">
            <div class="container">

                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separator"></div>
                    <img src="assets/img/logo.png" alt="bar" />
                </div>
                <div class="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div class="instagram-mobile">
                    <img src="assets/img/logo.png" alt="logo instagram" />
                </div>

                <div class="searchBar">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

                <div class="icons-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}
