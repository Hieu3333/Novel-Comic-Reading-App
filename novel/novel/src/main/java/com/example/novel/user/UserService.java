package com.example.novel.user;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;
import com.example.novel.novel.Novel;
import com.example.novel.novel.NovelService;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired
    private NovelService novelService;


    public User createUser(String username, String password){
        return userRepository.insert(new User(username,password));

    }

    public Optional<User> singleUser(String username){
        return userRepository.findUserByUsername(username);
    }

    public Boolean validateUser(String username, String password){
        Optional<User> userOptional = singleUser(username);
        if (!userOptional.isPresent()){
            return false;
        }
        else{
            User user = userOptional.get();
            return user.getPassword().equals(password);
        }
    }

    public List<Novel> getFavNovel(String username){
        Optional<User> userOptional = singleUser(username);
        User user = userOptional.get();
        List<Novel> fav = user.getFavoriteNovels();
        return fav;

    }


}
