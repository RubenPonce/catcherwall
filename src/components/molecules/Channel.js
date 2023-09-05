import {Content} from "./Content";

export const Channel = ({channel}) => {
    return (
        <>
            <div className="card">
                <h3>{channel.name}</h3>
                <Content content={channel.content}/>
            </div>
        </>
    );
}