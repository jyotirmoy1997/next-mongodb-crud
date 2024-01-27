'use client'
import { useRef, FormEvent } from "react"
import { useRouter } from 'next/navigation'
import axios from "axios"

const AddTopicPage = () => {
    const titleRef = useRef<HTMLInputElement>(null)
    const detailsRef = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const onSubmitHandler = async (event : FormEvent) => {
        event.preventDefault()
        const title = titleRef.current?.value
        const details = detailsRef.current?.value
        try {
            const res = await axios.post("http://localhost:3000/api/topics", {title, description : details})
            if(res.status === 200){
                router.push("/")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
           <form>
                <input type="text" placeholder="Topic Title" ref={titleRef} />
                <input type="text" placeholder="Topic Details" ref={detailsRef} />
                <button onClick={onSubmitHandler}>Add Topic</button>
           </form>
        </div>
    )
}

export default AddTopicPage