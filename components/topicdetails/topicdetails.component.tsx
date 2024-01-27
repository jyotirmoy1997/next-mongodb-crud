'use client'

import classes from "./topicdetails.module.css"
import axios from "axios"

const TopicDetails = ({ id, title, details} : TopicDetailsProps) => {
    const deleteHandler = async () => {
        try {
            const res = await axios.delete(`http://localhost:3000/api/topics/${id}`)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className={classes.topicdetails_wrapper}>
            <h3>{title}</h3>
            <p>{details}</p>
            <button>Update</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default TopicDetails