package com.example.backend.todo;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class TodoService {
	private final TodoRepository todoRepository;
	
	//할일 생성 메서드
	public TodoResponseDto create(TodoRequestDto todorequestDto) {
		Todo todo = todorequestDto.toEntity(); // DTO → Entity
        Todo saved = todoRepository.save(todo); // DB 저장
        return TodoResponseDto.from(saved); // Entity → DTO 변환
	}
}
