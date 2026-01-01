import React from "react";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import { useIsMobile } from "../hooks/use-mobile";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";

const Navbar = () => {

    const isMobile = useIsMobile();

    const navigations = [
        {
            name: "About",
            link: "#about"
        },
        {
            name: "Skills",
            link: "#skills"
        },
        {
            name: "Projects",
            link: "#projects"
        },
        {
            name: "Activity",
            link: "#activity"
        },
        {
            name: "Experience",
            link: "#experience"
        },
        {
            name: "Contact",
            link: "#contact"
        }
    ]

    return (
        <div className="flex flex-row justify-between items-center w-full px-5">
            <span className="font-space-grotesk text-xl font-bold text-primary">
                &lt;Dev /&gt;
            </span>
            <NavigationMenu viewport={isMobile}>
                <NavigationMenuList className="flex-wrap">
                    {navigations.map(navigation => (
                        <NavigationMenuItem key={navigation.name}>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <a className="text-muted-foreground" href={navigation.link}>{navigation.name}</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                    <Button>
                        Resume
                    </Button>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
};

export default Navbar;
