import request from "request-promise"

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills exercise.",
  },
  json: true,
}

const getJoke = async () => {
  const res = await request.get(options)
  return res.joke
}

export default getJoke