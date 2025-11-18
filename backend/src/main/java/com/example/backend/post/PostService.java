package com.example.backend.post;

import java.util.List;

import org.springframework.data.domain.Sort;
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
	
	//게시글 단일 조회
	public PostResponseDTO findPost(Long id) {
		Post post = postRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("해당하는 게시글이 없습니다."));
		return PostResponseDTO.fromEntity(post);
	}
	
	//게시글 전체 조회
	public List<PostResponseDTO> findAllPost(){
		return postRepository.findAll(Sort.by(Sort.Direction.DESC, "createdAt"))
				.stream()
				.map(PostResponseDTO::fromEntity)
				.toList();
	}
	
	//게시글 수정
	public PostResponseDTO update(Long id,PostUpdateDTO dto) {
		Post post = postRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("해당하는 게시글이 없습니다."));
		
		post.update(dto.getTitle(), dto.getContent());
		
		Post saved = postRepository.save(post);
		return PostResponseDTO.fromEntity(saved);
	}
	
	//게시글 삭제
	public void delete(Long id) {
		Post post = postRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("해당하는 게시글이 없습니다."));
		
		postRepository.delete(post);
	}
	
	//제목 키워드 검색 API 만들기
	public List<PostResponseDTO> findTitle(String keyword) {
		List<Post> post = postRepository.findByTitleContaining(keyword);
		
		return post.stream()
				.map(PostResponseDTO::fromEntity)
				.toList();
	}
	
	//작성자로 조회
	public List<PostResponseDTO> findAuthor(String author){
		List<Post> post = postRepository.findByAuthor(author);
		
		return post.stream()
				.sorted((a, b) -> b.getCreatedAt().compareTo(a.getCreatedAt())) // 최신순 정렬
				.map(PostResponseDTO::fromEntity)
				.toList();
	}
}
