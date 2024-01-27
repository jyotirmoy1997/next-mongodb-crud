type Topic = {
    _id : string,
    title: string;
    description: string;
}

type Params = {
    params : {
        id : string
    }
}

type TopicDetailsProps = {
    id : string
    title : string,
    details : string
}