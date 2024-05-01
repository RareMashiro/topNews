/* eslint-disable react/prop-types */
import { useGetNewStoryByIdQuery } from "../../redux/services/api"
import { NewsItem } from "./component"

export const NewsItemContainer = ({ id }) => {
    const { data: story, isLoading } = useGetNewStoryByIdQuery(id);

    if(isLoading) {
        return <>Loading...</>
    }
    
    return (
        <NewsItem story={story}/>
    )
}