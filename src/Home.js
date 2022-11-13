import { useState } from "react";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const Home = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const handleClickLike = () => {
        setLikes(likes+1)
    };
    const handleClickDislike = () => {
        setDislikes(dislikes+1)
    };
    return ( 
        <div className="home">
            <iframe 
                className="video"
                width="787" 
                height="443" 
                src="https://www.youtube.com/embed/j942wKiXFu8?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" 
                title="Full React Tutorial #1 - Introduction" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <div className="show-likes"> {likes} <ThumbUpOffAltIcon className="icon"/> {dislikes}<ThumbDownOffAltIcon className="icon"/></div>
            <div className="buttons">
                <button className="like" onClick={handleClickLike}>Like</button>
                <button className="dislike" onClick={handleClickDislike}>Dislike</button>
            </div>
        </div>
     );
}
 
export default Home;