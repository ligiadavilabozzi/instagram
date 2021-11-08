import Sugestions from './sugestions/Sugestions'
import Links from './Links'

export default function Sidebar() {
    return (
        <div class="sidebar">

            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <Sugestions />
          

        </div>
    )
}