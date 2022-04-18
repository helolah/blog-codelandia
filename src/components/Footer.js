function Footer() {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer>
            <div className="footer-content">
                <p>Powered by <a href="https://github.com/helolah" target={'_blank'}>Helolah</a> - &copy; {getCurrentYear()} All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;