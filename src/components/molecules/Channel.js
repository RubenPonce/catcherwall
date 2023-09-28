import {Content} from "./Content";

export const Channel = ({channel}) => {
    const name = channel.name;
    const content = channel.content;
    return (
        <>
                <Content content={content} name={name}/>
        </>
    );
}