import axios from "axios";
import { selector } from "recoil";

export const productState = selector({
    key: "product",
    get: async () => {
        try {
            const res = await axios(
                "https://mumzcareandkidsstore.com/api/product"
            );
            return res.data || [];
        } catch (error) {
            console.log(`Error ${error}`);
            return [];
        }
    },
});