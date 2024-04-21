package com.example.novel.Admin;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

import static java.lang.Boolean.FALSE;
import static java.lang.Boolean.TRUE;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @PostMapping
    public ResponseEntity<Admin> createAdmin(){
        return new ResponseEntity<Admin>(adminService.createAdmin(), HttpStatus.CREATED);
    }

    @PostMapping("/validate")
    public ResponseEntity<Boolean> validateAdmin(@RequestBody Map<String, String> payload){
        Boolean isValidated = adminService.validateAdmin(payload.get("username"), payload.get("password"));
        if (isValidated){
            return new ResponseEntity<>(TRUE, HttpStatus.ACCEPTED);
        }
        else{
            return new ResponseEntity<>(FALSE, HttpStatus.NO_CONTENT);
        }
    }

    @PutMapping("/delete/{novelId}")
    public ResponseEntity<String> deleteNovel(@PathVariable ObjectId novelId) {
        adminService.deleteNovel(novelId);

        return new ResponseEntity<>("Novel deleted successfully", HttpStatus.OK);

    }
}
