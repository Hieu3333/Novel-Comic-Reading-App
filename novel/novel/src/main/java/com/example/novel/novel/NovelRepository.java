package com.example.novel.novel;

import com.example.novel.user.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;


import java.util.List;
import java.util.Optional;

public interface NovelRepository extends MongoRepository<Novel, ObjectId> {
    List<Novel> findByGenre(String genre);
}
