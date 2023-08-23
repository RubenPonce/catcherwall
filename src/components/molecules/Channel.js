import {Content} from "./Content";

export const Channel = ({channel}) => {

    return (
        <>
            <div className="content-container">
                <h3>{channel.name}</h3>
                <Content content={channel.content}/>
            </div>
        </>
    );
}