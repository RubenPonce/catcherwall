import {filterWords} from "../../utils/filterwords";
import {useContext} from "react";
import {TabContext} from "../atoms/Tab";
function timeAgo(minutes) {
    if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (minutes < 1440) {
        const hours = Math.floor(minutes / 60);
        return `${hours} hours ago`;
    } else {
        const days = Math.floor(minutes / 1440);
        return `${days} days ago`;
    }
}

/**
 * @param e {Event}
 */
const now = new Date();
export const Content = ({content, name, index}) => {
    const {isFilterEnabled, setContentNotFoundCount, contentNotFounCount} = useContext(TabContext);
    const handleError = (e) => {
        e.target.parentElement.parentElement.parentElement.style.display = "none"
        setContentNotFoundCount(contentNotFounCount + 1);
    }
const title =  isFilterEnabled ? filterWords(content.title) : content.title;
const contentUploadedMinutesAgo = new Date(content.date);
const diffInMinutes = timeAgo(Math.floor((now - contentUploadedMinutesAgo) / 60000) );

    return (
                <div key={content.url} className="content-piece">
                        <div>
                        <p className="content-number">{index + 1}</p>
                        <p className={!diffInMinutes.includes("day")? "time-ago" : ""}> {diffInMinutes}</p>

                    <a className="content"  href={content.url} key={content.url}>
                        <img src={content.image} alt={content.title} onError={handleError}/>

                    <h4>{title}</h4>
                        </a>

                        <p>{content.date}</p>
                            <p className="content-name">{name}</p>
                        </div>
                </div>
    );
}