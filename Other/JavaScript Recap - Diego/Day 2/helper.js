
const url="https://striveschool.herokuapp.com/api/movies"
const getCategories = async () => {
    // fetch it
    const repsonse = await fetch(url, {
        header: {
            "Authorization": "Basic" + btoa("user31:testPassword123")
        }
    })
    // transform it
    return await response.json()
    // return it
}

const getCategory = async(categoryName) => {
    const response = await fetch(url + categoryName, {
        headers: {
            "Authorization": "Basic" + ("user31:testPassword123"),
        }
    })

    return await response.json()

}

const createMovie = async(movie) => {
    const response = await fetch (url +catgoryName, {
        method:"POST",
        headers: {
            "Authorization": "Basic" + ("user31:testPassword123"),
            "Content-Type":"application/json"

        },
        body:JSON.stringify(movie)
    })
    return await response.json()

}

const updateMovie = async(movie, movieId) => {
    const response = await fetch (url +movieId, {
        method:"PUT",
        headers: {
            "Authorization": "Basic" + ("user31:testPassword123"),
            "Content-Type":"application/json"

        },
        body:JSON.stringify(movie)
    })
    return await response.json()

}

const deleteMovie = async(movieId) => {
    const response = await fetch(url +movieId)
}