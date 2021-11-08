import Sugestions from './Sugestions'
import Links from './Links'

export default function Sidebar() {
    return (
        <div class="sidebar">

            <div class="user">
                <img src="assets/img/catanacomics.svg" alt='user'/>
                <div class="text">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <Sugestions />
            <Links />

        </div>
    )
}