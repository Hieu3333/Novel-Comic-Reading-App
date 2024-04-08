package com.example.novel.novel;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.novel.user.User;

@RequestMapping("/novels")
@CrossOrigin
@RestController
public class NovelController {
    @Autowired
    private NovelService novelService;

    @PostMapping
    public ResponseEntity<Novel> createNovel(@RequestBody Map<String, String> payload){
        return new ResponseEntity<Novel>(novelService.createNovel(payload.get("title"),
                payload.get("author"),payload.get("genre"), Integer.parseInt(payload.get("releaseYear")), payload.get("imgURL"), payload.get("summary")), HttpStatus.CREATED);
    }

    @GetMapping("/{novelId}")
    public ResponseEntity<Optional<Novel>> getNovel(@PathVariable ObjectId novelId){
        return new ResponseEntity<Optional<Novel>>(novelService.singleNovel(novelId),HttpStatus.OK);
    }
    @PostMapping("/{novelId}")
    public ResponseEntity<Optional<User>> addNovelToFavoriteList(@PathVariable ObjectId novelId, @RequestBody Map<String,String> payload){
        return new ResponseEntity<Optional<User>>(novelService.addNovelToFavoriteList(payload.get("username"), novelId),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Novel>> getAllNovels(){
        return new ResponseEntity<List<Novel>>(novelService.getAllNovels(), HttpStatus.OK);
    }



}
