function Tache({ titre, terminee }) {
  const classe = terminee ? 'tache terminee' : 'tache'

  return (
    <li className={classe}>
      <span className="titre">
        {terminee ? '✅' : '⬜'} {titre}
      </span>
    </li>
  )
}

export default Tache