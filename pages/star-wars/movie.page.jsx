export { Page };

function Page(pageProps) {
    const { movie } = pageProps;
    return (
        <>
            <h1>{movie.title}</h1>
            <p>Release Date: {movie.release_date}</p>
            <p>Director: {movie.director}</p>
        </>
    );
}
