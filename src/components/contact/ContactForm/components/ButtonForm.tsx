import './ButtonForm.css'

interface Props {
  children : React.ReactNode;
  styleVariation ?: string;
}

export function ButtonForm( {styleVariation, children} : Props ) {

  return (
    <button type="submit" className={`contact__button ${styleVariation && styleVariation}`} >
      {children}
    </button>
  )
}