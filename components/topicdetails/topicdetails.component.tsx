import classes from "./topicdetails.module.css"

const TopicDetails = () => {
    return(
        <div className={classes.topicdetails_wrapper}>
            <h3>Title</h3>
            <p>Details</p>
            <button>Update</button>
            <button>Delete</button>
        </div>
    )
}

export default TopicDetails