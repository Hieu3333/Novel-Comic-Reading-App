package com.example.novel.Admin;

import com.example.novel.novel.NovelRepository;
import com.example.novel.user.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private NovelRepository novelRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    public Admin createAdmin(){
        return adminRepository.insert(new Admin("admin"));
    }

    public Boolean validateAdmin(String username, String password){
        if (username.equals("admin") && password.equals("admin")){
            return true;
        }
        else{
            return false;
        }
    }

    public void deleteNovel(ObjectId novelId) {
        novelRepository.deleteById(novelId);
    }

}
