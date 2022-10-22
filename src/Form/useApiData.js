import { useEffect, useState } from "react";
import axios from "axios";

export const useApiData = () => {
    const [ratesData, setRatesData] = useState({
        rates: null, date: "", state: "loading"
    });

    useEffect(() => {
        const apiData = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                setRatesData({
                    rates: (response.data.rates),
                    date: (response.data.date),
                    state: "success"
                });
            } catch (error) {
                setRatesData({ state: "error" });
            };

        }; setTimeout(apiData, 1000);
    }, []);

    return { ratesData };
};