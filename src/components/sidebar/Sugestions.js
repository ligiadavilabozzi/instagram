import Sugestion from './Sugestion'

export default function Sugestions() {
    return (
        <div class="sugestoes">

            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <Sugestion
                imgUser="assets/img/bad.vibes.memes.svg"
                name="bad.vibes.memes"
                reason="Segue você"
            />

            <Sugestion
                imgUser="assets/img/razoesparaacreditar.svg"
                name="razoesparaacreditar"
                reason="Novo no Instagram"
            />

            <Sugestion
                imgUser="assets/img/adorable_animals.svg"
                name="adorable_animals"
                reason="Segue você"
            />

        </div>
    )
}