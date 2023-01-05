import axios from "axios";

const url = "https://api-ssl.bitly.com/v4/shorten"

const config = { headers: { Authorization: "Bearer 33b180c41a3a84cedbe332d4805ede8952b3b22d", "Content-Type": "application/json" } }

const fetchBitly = async long_url => {
    const { data: { link } } = await axios.post(url, { long_url }, config)
    return link
}

export default fetchBitly