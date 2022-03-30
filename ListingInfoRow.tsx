import {BaseClassCenter, ListingPrice, ListingLink} from "../styles";
import OSLogo from "../../public/osLogo.png";
import {ethers} from "ethers";
import React from "react";

export const ListingInfoRow = React.memo(({permalink, basePrice}) => {
    const listingPrice = ethers.utils.formatEther(basePrice);
    return (
        <BaseClassCenter>
            <ListingLink rel="noreferrer" href={permalink} target="_blank">
                <img alt="OpenSea logo" src={OSLogo} height="20px" width="20px" />
            </ListingLink>
            <ListingPrice>Listing Price: {listingPrice}Ξ</ListingPrice>
        </BaseClassCenter>
    )
});