import React, {useMemo, useState} from 'react';
import {Content} from "./Content";
import {Pagination} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

const pagination = (prevPage, nextPage) => {
    return (
        <div className="pagination">
            <Pagination size="lg">
                <Pagination.Prev
                    className="pagination-btn-gradient"
                    onClick={prevPage}
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="arrow-prev"/>
                </Pagination.Prev>
                <Pagination.Next
                    className="pagination-btn-gradient"
                    onClick={nextPage}
                >
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-next"/>
                </Pagination.Next>
            </Pagination>
        </div>
    )
}

export const StaticChannels = ({channels}) => {

    const allContent = useMemo(() => {
        const flattenedContent = channels.flatMap((channel) =>
            channel.content.map(contentItem => ({
                ...contentItem,
                channelName: channel.name
            }))
        );

        return flattenedContent.sort((a, b) => new Date(b.date) - new Date(a.date));

    }, [channels]);

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 6;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const nextPage = () => {
        if (currentPage >= Math.ceil(allContent.length / itemsPerPage)) return;

        setCurrentPage(prevPage => prevPage + 1);
    }

    const prevPage = () => {
        if (currentPage <= 1) return;
        setCurrentPage(prevPage => prevPage - 1);
    }

    const currentItems = allContent.slice(indexOfFirstItem, indexOfLastItem);

    if (!channels.length) {
        return null;
    }
    return (
        <div className="static-channels">
            <h2>
                Current Videos 🟢
            </h2>
            {pagination(prevPage, nextPage)}
            <p style={{margin: "1em 0"}}>Page {currentPage} of {Math.ceil(allContent.length / itemsPerPage)}</p>
            <div className="static-channels-container">
                {currentItems.map((content, index) => (
                    <Content key={content.url} content={content} name={content.channelName} index={index}/>
                ))}
            </div>
            {pagination(prevPage, nextPage)}
        </div>
    );
};
