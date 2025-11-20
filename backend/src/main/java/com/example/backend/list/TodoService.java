package com.example.backend.list;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TodoService {
	private final TodoRepository todoRepository;
	
	//할일 생성
	public TodoResponseDTO create(TodoRequestDTO dto) {
		Todo todo = dto.toEntity();
		Todo saved = todoRepository.save(todo);
		return TodoResponseDTO.fromEntity(saved);
	}
	
	//할일 전체 조회
	public List<TodoResponseDTO> findAll(){
		return todoRepository.findAll()
				.stream()
				.map(TodoResponseDTO::fromEntity)
				.toList();
	}
	
	//할일 삭제
	public void delete(Long id) {
		Todo todo = todoRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("존재하지 않는 할일 입니다"));
		todoRepository.delete(todo);
	}
}
