export default function FooterMain() {
  return <>
    <footer>
      <div>
        <p>
          Hecho por 🍕 con ❤ para Club ATsports
          </p>
      </div>
    </footer>
    <style jsx>{`
    footer {
      background: var(--black);
      display: flex;
      height: 400px;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
    `}</style>
  </>
}