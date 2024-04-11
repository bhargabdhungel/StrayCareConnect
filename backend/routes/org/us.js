export default async function us(req, res) {
  try {
    const orgId = req.orgId;
    const org = await orgUser.findById(orgId);
    if (!org) {
      return res.status(400).send({
        good: false,
        message: "Organization does not exist",
      });
    }

    return res.status(200).send({
      good: true,
      message: "Organization found",
      data: { orgname: org.orgname, email: org.email },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      good: false,
      message: "Internal server error",
    });
  }
}
