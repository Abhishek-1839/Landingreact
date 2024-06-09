// import "./Footer.css";

const Foot = () => {
    return (
        <div className="last">
            <div className="part1">
            <ul className="list">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
            </div>
            <div className="part2">
                <p>Copyright &copy; All Rights reserved..</p>
            </div>
            <div className="part3">
                <p>Address : Indore, Madhya Pradesh India, PinCode - {Math.floor(Math.random()*1000000)}</p>
            </div>
        </div>
    );
}

export default Foot;