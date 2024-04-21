package com.example.novel.user;

import com.example.novel.novel.Novel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private ObjectId id;
    @Indexed(unique=true)
    private String username;
    private String password;

    private Boolean VIP;

    @DocumentReference
    private List<Novel> favoriteNovels;



    public User(String username, String password) {
        this.username = username;
        this.password=password;
    }

    public String getPassword() {
        return password;
    }
    public List<Novel> getFavoriteNovels() { return favoriteNovels;}
}
