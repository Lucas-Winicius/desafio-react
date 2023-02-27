import ToggleBar from '../components/ToggleBar'
import { useState, useEffect } from 'react'
import '../styles/app.css'

function App() {
  const [ dots, setDots ] = useState([])
  const [ removeds, setRemoved ] = useState([])

  useEffect(() => {
    const desfazer = document.querySelector('.desfazer')
    const refazer = document.querySelector('.refazer')

    if(dots.length <= 0) desfazer.setAttribute('disabled', true)
    else desfazer.removeAttribute('disabled')

    if(removeds.length <= 0 ) refazer.setAttribute('disabled', true) 
    else refazer.removeAttribute('disabled')

  }, [dots, removeds])

  onclick = e => {

    if(dots.length <= 0 && removeds.length >= 1) setRemoved([])

    if(e.target.classList.contains('container')) {
      const dotsArray = [ ...dots ]
      dotsArray.push({ top: `${e.clientY}px`, left: `${e.clientX}px` })
      setDots(dotsArray)
    }

    if(e.target.classList.contains('desfazer')) {
      if(!dots.length) return;
      const dotsArray = [ ...dots ]
      const removedDots = [ ...removeds ]
      const removed = dotsArray.splice(-1, 1)[0]
      removedDots.push(removed)
      
      setDots(dotsArray)
      setRemoved(removedDots)
    }
    
    if(e.target.classList.contains('refazer')) {
      if(!removeds.length) return;
      const dotsArray = [ ...dots ]
      const removedDots = [ ...removeds ]
      const redone = removedDots.splice(-1, 1)[0]
      dotsArray.push(redone)
      
      setDots(dotsArray)
      setRemoved(removedDots)
    }

  }

  return (
    <div className='container'>
      { dots.map((d, index) => <span style={d} key={index} className='dot'></span>) }
      <ToggleBar/>
    </div>
  )
}

export default App
