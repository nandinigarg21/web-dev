const express = require("express")
const router = express.Router()
const {
    createRating,
    getAverageRating,
    getAllRatingAndReview,
  } = require("../controllers/ratingandReview")
  const { auth, isStudent } = require("../middlewares/auth")

  
router.post("/createRating", auth, isStudent, createRating)
router.get("/getAverageRating", getAverageRating)
router.get("/getAllRatingAndReviews", getAllRatingAndReview)

module.exports = router
