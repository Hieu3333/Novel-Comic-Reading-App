package com.example.novel.user;

import com.example.novel.novel.Novel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

import static java.lang.Boolean.FALSE;
import static java.lang.Boolean.TRUE;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody Map<String, String> payload){
        return new ResponseEntity<User>(userService.createUser(payload.get("username"),payload.get("password")), HttpStatus.CREATED);
    }


    @GetMapping("/{username}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable String username){
        return new ResponseEntity<Optional<User>>(userService.singleUser(username), HttpStatus.OK);
    }


    @PostMapping("/validate")
    public ResponseEntity<Boolean> validateUser(@RequestBody Map<String,String> payload){
        Boolean isValidate = userService.validateUser(payload.get("username"), payload.get("password"));
        if (isValidate){
            return new ResponseEntity<>(TRUE, HttpStatus.ACCEPTED);

        }
        else{
            return new ResponseEntity<>(FALSE, HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/{username}/favorite")
    public ResponseEntity<List<Novel>> getFavNovels(@PathVariable String username){
        return new ResponseEntity<List<Novel>>(userService.getFavNovel(username), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @PutMapping("/{username}/upgrade")
    public ResponseEntity<Optional<User>> upgradeUser(@PathVariable String username){
        return new ResponseEntity<Optional<User>>(userService.upgradeUser(username), HttpStatus.OK);
    }

    @GetMapping("/{username}/checkVIP")
    public ResponseEntity<Boolean> checkVIP(@PathVariable String username){
        Boolean isVIP = userService.checkVIP(username);
        if (isVIP){
            return new ResponseEntity<>(TRUE, HttpStatus.ACCEPTED);
        }
        else{
            return new ResponseEntity<>(FALSE, HttpStatus.NO_CONTENT);
        }
    }


}
