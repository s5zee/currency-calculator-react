import { useEffect, useState } from "react";
import axios from "axios";

export const useApiData = () => {
    const [ratesData, setRatesData] = useState({ rates: "EUR" });
    const [date, setDate] = useState({ date: "" });
    const [state, setState] = useState({ state: "loading" })

    useEffect(() => {
        const apiData = async () => {
            try {
                const response = await axios.get
                    ("https://api.exchangerate.host/latest?base=PLN")
                setState({ state: "success" })
                setRatesData({ rates: (response.data.rates) });
                setDate({ date: (response.data.date) });
            } catch (error) {
                setState({ state: "error" })
            }

        }; setTimeout(apiData, 1000);
    }, [])

    return { state, date, ratesData };
};