import { auth } from "@clerk/nextjs";
import { db } from "./db";

export const currentProfile = async () => {
    const {userId} = auth();

    if(!userId) {
        return null;
    }

    const profile = await db.proflie.findUnique({
        where: {
            userId
        }
    })
     
    return profile;
}