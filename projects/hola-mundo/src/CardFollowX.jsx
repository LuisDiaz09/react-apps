export function CardFollowX  ({userName, children, isFollowing}) {
  return (
    <article className='card_x'>
      <header>
        <img className='img_avatar' alt="Avatar de Microsoft" 
        src={`https://unavatar.io/${userName}`}/>
        <div className='attributes'>
          <strong>{children}</strong>
          <span>@{userName}</span>
        </div>      
      </header>

      <aside>
        <button className='follow_x'>Seguir</button>
      </aside>
    </article>
  )
}
