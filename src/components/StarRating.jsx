export default function StarRating({vote}){
    
    const renderStars = () => {
        return [1,2,3,4,5].map( ( _, i ) => {
            return <i key={i} className={`bi bi-star${i < vote ? '-fill' : ''}`}></i>
        } )
    }

    return(
        <span className="text-warning">{ renderStars() }</span>
    )
}