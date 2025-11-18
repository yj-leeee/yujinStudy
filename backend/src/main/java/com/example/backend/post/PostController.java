package com.example.backend.post;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class PostController {
	private final PostService postService;
	
	@PostMapping("/posts")
	public PostResponseDTO create(@Valid @RequestBody PostCreateRequestDTO dto) {
		return postService.create(dto);
	}
	
	@GetMapping("/posts/{id}")
	public PostResponseDTO findPost(@PathVariable("id") Long id) {
		return postService.findPost(id);
	}
	
	@GetMapping("/posts")
	public List<PostResponseDTO> findAllPost(){
		return postService.findAllPost();
	}
	
	@PatchMapping("/posts/{id}")
	public PostResponseDTO update(@PathVariable("id") Long id, @Valid @RequestBody PostUpdateDTO dto) {
		return postService.update(id, dto);
	}
	
	@DeleteMapping("/posts/{id}")
	public void delete(@PathVariable("id") Long id) {
		postService.delete(id);
	}
	
	@GetMapping("/posts/search")
	public List<PostResponseDTO> searchByTitle(@RequestParam("keyword") String keyword ){
		return postService.findTitle(keyword);
	}
}
