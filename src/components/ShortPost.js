import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

function ShortPost() {
    
    const toggleLike = () => {
        var $regularHeart = document.getElementById('regularHeart');
        var $solidHeart = document.getElementById('solidHeart');

        if (window.getComputedStyle($solidHeart).display === "none") {
            $regularHeart.style.display = "none";
            $solidHeart.style.display = "block";
        } else {
            $solidHeart.style.display = "none";
            $regularHeart.style.display = "block";
        }

    };

    return (
        <div className="post">
            <div className="short-post-header">
                <span>18 abr, 2022</span>
                <FontAwesomeIcon icon={faHeart} className="heart-icon" id="regularHeart" onClick={toggleLike} title="Curtir" />
                <FontAwesomeIcon icon={solidHeart} className="heart-icon-selected" id="solidHeart" onClick={toggleLike} title="Descurtir" />
            </div>
            <div className="short-post-content">
                <h4>Primeiro post: Este é o primeiro post desse blog!</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="">Ver mais...</a>
            </div>
        </div>
    );
}

export default ShortPost;