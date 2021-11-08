export default function Post(props) {
    return (
        <div class="post">
            <div class="post-header">
                <div class="user">
                    <img src={props.imgUser} />
                    {props.nameUser}
                </div>
                <div class="actions">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="post-content">
                <img src={props.imgContent} />
            </div>

            <div class="post-footer">
                <div class="actions-buttons">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="likes">
                    <img src={props.imgLike} />
                    <div class="text">
                        Curtido por <strong>{props.nameLike}</strong> e <strong>outras {props.numLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}