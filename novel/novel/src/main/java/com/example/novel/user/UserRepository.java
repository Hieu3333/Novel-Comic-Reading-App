package com.example.novel.user;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    Optional<User> findUserByUsername(String username);
    Optional<User> deleteUserByUsername(String username);
}
