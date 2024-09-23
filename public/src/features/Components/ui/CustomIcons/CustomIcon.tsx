import React, { useState } from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import CustomTooltip from "../CustomTooltip";

interface Props {
    label: string;
    type: "edit" | "delete";
    onClick?: () => void;
}

const CustomIcon: React.FC<Props> = ({ label, type, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const customProps = {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onClick,
        style: { cursor: 'pointer' }
    };

    const renderIcon = () => {
        switch (type) {
            case "edit":
                return <IconEdit {...customProps} style={{ color: isHovered ? "var(--mantine-color-blue-8)" : "#D3D3D3", ...customProps.style }}/>
            case "delete":
                return <IconTrash {...customProps}  style={{ color: isHovered ? "var(--mantine-color-red-8)" : "#D3D3D3", ...customProps.style }}/>
            default:
                return null;
        }
    };

    return (
        <CustomTooltip label={label || ""} children={renderIcon()}/>
    )
};

export default CustomIcon;
