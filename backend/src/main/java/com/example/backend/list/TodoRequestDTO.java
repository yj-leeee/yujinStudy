package com.example.backend.list;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TodoRequestDTO {

	@NotBlank(message = "할일이 비었습니다.")
	private String todo;
	
	public Todo toEntity() {
		return Todo.builder()
				.todo(this.todo)
				.checked(false)
				.build();
	}
}
