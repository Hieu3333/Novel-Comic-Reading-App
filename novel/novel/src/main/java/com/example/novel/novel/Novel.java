package com.example.novel.novel;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "novels")
@AllArgsConstructor
@NoArgsConstructor
public class Novel {
    @Id
    private String id;
    private String title;
    private String author;
    private String genre;



    private int releaseYear;



    private float rating;

    private String imgURL;

    private String summary;

    private String content;



    private List<String> comment;
    private int numberOfRatings;

    private int numberOfComments;

    private Boolean VIP;

    public Novel(String title, String author, String genre, int releaseYear, String imgUrl, String summary, String content, Boolean VIP) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = 0;
        this.imgURL = imgUrl;
        this.summary = summary;
        this.content = content;
        this.VIP = VIP;
        this.numberOfRatings=0;
        this.numberOfComments=0;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }
    public float getRating() {
        return rating;
    }

    public void setNumberOfRatings(int numberOfRatings) {
        this.numberOfRatings = numberOfRatings;
    }

    public int getNumberOfComments() {
        return numberOfComments;
    }

    public int getNumberOfRatings() {
        return numberOfRatings;
    }
}
