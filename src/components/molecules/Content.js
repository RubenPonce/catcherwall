

export const Content = ( {content} ) => {
    return (
        <div className="content-container">
            {content.map((content) => (
                <div className="content" key={content.url}>
                    <a href={content.url}>
                        <h4>{content.title}</h4>
                    </a>
                    <p>{content.date}</p>
                </div>
            ))}
        </div>
    );
}