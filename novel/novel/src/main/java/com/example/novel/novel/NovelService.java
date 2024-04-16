package com.example.novel.novel;

import com.example.novel.user.User;
import com.example.novel.user.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;

import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class NovelService {
    @Autowired
    private NovelRepository novelRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MongoTemplate mongoTemplate;


    public Novel createNovel(String title, String author, String genre, int releaseYear, String imgUrl, String summary, String content){
        return novelRepository.insert(new Novel(title,author,genre,releaseYear, imgUrl, summary, content));
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

    public Optional<User> deleteNovelFromFavoriteList(String username, ObjectId novelId){
        Optional<Novel> novelOptional = novelRepository.findById(novelId);
        Novel novel = novelOptional.get();
        mongoTemplate.update(User.class).matching(Criteria.where("username").is(username))
                .apply(new Update().pull("favoriteNovels",novel)).first();
        return userRepository.findUserByUsername(username);
    }

    public List<Novel> searchNovelsByName(String name) {
        // Create a text query to search for the provided name in the title field


        // Use the text query to create a MongoDB query
        Query query = new Query();
        query.addCriteria(Criteria.where("title").regex(name));

        // Execute the query and return the result
        return mongoTemplate.find(query, Novel.class);
    }

    public  Optional<Novel> updateRating(ObjectId novelId, int rating){
        Query query = new Query(Criteria.where("_id").is(novelId));
        Optional<Novel> novel = singleNovel(novelId);
        Novel novel1 = novel.get();
        float oldRating = novel1.getRating();
        int oldNumberOfRatings = novel1.getNumberOfRatings();
        float newRating = (oldRating*oldNumberOfRatings+rating)/(oldNumberOfRatings+1);


        // Create an update operation to set the new rating
        Update update = new Update();
        update.set("rating", newRating).inc("numberOfRatings",1);


        // Execute the update operation
        mongoTemplate.updateFirst(query, update, Novel.class);

        return novelRepository.findById(novelId);
    }

    public Optional<Novel> addComment(ObjectId novelId, String comment){
        mongoTemplate.update(Novel.class).matching(Criteria.where("_id").is(novelId))
                .apply(new Update().push("comment",comment)).first();

        Query query = new Query(Criteria.where("_id").is(novelId));
        Optional<Novel> novel = singleNovel(novelId);
        Novel novel1 = novel.get();
        int oldRating = novel1.getNumberOfComments();
        Update update = new Update();
        update.inc("numberOfComments",1);
        mongoTemplate.updateFirst(query, update, Novel.class);
        return novelRepository.findById(novelId);
    }

    public List<Novel> findNovelsByGenre(String genre){
        return novelRepository.findByGenre(genre);
    }

    public List<Novel> getNovelsWithHighestRating(int limit){
        // Create a sort criteria to sort by rating in descending order
        Sort sort = Sort.by(Sort.Direction.DESC, "rating");

        // Query the database to get novels sorted by rating with the given limit
        return novelRepository.findAll(sort).stream().limit(limit).collect(Collectors.toList());
    }

}
