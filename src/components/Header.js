import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>International Papua Scholars Network</h1>
                <p>Membangun Jejaring<br />
                Akademik dan Professional<br />
                Terbesar di Papua/Papua Barat</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Apa itu IPSON?</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Mengapa IPSON penting?</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Bagaimana cara kerja IPSON?</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
