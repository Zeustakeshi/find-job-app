import { useEffect, useState } from "react";
import axios from "axios";

const rapidApiKey = "d740e375dfmshe8e5cfa1719a732p1cc24ajsn42d6d5641476";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            "X-RapidAPI-Key": rapidApiKey,
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.request(options);
            setError("");
            setData(res.data.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error, loading, fetchData };
};

export default useFetch;
