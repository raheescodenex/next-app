import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
const Layout = ({children}) => {
    return ( 
       <>
       <Nav/>
         <div className={styles.container}>
            
            <main className="main">
                <Header/>
                {children}
            </main>
        </div>
       </>
     );
}
 
export default Layout;