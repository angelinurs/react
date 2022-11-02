import LogoImage from '../images/logo.png'
function Logo() {
    return (
        <div className="Logo" style={{padding: 0, margin: 0}}>
            <img src={LogoImage}  alt='logo' />
        </div>
    );
}

export default Logo;