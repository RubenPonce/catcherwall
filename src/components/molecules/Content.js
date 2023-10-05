import {filterWords} from "../../utils/filterwords";
import {useContext, useMemo} from "react";
import {TabContext} from "../atoms/Tab";
import {Card, Container, Image} from "react-bootstrap";

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
    const title = useMemo(() => {
        return isFilterEnabled ? filterWords(content.title) : content.title;
    }, [isFilterEnabled, content.title]);
    const contentUploadedMinutesAgo = new Date(content.date);
    const diffInMinutes = timeAgo(Math.floor((now - contentUploadedMinutesAgo) / 60000));

    return (
        <Card className="mb-4">
            <Card.Body className="content-piece">
                <Container fluid>

                    <Card.Link href={content.url} target="_blank" rel="noopener noreferrer" title={title}>
                        <Card.Text className="content-number">{index + 1}</Card.Text>

                        <Card.Text
                            className={!diffInMinutes.includes("day") ? "time-ago" : ""}>{diffInMinutes}</Card.Text>
                        <Image src={content.image} alt={title} onError={handleError} loading="lazy" rounded
                               className="content-image mb-2"/>
                        <Card.Title className="title truncate">{title}...</Card.Title>

                        <Card.Text className="date">{content.date}</Card.Text>
                        <Card.Text className="content-name">{content.authorName}</Card.Text>
                    </Card.Link>

                </Container>
            </Card.Body>
        </Card>
    );
}