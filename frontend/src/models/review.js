export class Review {
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
    }
}