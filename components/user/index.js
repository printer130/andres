import Link from 'next/link'

export default function User({ user }) {

  return <><Link href={`/details/${user.id}`} key={user.id}>
    <a>
      <li>
        <div className='attribute-container'>{user.username}</div>
        <div className='attribute-container'>{user.evaluation}</div>
        <div className='attribute-container'>{user.renew}</div>
      </li>
    </a>
  </Link>
    <style jsx>{`
      li:hover {
        background: rgba(0,0,0, .3);
        cursor: pointer;
      }
      li {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-flow: column;
        min-height: 2em;
      }
      .attribute-container {
        border: 1px solid #222;
        display: grid;
        content-visibility: auto;
        overflow: scroll;
        grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
        }
      `}

    </style>
  </>
}