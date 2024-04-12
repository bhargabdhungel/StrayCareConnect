import OrgPost from "../../models/orgPost.js";

export default async function getSponsors (req, res) {
    try {
        const allSponsors = await OrgPost.find({})
            .populate("orgId", "orgname")

        if(!getSponsors){
            return res.status(400).json({
                good: false,
                message: "Error fetching data, please try again later!"
            })
        }

        return res.status(200).json({
            good: true,
            message: "All the sponsors",
            data: allSponsors
        })
    } catch (error) {
       console.log(error);
       return res.status(400).json({
        good: false,
        message: "Internal server error"
       }) 
    }
}