package com.example.novel.novel;

import com.example.novel.user.User;
import com.example.novel.user.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;

import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;
@Service
public class NovelService {
    @Autowired
    private NovelRepository novelRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;


    public Novel createNovel(String title, String author, String genre, int releaseYear, String imgUrl, String summary){
        return novelRepository.insert(new Novel(title,author,genre,releaseYear, imgUrl, summary));
    }

    public Optional<Novel> singleNovel(ObjectId id){
        return novelRepository.findById(id);
    }

    public List<Novel> getAllNovels(){
        return (List<Novel>) novelRepository.findAll();
    }

    public Optional<User> addNovelToFavoriteList(String username, ObjectId novelId){
        Optional<Novel> novelOptional = novelRepository.findById(novelId);
        Novel novel = novelOptional.get();
        mongoTemplate.update(User.class).matching(Criteria.where("username").is(username))
                .apply(new Update().push("favoriteNovels").value(novel)).first();
        return userRepository.findUserByUsername(username);
    }


}
