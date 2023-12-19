import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div>
         <img src="/assets/menu.svg" alt="humburgur" />
         <img src="/assets/logo.svg" alt="logo" />
      </div>

      <div>
        <input type="search" />
        <div>
         <img src="/assets/search.svg" alt="search" />
        </div>
      </div>

      <div>

      </div>
    </nav>
  )
}

export default Navbar