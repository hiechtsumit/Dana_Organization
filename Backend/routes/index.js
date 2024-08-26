
const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    return res.redirect('https://dana.org.in')
  } catch (error) {
    return res.redirect('https://dana.org.in')
  }
});


// router.post('/auth',)



router.use("/admin", require("./admin"));

router.use("/user", require("./user"));

module.exports = router;
