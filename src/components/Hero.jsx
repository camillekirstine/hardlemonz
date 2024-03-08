

export const Hero = () => {
  return (
    <div className='containerHero'>
      <div className='row justify-content-center mx-auto'>
        <div className='col-12 text-center'>
          <h1 className='title p-0 m-0'>Hard Lemonz</h1>
          <h2 className='subTitle p-0 m-0'>Hard lemonade for every preference</h2>
        <img className="lemonGif mx-auto" style={{position: 'absolute', zindex: '-1'}}src={require('../lemon.GIF')}></img>
        </div>
      </div>
    </div>
   
      
  )
}