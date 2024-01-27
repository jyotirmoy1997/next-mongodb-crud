import TopicDetails from "../topicdetails/topicdetails.component"
import classes from "./topics.module.css"


const Topics = async () => {
    let topicsArray : Topic[]
    try {
        const res = await fetch('http://localhost:3000/api/topics', { cache : "no-cache"})
        const data = await res.json()
        topicsArray = data.topics
    } catch (error) {
        return(
            <div className={classes.topics_wrapper}>
                <p>There was a problem fetching topics...</p>
            </div>
        )
    }
    return(
        <div className={classes.topics_wrapper}>
            {
                topicsArray.map(topic => <TopicDetails key={topic._id} id={topic._id} title={topic.title} details={topic.description} />)
            }
        </div>
    )
}

export default Topics