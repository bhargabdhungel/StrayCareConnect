import OrgUser from "../../models/orgUser.js";

export default async function getAllOrgs (req, res) {
    try {
        const allOrgs = await OrgUser.find();

        if(!allOrgs) {
            return res.status(400).send({
                good: false,
                message: "Error fetching data, please try again later!",
            })
        }

        return res.status(200).json({
            good: true,
            message: "All your organizations",
            data: allOrgs
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            good: false,
            message: "Internal server error"
        })
    }
}