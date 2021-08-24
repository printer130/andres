
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
    color: var(--andres-color);
    letter-spacing: 1px;
    border: none;
    min-width: ${width}px;
    padding: .7em;
    cursor: pointer;
    margin: 1.1em auto 1.2em;
    margin-bottom: 1.2em;
    margin-top: 1.1em;
  }
  button:disabled {
    opacity: .4;
    border: none;
    cursor: none;
    pointer-events: none;

    pointer: none;
  }
  button:hover {
    color: var(--andres-color);
    box-shadow: 0px 0px 8px 3px var(--gold);
    background: var(--gradient);
    color: #fff;
  }
  
  @media only screen and (min-width: 320px) {
    button {
      width: 100%;
      margin:0;
    }
  } 
  @media only screen and (min-width: 769px) {
    button {
      margin: 0 auto;
      width: 600px;
    }
  }
  `}
    </style>
  </button>
}