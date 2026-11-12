function ListeTaches() {
  return (
    <ul className="liste-taches">
      <li className="tache">
        <span className="titre">
          Installer Node.js
        </span>
      </li>

      <li className="tache terminee">
        <span className="titre">
          Comprendre les composants
        </span>
      </li>

      <li className="tache">
        <span className="titre">
          Apprendre React
        </span>
      </li>
    </ul>
  )
}

export default ListeTaches