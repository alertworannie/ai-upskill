import detectiveSvg from '../assets/detective.svg'
import detectivePng from '../assets/detective-bg.png'

function BackgroundElements() {
  return (
    <>
      {/* Main detective background using SVG */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${detectiveSvg})`,
          backgroundSize: '300px 450px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          opacity: 0.08,
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
      
      {/* PNG background as additional element */}
      <div 
        style={{
          position: 'fixed',
          top: '10%',
          right: '5%',
          width: '150px',
          height: '200px',
          backgroundImage: `url(${detectivePng})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1,
          zIndex: -1,
          pointerEvents: 'none',
          transform: 'rotate(5deg)'
        }}
      />
      
      {/* Secondary detective background */}
      <div 
        style={{
          position: 'fixed',
          top: '20%',
          left: '-10%',
          width: '200px',
          height: '300px',
          backgroundImage: `url(${detectiveSvg})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          opacity: 0.05,
          zIndex: -1,
          pointerEvents: 'none',
          transform: 'rotate(-15deg)'
        }}
      />
    </>
  )
}

export default BackgroundElements
