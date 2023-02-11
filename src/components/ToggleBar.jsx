import { FaUndo, FaRedo } from 'react-icons/fa'
import '../styles/toggleBar.css'

function ToggleBar() {
    return (
        <div className="buttons">
            <button className="desfazer"><FaUndo/></button>
            <button className="refazer"><FaRedo/></button>
        </div>
    )
}

export default ToggleBar