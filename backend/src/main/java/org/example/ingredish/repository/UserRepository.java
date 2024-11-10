package org.example.ingredish.repository;

import org.example.ingredish.model.User;
import org.springframework.data.repository.ListCrudRepository;

public interface UserRepository extends ListCrudRepository<User, Integer> {

}
