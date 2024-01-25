import TopicDetails from "../topicdetails/topicdetails.component"
import classes from "./topics.module.css"

const Topics = () => {
    return(
        <div className={classes.topics_wrapper}>
            <TopicDetails />
            <TopicDetails />
        </div>
    )
}

export default Topics