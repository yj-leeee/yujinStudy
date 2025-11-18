package com.example.backend.post;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {

	private final PostRepository postRepository;
	
	//게시글 생성
	public PostResponseDTO create(PostCreateRequestDTO dto) {
		Post post = dto.toEntity();
		Post saved = postRepository.save(post);
		return PostResponseDTO.fromEntity(saved);
	}
}
