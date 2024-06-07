"use client";

import { FcGoogle } from "react-icons/fc";
import { FaTwitch } from "react-icons/fa";
import { Button } from "../ui/button";

const Social = () => {
    return <div className="flex items-center w-full gap-x-2">
        <Button  size="lg" variant="outline" onClick={() => {}} className="w-full">
            <FcGoogle className="h-5 w-5"/>
        </Button>
        <Button  size="lg" variant="outline" onClick={() => {}} className="w-full">
            <FaTwitch className="h-5 w-5"/>
        </Button>
    </div>;
};
export default Social;
