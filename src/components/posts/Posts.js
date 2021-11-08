import Post from './Post'

export default function Posts() {
    return (
        <div class="posts">
            <Post
                imgUser="assets/img/meowed.svg"
                nameUser="meowed"
                imgContent="assets/img/gato-telefone.svg"
                imgLike="assets/img/respondeai.svg"
                nameLike="respondeai"
                numLikes='101.523'
            />
            <Post
                imgUser="assets/img/barked.svg"
                nameUser="barked"
                imgContent="assets/img/dog.svg"
                imgLike="assets/img/adorable_animals.svg"
                nameLike="adorable_animals"
                numLikes='99.159'
            />
        </div>
    )
}