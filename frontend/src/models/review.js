export class Review {
<<<<<<< HEAD
    constructor(userName, imageurl, rating, comment, date) {
        this.userName = userName;
        this.imageurl = imageurl;
        this.rating = rating;
        this.comment = comment;
        this.date = date;
=======
    constructor(reviewerID, reviewerFirstName, reviewerLastName, reviewedID, reviewedFirstName, reviewedLastName, rating, comment, date, projectID) {
        this.reviewerID = reviewerID;
        this.reviewerFirstName = reviewerFirstName;
        this.reviewerLastName = reviewerLastName; 
        this.reviewedID = reviewedID; 
        this.reviewedFirstName = reviewedFirstName;
        this.reviewedLastName = reviewedLastName; 
        this.rating = rating;
        this.comment = comment;
        this.date = date;
        this.projectID = projectID; 
>>>>>>> austin
    }
}