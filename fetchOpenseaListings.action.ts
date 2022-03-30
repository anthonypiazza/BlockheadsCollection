import axios from "axios";
import { blockheadData } from "../constants/blockheadData";
import { openSeaUrl } from '../constants/openseaConfig'

export const fetchOpenSeaListings = async () =>
    await axios.get(openSeaUrl)
        .then(res => blockheadData.map(blockhead =>
            blockhead.tokenId
                ? res.data.assets.find(asset => asset.token_id === blockhead.tokenId)
                : blockhead
        ))
        .catch(err => {
            console.log(err.message)
        });