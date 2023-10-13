package lk.ijse.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/images")
@CrossOrigin
public class ImageController {

    private List<String> imageList = new ArrayList<>();

    @PostMapping()
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        try {
            System.out.println("Request recieved");
            String fileName = file.getOriginalFilename();
            file.transferTo(new File("/Users/achintha/Desktop/Images/" + fileName));
            imageList.add(fileName);
            return ResponseEntity.ok("Image uploaded successfully.");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload image.");
        }
    }

    @GetMapping()
    public List<String> listImages() {
        return imageList;
    }
}
