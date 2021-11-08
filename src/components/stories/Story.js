export default function Story(props) {
    return(
    <div class="story">
        <div class="story-image">
            <img src={props.img} />
        </div>
        <div class="user" >{props.name}</div>
    </div>
    )
}
