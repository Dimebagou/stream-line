"use client";

import { FcGoogle } from "react-icons/fc";
import { FaTwitch } from "react-icons/fa";
import { Button } from "../ui/button";

const Social = () => {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                size="lg"
                variant="outline"
                onClick={() => {}}
                className="w-full group hover:shadow-md"
            >
                <FcGoogle className="h-5 w-5 group-hover:scale-105 transition" />
            </Button>
            <Button
                size="lg"
                variant="outline"
                onClick={() => {}}
                className="w-full group hover:shadow-md"
            >
                <FaTwitch className="h-5 w-5 group-hover:scale-105 transition" />
            </Button>
        </div>
    );
};
export default Social;
