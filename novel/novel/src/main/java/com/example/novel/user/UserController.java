package com.example.novel.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

import static java.lang.Boolean.FALSE;
import static java.lang.Boolean.TRUE;

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





}
