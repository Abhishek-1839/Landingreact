// import "./Navbaar.css";
import img1  from "../images/Picture1.png";
const Navbaar = () => {
    return (
        <>
        <nav>
            <div className="left">
                <img src={img1} className="img" />
                <h1 className="header">BANJAARA TRAVELS</h1>
            </div>
            <div className="right">
                
                    <ul>
                        <li>
                            <a href="#">Home</a></li>
                        <li> <a href="#">About</a></li>
                        <li> <a href="#">Contact</a></li>
                        <li> <a href="#">Services</a></li>
                    </ul>

                

            </div>
            </nav>
        </>
    )

}
export default Navbaar;