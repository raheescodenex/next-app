import headerStyles from '../styles/Header.module.css'

const Header = () => {
    // const x = 2;
    return ( 
        <div className={headerStyles.title}>
            <h1><span>WebDev </span>News</h1>
            {/* <style jsx>
                {
                    `
                    .title{
                        color:${x>3?'red':'blue'};
                        text-align:center;
                    }
                    
                    
                    `
                }
            </style> */}
            <p className={headerStyles.description} >Keep up to date with Latest Web Dev News</p>
        </div>
     );
}
 
export default Header;