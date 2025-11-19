package com.example.backend.list;

import java.util.List;

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
}
