package org.example.ingredish.repository;

import org.example.ingredish.model.Person;
import org.springframework.data.repository.ListCrudRepository;

public interface PersonRepository extends ListCrudRepository<Person, Integer> {
}
