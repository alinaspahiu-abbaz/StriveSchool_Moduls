const url = "https://striveschool.herokuapp.com/api/agenda/"

getEvents = async () => {
    let response = await fetch(url)// this is getting the response from the API fetching
    return await response.json();// this is returning the result of the promise in an usable format.
}