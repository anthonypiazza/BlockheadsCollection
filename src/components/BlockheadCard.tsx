import React from "react";
import {
    NameDomain,
    BlockheadImage,
    CardContainer,
    OriginDate,
    BodyContainer,
    BaseClassCenter,
    CardSpacingDivider,
    SkeletonSpacer,
} from '../styles';
import { BlockheadModal, ListingInfoRow } from "src/components/index";

export const BlockheadCard = ({
  blockhead
}) => (
    <CardContainer>
        <BlockheadImage
            src={blockhead.image}
            alt={blockhead.nameDomain}
            height="200px"
            width="200px"
        />
        <NameDomain>Name: {blockhead.nameDomain}</NameDomain>
        <OriginDate>Origin Date: {blockhead.imageRefOriginDate}</OriginDate>
        <CardSpacingDivider />
        <BaseClassCenter>
            {blockhead?.attributes?.sell_orders
              ? <ListingInfoRow
                    permalink={blockhead.attributes.permalink}
                    basePrice={blockhead.attributes.sell_orders[0].base_price}
                />
              : <SkeletonSpacer />}
        </BaseClassCenter>
        <BodyContainer>
            <BlockheadModal blockhead={blockhead} />
        </BodyContainer>
    </CardContainer>
);