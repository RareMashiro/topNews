import { useGetNewStoryByIdQuery } from "../../redux/services/api";
import { useParams } from "react-router-dom";
import { CommentsList } from "./component"

export const CommentsListContainer = () => {
    const { commentId } = useParams(); 
    const { data: story, refetch, isFetching } = useGetNewStoryByIdQuery(8863);
    
    if(isFetching) {
        return (
            <>Loading...</>
        )
    }

    return (
        <CommentsList story={story} refetch={refetch} />
    )
}