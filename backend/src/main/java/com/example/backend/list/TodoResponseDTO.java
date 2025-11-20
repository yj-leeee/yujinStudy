package com.example.backend.list;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TodoResponseDTO {
	private String todo;
	private boolean checked;
	private Long id;
	
	public static TodoResponseDTO fromEntity(Todo todo) {
		return TodoResponseDTO.builder()
				.id(todo.getId())
				.todo(todo.getTodo())
				.checked(todo.isChecked())
				.build();
	}
}
