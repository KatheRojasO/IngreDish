package org.example.ingredish.controller;


import org.example.ingredish.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class UserController {

    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/api/users")
    @ResponseStatus(value = HttpStatus.CREATED)
    public void addUser(@RequestBody AddUserDTO addUserDTO){
        userService.addUser(addUserDTO.userId(), addUserDTO.userName());
    }

    @PostMapping("/api/users/{userId}/favorites")
    @ResponseStatus(value = HttpStatus.CREATED)
    public void addFavoriteToUser(@PathVariable int userId, @RequestBody FavoriteDTO favoriteDto){

        try {
            userService.addFavoriteToUser(userId, favoriteDto);
        } catch (IllegalArgumentException e){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Recipe is already a favorite");
        } catch (RuntimeException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found.");
        }
    }

    @GetMapping("/api/users/{userId}/favorites")
    public ResponseEntity<UserFavoriteDTO> getUserFavorites(@PathVariable int userId){
        try {
            UserFavoriteDTO userFavoriteDto = userService.getUserFavoritesByUserId(userId);
            return ResponseEntity.ok(userFavoriteDto);
        } catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/api/users/{userId}/favorites/{recipeId}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteUserFavorite(@PathVariable int userId, @PathVariable int recipeId){
        userService.deleteFavoriteForUser(userId, recipeId);
    }
}
