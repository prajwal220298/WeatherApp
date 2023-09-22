import './styles.css'
import IMAGE from './react.png'
import LOGO from './logo.svg'

export const App = () => {
  return (
    <>
      <img src={IMAGE} alt="REACT LOGO" height={200} width={200} />
      <img src={LOGO} alt="REACT LOGO" height={200} width={200} />
      <h1>
        React typescript webpack App - {process.env.NODE_ENV} -{' '}
        {process.env.name}
      </h1>
    </>
  )
}
