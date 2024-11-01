function MovieCard({movie})
{
    return(
        <>
        <h1>movie details</h1>
        <h2>{movie.name}</h2>
        <h2>{movie.hero}</h2>
        <h2>{movie.rating}</h2>
       


        </>
    )
}
export default MovieCard;