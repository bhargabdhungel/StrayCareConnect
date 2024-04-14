// import OrgUser from "../../models/orgUser.js";
import User from "../../models/user.js";

const getAllOrgs = async (req,res) => {
    try {
        const orgUsers = await User.find({ "userType.org": true });
        return res.status(200).json({
            message: "Fetched Orgs Successfully",
            data:orgUsers,
            good:true
        })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default getAllOrgs;
