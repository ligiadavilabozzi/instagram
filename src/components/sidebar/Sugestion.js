export default function Sugestion(props) {
    return (
      <div class="sugestion">
        <div class="user">
          <img src={props.imgUser} alt='sugestion'/>
          <div class="text">
            <div class="name">{props.name}</div>
            <div class="razao">{props.reason}</div>
          </div>
        </div>
  
        <div class="follow">Seguir</div>
      </div>
    )
  }