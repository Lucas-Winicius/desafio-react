import { FaUndo, FaRedo } from 'react-icons/fa'
import '../styles/toggleBar.css'

function ToggleBar() {
    return (
        <div className="buttons">
            <button className="desfazer"><FaUndo className='desfazer'/></button>
            <button className="refazer"><FaRedo className="refazer"/></button>
        </div>
    )
}

export default ToggleBar