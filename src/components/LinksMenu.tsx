import OSLogo from "../../public/osLogo.png";
import TwitterLogo from "../../public/twitterLogo.png";
import React from "react";
import {BaseClassCenter, Link, TopMenu} from "../styles";
import { twitterProfile, openSeaProfile } from "../constants/topMenuConfig";

const socialLinks = [
    {url: openSeaProfile, description: "OpenSea logo", icon: OSLogo},
    {url: twitterProfile, description: "Twitter logo", icon: TwitterLogo},
];

export const LinksMenu = () => (
    <TopMenu>
        <BaseClassCenter>
            {socialLinks.map(link => (
                <Link key={link.description} rel="noreferrer" href={link.url} target="_blank">
                    <img alt={link.description} src={link.icon} height="50px" width="50px" />
                </Link>
            ))}
        </BaseClassCenter>
    </TopMenu>
);