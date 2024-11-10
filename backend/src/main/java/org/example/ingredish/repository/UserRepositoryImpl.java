package org.example.ingredish.repository;


import org.example.ingredish.model.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserRepositoryImpl {

    UserRepository UserRepo;

    public UserRepositoryImpl(UserRepository UserRepo) {
        this.UserRepo = UserRepo;
    }

    public User createUser(User user){ return UserRepo.save(user); }

    public Optional<User> findUserById(int id){ return UserRepo.findById(id); }
}
