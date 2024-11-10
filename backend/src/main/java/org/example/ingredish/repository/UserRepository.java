package org.example.ingredish.repository;

import org.example.ingredish.model.User;
import org.springframework.data.repository.ListCrudRepository;
import java.util.Optional;

public interface UserRepository extends ListCrudRepository<User, String> {
    default void createOrUpdateUser(User user) {
        save(user);
    }

    Optional<User> findUserByUserId(String userId);
}

