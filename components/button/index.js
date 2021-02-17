

export const Button = ({ children, disabled, onClick, height, styles, width = "125", bg }) => {
  return <button disabled={disabled} onClick={onClick}>
    {children}
    <style jsx>{`   
  button {
    display: block;
    border-radius: .5em;
    background: ${bg ? bg : 'yellow'};
    font-weight: 700;
    height: ${height}px;
    color: #222;
    letter-spacing: 1px;
    border: none;
    min-width: ${width}px;
    max-width: 300px;
    padding: .7em;
    cursor: pointer;
    margin: 1.1em auto 1.2em;
    margin-bottom: 1.2em;
    margin-top: 1.1em;
  }
  button:disabled {
    opacity: .4;
    border:none;
    cursor: none;
    pointer: none;
  }
  `}
    </style>
  </button>
}