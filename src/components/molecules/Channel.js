import {Content} from "./Content";

export const Channel = ({channel}) => {

    console.log({channel, content: channel.content})
    return (
        <>
            <div className="card">
                <h3>{channel.name}</h3>
                <Content content={channel.content}/>
            </div>
        </>
    );
}