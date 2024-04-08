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
    private int rating;

    private String imgURL;

    private String summary;

    private List<String> comment;

    public Novel(String title, String author, String genre, int releaseYear, String imgUrl, String summary) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = 0;
        this.imgURL = imgUrl;
        this.summary = summary;
    }
}
