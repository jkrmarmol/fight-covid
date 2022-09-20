import { Link } from 'react-router-dom'

function Footer() {
  return ( 
    <footer>
      <div className='copyright'>
        <p>Fight Covid. | Kurt Russelle Marmol</p>
      </div>
      <div>
        <Link
          to='https://fb.com/jkrmarmol'
          target='_blank'
        >
          <i className='bx bxl-facebook'></i>
        </Link>
        <Link
          to='https://github.com/jkrmarmol'
          target='_blank'
        >
          <i className='bx bxl-github' ></i>
        </Link>
        
      </div>
    </footer>
   );
}

export default Footer;