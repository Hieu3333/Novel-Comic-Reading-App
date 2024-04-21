package com.example.novel.Admin;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "admin")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Admin{
    private String username;
    private String password;

    public Admin(String username) {
        this.username = "admin";
        this.password = "admin";
    }

    public String getPassword() {
        return password;
    }
}
