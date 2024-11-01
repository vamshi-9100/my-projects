import MovieCard from "./MovieCard"

function MovieGrid()
{
    const movies=[{name:'billa',hero:'prabhas',rating:4.5},
        {name:'rrr',hero:'ntr',rating:4.9},
        {name:'naruto',hero:'uzumaki',rating:5},
        {name:'thodel',hero:'kapoor',rating:3.5},
        {name:'bheshma',hero:'nithin',rating:4}
    ];
    return (
        <>
      {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
       
        </>
    )
}
export default MovieGrid;