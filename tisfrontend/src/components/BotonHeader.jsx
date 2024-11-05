/* eslint-disable react/prop-types */

const BotonHeader = ({ hrefBoton, nombreBoton }) => {
  return (
    <a
      href={hrefBoton}
      className="p-2 transition-all bg-white rounded bg-opacity-5 hover:bg-opacity-10 hover:shadow"
    >
      {nombreBoton}
    </a>
  )
}

export default BotonHeader